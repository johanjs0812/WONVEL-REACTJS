import React, { useEffect, useState } from 'react';
import useYourOrder from '../../hooks/yourorderApi';
import formatCurrency from '../../helpers/formatVnd';

const Style = () => {
    return (
        <style>
            {
                `
.container {
    width: 90%;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid #e0e0e0;
}

.logo {
    font-size: 24px;
    font-weight: bold;
    color: rgb(77, 74, 239);
}

.subscription-status {
    text-align: right;
}

.subscription-status .status {
    color: green;
}

.user-icon {
    width: 40px;
    height: 40px;
    background-color: #e0e0e0;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
}

.search-bar {
    margin: 20px 0;
}

.search-bar input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
}

.tabs {
    display: flex;
    border-bottom: 1px solid #e0e0e0;
}

.tabs a {
    padding: 10px 20px;
    text-decoration: none;
    color: #000;
    border-bottom: 2px solid transparent;
}

.tabs a.active {
    border-bottom: 2px solid #ff4081;
    font-weight: bold;
}

.order-summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
}

.sort-filter {
    display: flex;
}

.sort-filter span {
    margin-right: 20px;
}

.add-order-btn {
    background-color: #3f51b5;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.orders-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

.orders-table th, .orders-table td {
    padding: 15px;
    border: 1px solid #e0e0e0;
    text-align: left;
}

.orders-table th {
    background-color: #f5f5f5;
}

.status {
    padding: 5px 10px;
    border-radius: 5px;
    color: #fff;
}

.status.awaiting {
    background-color: #ffa726;
}

.status.paid {
    background-color: #66bb6a;
}

.status.unfulfilled {
    background-color: #ef5350;
}

.status.fulfilled {
    background-color: #42a5f5;
}


                `
            }
        </style>
    )
}

const HistoryOrder = () => {
    const [userLogin, setUserLogin] = useState('');
    const handleStorageChange = () => {
        const storedUserLogin = sessionStorage.getItem('user_login');
        if (storedUserLogin) {
          const sessionObject = JSON.parse(storedUserLogin);
          setUserLogin(sessionObject);
        } else {
          setUserLogin('');
        }
    };
    useEffect(() => {
        handleStorageChange();
        window.addEventListener('userLoginChanged', handleStorageChange);
        return () => {
          window.removeEventListener('userLoginChanged', handleStorageChange);
        };
    }, []);

    const { data } = useYourOrder(userLogin.id);
    console.log('order!', data);
    let booking = [];
    let invoices;
    if (data) {
        booking = data.userBookings;
        invoices = data.relatedInvoices;
    }

    return(
        <>
            < Style />
            <br></br>

            <div className="container">

                <header>
                    <div className="logo">WONVEL.COM</div>
                    <div style={{fontWeight: "bold"}}>{userLogin?.full_name}</div>
                </header>

                <main>
                    <div className="search-bar">
                        <input type="text" placeholder="Tìm kiếm hóa đơn" />
                    </div>
                    <div className="order-summary">
                        <h1>{booking.length} tour đã đặt</h1>
                    </div>
                    <table className="orders-table">
                        <thead>
                            <tr>
                                <th>Số phiếu</th>
                                <th>Thời gian</th>
                                <th>Tên tour</th>
                                <th>Số khách đi</th>
                                <th>Phương thức thanh toán</th>
                                <th>Tình trạng thanh toán</th>
                                <th>Tổng tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                        {booking.map((booking) => (
                            <tr key={booking.id}>
                                <td>#{booking.code}</td>
                                <td>{booking.booking_date}</td>
                                <td style={{maxWidth:"250px", fontWeight:"bold"}}>{booking.tour.tour_name}</td>
                                <td>{booking.num_of_people}</td>

                                {invoices.filter(invoice => invoice.booking_id === booking.id).map(filteredInvoice => (
                                    <td key={filteredInvoice.id}><span className="status awaiting">{filteredInvoice.payment_method}</span></td>
                                ))}

                                <td>
                                    <span className={`status ${booking.payment_status === 1 ? 'fulfilled' : 'unfulfilled'}`}>
                                        {booking.payment_status === 1 ? 'Đã thanh toán' : 'Chưa thanh toán'}
                                    </span>
                                </td>

                                <td>{formatCurrency(booking.total_price)}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </main>
            </div>

            <br></br>
        </>
    )
}

export default HistoryOrder;