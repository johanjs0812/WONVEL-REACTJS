import React from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import getFormattedDate from "../../helpers/getNowDate";
import formatCurrency from "../../helpers/formatVnd";
import formatDate from "../../helpers/formatTime";

const Style = () => {
    return (
      <style>
        {`
.container, .container-fluid, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
  margin-left: auto;
  margin-right: auto;
  padding-left: .75rem;
  padding-left: var(--bs-gutter-x, .75rem);
  padding-right: .75rem;
  padding-right: var(--bs-gutter-x, .75rem);
  width: 100%;
}

.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: .5rem;
  margin-top: 0;
}

@media (min-width: 1400px) {
  .container, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
    max-width: 1320px;
  }
}

@media (min-width: 768px) {
  .flex-md-row {
      flex-direction: row !important;
  }
}
.py-4 {
  padding-bottom: 1.5rem !important;
  padding-top: 1.5rem !important;
}

.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  /* margin-left: calc(var(--bs-gutter-x) / -2); */
  /* margin-right: calc(var(--bs-gutter-x) / -2); */
  margin-top: calc(var(--bs-gutter-y)* -1);
}

@media (min-width: 768px) {
  .col-md-8 {
      flex: 0 0 auto;
      width: 66.66667%;
  }
}

.find-booking .left .contact-info {
  background: #fff;
  border: .5px solid #d5d5d5;
  border-radius: 10px;
  box-sizing: border-box;
}

.p-4 {
  padding: 1.5rem !important;
}
.mb-4 {
  margin-bottom: 1.5rem !important;
}

.find-booking .left .contact-info .heading {
  border-bottom: .5px solid #d5d5d5;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
}

.heading .tieude {
  color: #e01600;
}

.fw-bold {
  font-weight: 700 !important;
}

h5 {
  font-size: 1.25rem;
}

@media (min-width: 768px) {
  .col-md-6 {
    flex: 0 0 auto;
    width: 50%;
  }
}

.find-booking .left .contact-info .label {
  color: #9a9a9a;
  margin-bottom: 5px;
}

.find-booking .left .contact-info .info {
  font-weight: 700;
}
p {
  margin-bottom: 1rem;
  margin-top: 0;
}

.col-12 {
  flex: 0 0 auto;
  width: 100%;
}

@media (min-width: 768px) {
  .col-md-3 {
      flex: 0 0 auto;
      width: 25%;
  }
}

@media (min-width: 768px) {
  .col-md-4 {
      flex: 0 0 auto;
      width: 33.33333%;
  }
}

.find-booking .left .booking-detail {
  background: #fff;
  border: .5px solid #d5d5d5;
  border-radius: 10px;
  box-sizing: border-box;
}

.find-booking .left .booking-detail .item {
  padding: 1rem .5rem;
}

.find-booking .left .booking-detail .heading {
  border-bottom: .5px solid #d5d5d5;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
}

.p-4 {
  padding: 1.5rem !important;
}

.mb-4 {
  margin-bottom: 1.5rem !important;
}

.find-booking .left .booking-detail .item {
  padding: 1rem .5rem;
}

.find-booking .left .booking-detail .item .label {
  font-weight: 700;
}

@media (min-width: 768px) {
  .col-md-9 {
      flex: 0 0 auto;
      width: 75%;
  }
}

.text-primary {
  color: #e01600 !important;
}

.booking-detail .btn {
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: .25rem;
  color: #2d4271;
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  padding: .275rem .75rem;
  text-align: center;
  text-decoration: none;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  -webkit-user-select: none;
  user-select: none;
  vertical-align: middle;
}

.booking-detail .btn-primary {
  background-color: #e01600;
  border-color: #e01600;
  color: #fff;
}


.find-booking .right .group-checkout {
  background: #fff;
  border: 1px solid #d5d5d5;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 20px;
}

.find-booking .right .group-checkout .heading {
  border-bottom: .5px solid #d5d5d5;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
}

.find-booking .right .group-checkout .product {
  border-bottom: 1px solid #e7e7e7;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
}

.find-booking .right .group-checkout .product .product-image {
  width: 100px;
}

.find-booking .right .group-checkout .product .product-image img {
  width: 100%;
}

.img-fluid, .img-thumbnail {
  height: auto;
  max-width: 100%;
}

.find-booking .right .group-checkout .product .product-content {
  padding-left: 13px;
  width: calc(100% - 100px);
}

.find-booking .right .group-checkout .product .product-content .title {
  color: #2d4271;
  font-weight: 700;
  line-height: 19px;
}

.find-booking .right .group-checkout .detail {
  margin-bottom: 16px;
}

.find-booking .right .group-checkout .detail .item {
  padding: .5rem;
  justify-content: space-between;
}

.text-end {
  text-align: right !important;
}

.find-booking .passenger-list {
  background: #fff;
  border: .5px solid #d5d5d5;
  border-radius: 10px;
  box-sizing: border-box;
}

.table {
  --bs-table-bg: transparent;
  --bs-table-accent-bg: transparent;
  --bs-table-striped-color: #212529;
  --bs-table-striped-bg: rgba(0, 0, 0, 0.05);
  --bs-table-active-color: #212529;
  --bs-table-active-bg: rgba(0, 0, 0, 0.1);
  --bs-table-hover-color: #212529;
  --bs-table-hover-bg: rgba(0, 0, 0, 0.075);
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  vertical-align: top;
  border-color: #dee2e6;
}

tbody, td, tfoot, th, thead, tr {
  border: 0 solid;
  border-color: inherit;
}

.table>thead {
  vertical-align: bottom;
}

.booking-table thead {
  background-color: #ebebeb;
}

.table>:not(caption)>*>* {
  padding: .5rem .5rem;
  background-color: var(--bs-table-bg);
  border-bottom-width: 1px;
  box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);
}

.table>:not(:last-child)>:last-child>* {
  border-bottom-color: currentColor;
}



tbody, td, tfoot, th, thead, tr {
  border: 0 solid;
  border-color: inherit;
}

.table>tbody {
  vertical-align: inherit;
}

        `}
      </style>
    );
};

