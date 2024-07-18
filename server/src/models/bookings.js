const { sequelize } = require('../util/mysql'); // Import sequelize từ mysql.js
const Sequelize = require('sequelize');

const user = sequelize.define('user', {
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pass: {
        type: Sequelize.STRING,
        allowNull: true
    },
    full_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: true
    },
    phone_number: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, { 
    timestamps: false,
    freezeTableName: true 
});

const invoices = sequelize.define('invoices', {
    booking_id: Sequelize.INTEGER,
    invoice_date: Sequelize.STRING,
    total_amount: Sequelize.INTEGER,
    payment_method: Sequelize.STRING,
}, { timestamps: false });

const guests = sequelize.define('guests', {
    name: Sequelize.STRING,
    gender: Sequelize.STRING,
    birthday: Sequelize.STRING,
    booking_id: Sequelize.INTEGER,
}, { timestamps: false });

const bookings = sequelize.define('bookings', {
    booking_date: Sequelize.STRING,
    user_id: Sequelize.INTEGER,
    tour_id: Sequelize.INTEGER,
    total_price: Sequelize.INTEGER,
    payment_status: Sequelize.TINYINT,
    num_of_people: Sequelize.INTEGER,
    code: Sequelize.STRING,
}, { timestamps: false });

const tours = sequelize.define('tours', {
    tour_name: Sequelize.STRING,
    description: Sequelize.TEXT,
    departure_location: Sequelize.STRING,
    code_tour: Sequelize.STRING,
    start_date: Sequelize.STRING,
    end_date: Sequelize.STRING,
    transportation: Sequelize.STRING,
    price: Sequelize.INTEGER,
    discount_price: Sequelize.INTEGER,
    destination_id: Sequelize.INTEGER,
    img: Sequelize.TEXT,
}, { timestamps: false });

// Thiết lập mối quan hệ

invoices.belongsTo(bookings, { foreignKey: 'booking_id' });
bookings.hasMany(invoices, { foreignKey: 'booking_id' });

guests.belongsTo(bookings, { foreignKey: 'booking_id' });
bookings.hasMany(guests, { foreignKey: 'booking_id' });

user.hasMany(bookings, { foreignKey: 'user_id' });
bookings.belongsTo(user, { foreignKey: 'user_id' });

tours.hasMany(bookings, { foreignKey: 'tour_id' });
bookings.belongsTo(tours, { foreignKey: 'tour_id' });

class BookingsTable {
    constructor(x) {
        this.bookings = x;
    }

    // Phương thức lấy toàn bộ dữ liệu
    getAll() {
        return this.bookings.findAll();
    }

    // Phương thức lấy dữ liệu theo id
    getById(id) {
        return this.bookings.findByPk(id);
    }

    // Phương thức thêm dữ liệu vào bảng
    add(data) {
        return this.bookings.create(data);
    }

    //Truy vấn hóa đơn lồng nhiều bảng
    async getWithRelations(id) {
        return await this.bookings.findByPk(id, {
          include: [
            {
              model: user,
              required: true
            },
            {
              model: invoices,
              required: false
            },
            {
              model: guests,
              required: false
            },
            {
              model: tours,
              required: true
            },
          ]
        });
    }

    async getBookingsWithUserAndInvoices(userId) {
        // Lấy tất cả các bản ghi từ bảng booking có user_id cụ thể
        const userBookings = await this.bookings.findAll({
            where: { user_id: userId },
            include: [
                {
                    model: tours,
                    required: true
                }
            ]
        });

        // Lấy các booking_id từ userBookings
        const bookingIds = userBookings.map(booking => booking.id);

        // Lấy tất cả các hóa đơn liên quan đến các booking_id đó
        const relatedInvoices = await invoices.findAll({
            where: {
                booking_id: bookingIds
            }
        });

        // Lấy các tour_id từ userBookings
        const tourIds = userBookings.map(booking => booking.tour_id);

        // Lấy tất cả các tour liên quan đến các tour_id đó
        const relatedTours = await tours.findAll({
            where: {
                id: tourIds
            }
        });

        return {
            userBookings,
            relatedInvoices,
            relatedTours
        };
    }
      
}

const bookingsTableInstance = new BookingsTable(bookings);

module.exports = bookingsTableInstance;
