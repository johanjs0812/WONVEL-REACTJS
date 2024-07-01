const { sequelize } = require('../util/mysql'); // Import sequelize từ mysql.js
const Sequelize = require('sequelize');
const { Op, fn, col, literal } = require('sequelize');

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

class TourTable {
    constructor(tours) {
        this.tours = tours;
    }

    // Phương thức lấy toàn bộ dữ liệu
    getAllTours() {
        return this.tours.findAll();
    }

    // Phương thức lấy dữ liệu theo id
    getTourById(id) {
        return this.tours.findByPk(id);
    }

    // Phương thức lấy các tour có discount_price khác null
    getToursWithDiscount() {
        return this.tours.findAll({
            where: {
                discount_price: {
                    [Sequelize.Op.ne]: null
                }
            }
        });
    }

    // Phương thức lấy các tour theo transportation
    getToursByTransportation(transportationValue) {
        return this.tours.findAll({
            where: {
                transportation: transportationValue
            }
        });
    }

    // Phương thức lấy các tour theo start date
    getToursByStartDate(date) {
        return this.tours.findAll({
            where: {
                start_date: date
            }
        });
    }

    // Phương thức lấy các tour theo departure location
    getToursByDepartureLocation(location) {
        return this.tours.findAll({
            where: {
                departure_location: location
            }
        });
    }

    // Phương thức lấy các tour theo price range
    getToursByPriceRange(minPrice, maxPrice) {
        let priceCondition = {};
        if (minPrice !== undefined) {
            priceCondition[Op.gte] = minPrice;
        }
        if (maxPrice !== undefined) {
            priceCondition[Op.lte] = maxPrice;
        }

        return this.tours.findAll({
            where: {
                price: priceCondition
            }
        });
    }

    // Phương thức lấy các tour theo khoảng cách ngày
    getToursByDateRange(minDays, maxDays) {
        let whereCondition;
        if (maxDays !== null) {
            whereCondition = literal(`DATEDIFF(end_date, start_date) BETWEEN ${minDays} AND ${maxDays}`);
        } else {
            whereCondition = literal(`DATEDIFF(end_date, start_date) > ${minDays}`);
        }

        return this.tours.findAll({
            where: whereCondition
        });
    }

    // Phương thức lấy nhiều dữ liệu theo id
    getDestination(id) {
        return this.tours.findAll({
            where: {
                destination_id: id
            }
        });
    }
}

// Tạo một thể hiện của lớp TourTable
const tourTableInstance = new TourTable(tours);

module.exports = tourTableInstance;