const Payment = () => {
    const navigate = useNavigate();
    const paymentState = useSelector((state) => state.payment);

    console.log(paymentState)

    const hoadon = paymentState.contact;
    const hanhkhach = paymentState.guets2;
    const booking = paymentState.booking;
    const tour = paymentState.tour;

    if (!booking) {
      navigate('/yourorder');
    }

    return(
        <>
          <Style />
          <main className="find-booking">
              <section>
                  <div className="container">
                      <div className="row py-4 flex-md-row flex-column-reverse" style={{ display: 'flex', justifyContent: 'space-between' }}>

                          <div className="col-md-8 col-12 left" style={{ width: '66%', padding: '0 12px' }}>
                              <section>
                                  <div className="contact-info p-4 mb-4">
                                      <div className="heading">
                                          <h5 className="fw-bold tieude" data-gtm-vis-first-on-screen778132_164="16607570">THÔNG TIN LIÊN LẠC</h5>
                                      </div>
                                      <div className="row">
                                          <div className="col-12 col-md-6">
                                          <span className="label">Họ tên</span>
                                          <p className="info">{hoadon?.full_name}</p>
                                          </div>
                                          <div className="col-md-6 col-12">
                                          <span className="label">Email</span>
                                          <p className="info">{hoadon?.email}</p>
                                          </div>
                                          <div className="col-md-6 col-12">
                                          <span className="label">Địa chỉ</span>
                                          <p className="info">{hoadon?.address}</p>
                                          </div>
                                          <div className="col-md-3 col-6">
                                          <span className="label">Di động</span>
                                          <p className="info">{hoadon?.phone_number}</p>
                                          </div>
                                          <div className="col-md-3 col-6">
                                          <span className="label">Điện thoại</span>
                                          <p className="info">{hoadon?.phone_number}</p>
                                          </div>
                                          <div className="col-md-3 col-12 d-none">
                                          <span className="label">Số khách</span>
                                          <p className="info">
                                            {hanhkhach.length}
                                          </p>
                                          </div>
                                          <div className="col-12">
                                          <span className="label">Ghi chú</span>
                                          <p className="info">Booking từ WONVEL.COM</p>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="booking-detail p-4 mb-4">
                                      <div className="heading">
                                          <h5 className="fw-bold tieude" data-gtm-vis-first-on-screen778132_164="16607571">CHI TIẾT BOOKING</h5>
                                      </div>
                                      <div className="row item">
                                          <div className="col-md-3 col-12 label">Số booking</div>
                                          <div className="col-md-9 col-12 text">
                                          <span className="text-primary fw-bold">{booking?.code}</span> (Quý khách vui lòng nhớ số booking để thuận tiện cho các giao dịch sau này)
                                          </div>
                                      </div>
                                      <div className="row item">
                                          <div className="col-md-3 col-12 label">Trị giá booking</div>
                                          <div className="col-md-9 col-12 text" data-gtm-vis-first-on-screen778132_145="16607556">{formatCurrency(booking?.total_price)}</div>
                                      </div>
                                      {/* <div className="row item">
                                          <div className="col-md-3 col-12 label">Số tiền đã thanh toán</div>
                                          <div className="col-md-9 col-12 text">{khachtrabaonhieuroi}</div>
                                      </div>
                                      <div className="row item">
                                          <div className="col-md-3 col-12 label">Số tiền còn lại</div>
                                          <div className="col-md-9 col-12 text">{tienconlai}</div>
                                      </div> */}
                                      <div className="row item">
                                          <div className="col-md-3 col-12 label">Ngày đăng ký</div>
                                          <div className="col-md-9 col-12 text">{getFormattedDate()}</div>
                                      </div>
                                      <div className="row item">
                                          <div className="col-md-3 col-12 label">Hình thức thanh toán</div>
                                          <div className="col-md-9 col-12 text">
                                            {paymentState.method}
                                          </div>
                                      </div>
                                      <div className="row item">
                                          <div className="col-md-3 col-12 label">Tình trạng</div>
                                          <div className="col-md-9 col-12 text">{paymentState.pm_status}</div>
                                      </div>
                                      {/* <div className="row item">
                                          <div className="col-md-3 col-12 label">Thời hạn thanh toán</div>
                                          <div className="col-md-9 col-12 text">
                                          <span className="text-primary fw-bold">27/05/2024 03:06:17 </span>(Theo giờ Việt Nam. Booking sẽ tự động hủy nếu quá thời hạn thanh toán trên)
                                          </div>
                                      </div> */}
                                  </div>
                              </section>
                          </div>

                          <div className="col-md-4 col-12 right" style={{ width: '33%', padding: '0 12px' }}>
                              <div className="group-checkout">
                                  <div className="heading">
                                      <h5 className="fw-bold tieude" data-gtm-vis-first-on-screen778132_164="16607574">PHIẾU XÁC NHẬN BOOKING</h5>
                                  </div>
                                  <div className="product">
                                      <div className="product-image">
                                          <a href="#1">
                                            <img src={tour?.tour?.img} className="img-fluid" alt="" />
                                          </a>
                                      </div>
                                      <div className="product-content">
                                          <p className="title">{tour?.tour?.tour_name}</p>
                                          <span>Số booking:<span className="text-primary fw-bold"> {booking?.code}</span></span>
                                      </div>
                                  </div>
                                  <div className="detail">
                                      <div className="row item">
                                          <div className="col-4 fw-bold">Mã tour</div>
                                          <div className="col-8 text-end">{tour?.tour?.code_tour}</div>
                                      </div>
                                      {/* <div className="row item">
                                          <div className="col-4 fw-bold">Hành trình</div>
                                          <div className="col-8 text-end">SGN - HAN//HAN - SGN</div>
                                      </div> */}
                                      <div className="row item">
                                          <div className="col-4 fw-bold">Ngày đi</div>
                                          <div className="col-8 text-end">{formatDate(tour?.tour?.start_date)}</div>
                                      </div>
                                      <div className="row item">
                                          <div className="col-4 fw-bold">Ngày về</div>
                                          <div className="col-8 text-end">{formatDate(tour?.tour?.end_date)}</div>
                                      </div>
                                      <div className="row item">
                                          <div className="col-4 fw-bold">Nơi khởi hành</div>
                                          <div className="col-8 text-end">{tour?.tour?.departure_location}</div>
                                      </div>
                                  </div>
                                  <div className="box-loading" style={{display: 'none'}}>
                                      <div className="col-sm-12 col-md-auto col-lg-auto">
                                          <div className="loading animate__animated animate__fadeIn ">
                                          <img loading="lazy" alt="Vietravel" src={tour?.tour?.img} width="120" height="45" style={{ position: 'relative', left: '-18px' }} />
                                          <div className="loading03">
                                              <span>V</span><span>I</span><span>E</span><span>T</span><span>R</span><span>A</span><span>V</span><span>E</span><span>L</span>
                                          </div>
                                          <br />
                                          <span className="desc">Mạng bán tour trực tuyến đầu tiên tại Việt Nam.</span>
                                          </div>
                                      </div>
                                  </div>

                              </div>
                          </div>

                      </div>

                      <div className="d-none d-lg-block">
                        <div className="passenger-list p-4 mb-4">

                          <div className="heading">
                          <h5 className="fw-bold tieude" data-gtm-vis-first-on-screen778132_164="16609655">DANH SÁCH HÀNH KHÁCH</h5>
                          </div>

                          <table className="table booking-table">
                          <thead>
                              <tr className="fw-bold">
                                <td>Họ tên</td>
                                <td>Ngày sinh</td>
                                <td>Giới tính</td>
                                <td>Độ tuổi</td>
                              </tr>
                          </thead>

                          <tbody>
                              {hanhkhach?.map((guest, index) => (
                              <tr key={index}>
                                  <td>{guest.name}</td>
                                  <td>{guest.birthday}</td>
                                  <td>{guest.gender}</td>
                                  <td></td>
                              </tr>
                              ))}
                          </tbody>

                          <tfoot>
                              <tr>
                              <td colSpan="6" className="text-end">
                                  <span>Tổng cộng: </span>
                                  <span className="price text-primary fw-bold">{formatCurrency(booking?.total_price)}</span>
                              </td>
                              </tr>
                          </tfoot>
                          </table>

                        </div>

                      </div>
                  </div>
              </section>
          </main>
        </>
    )
}

export default Payment;