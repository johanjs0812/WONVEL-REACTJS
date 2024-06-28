import React from "react";
import "../../styles/payment.css"

function getPrieGroup(x){

}

function getAgeGroup(x){
    
}

const Payment = () => {
    
    const hoadon = {};
    const ageGroup = [];
    const khachtrabaonhieuroi = '';
    const tienconlai = '';
    const invoices = [];

    return(
        <>
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
                                        <p className="info">{hoadon?.user?.full_name}</p>
                                        </div>
                                        <div className="col-md-6 col-12">
                                        <span className="label">Email</span>
                                        <p className="info">{hoadon?.user?.email}</p>
                                        </div>
                                        <div className="col-md-6 col-12">
                                        <span className="label">Địa chỉ</span>
                                        <p className="info">{hoadon?.user?.address}</p>
                                        </div>
                                        <div className="col-md-3 col-6">
                                        <span className="label">Di động</span>
                                        <p className="info">{hoadon?.user?.phone_number}</p>
                                        </div>
                                        <div className="col-md-3 col-6">
                                        <span className="label">Điện thoại</span>
                                        <p className="info">{hoadon?.user?.phone_number}</p>
                                        </div>
                                        <div className="col-md-3 col-12 d-none">
                                        <span className="label">Số khách</span>
                                        <p className="info">
                                            {Object.keys(ageGroup).map((key) => (
                                            <React.Fragment key={key}>
                                                {ageGroup[key] !== 0 && (
                                                <span>
                                                    {key}: {ageGroup[key]}
                                                </span>
                                                )}
                                            </React.Fragment>
                                            ))}
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
                                        <span className="text-primary fw-bold">{hoadon?.code}</span> (Quý khách vui lòng nhớ số booking để thuận tiện cho các giao dịch sau này)
                                        </div>
                                    </div>
                                    <div className="row item">
                                        <div className="col-md-3 col-12 label">Trị giá booking</div>
                                        <div className="col-md-9 col-12 text" data-gtm-vis-first-on-screen778132_145="16607556">{hoadon?.total_price}</div>
                                    </div>
                                    <div className="row item">
                                        <div className="col-md-3 col-12 label">Số tiền đã thanh toán</div>
                                        <div className="col-md-9 col-12 text">{khachtrabaonhieuroi}</div>
                                    </div>
                                    <div className="row item">
                                        <div className="col-md-3 col-12 label">Số tiền còn lại</div>
                                        <div className="col-md-9 col-12 text">{tienconlai}</div>
                                    </div>
                                    <div className="row item">
                                        <div className="col-md-3 col-12 label">Ngày đăng ký</div>
                                        <div className="col-md-9 col-12 text">{hoadon?.booking_date}</div>
                                    </div>
                                    <div className="row item">
                                        <div className="col-md-3 col-12 label">Hình thức thanh toán</div>
                                        <div className="col-md-9 col-12 text">
                                        {invoices.map((method, index) => (
                                            <React.Fragment key={index}>
                                            <span>{method.payment_method}</span><br />
                                            </React.Fragment>
                                        ))}
                                        {/* <button className="btn btn-primary" id="btnChangePayment">Thay đổi</button> */}
                                        </div>
                                    </div>
                                    <div className="row item">
                                        <div className="col-md-3 col-12 label">Tình trạng</div>
                                        <div className="col-md-9 col-12 text">{hoadon?.payment_status}</div>
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
                                        <img src={hoadon?.tour?.img} className="img-fluid" alt="" />
                                        </a>
                                    </div>
                                    <div className="product-content">
                                        <p className="title">{hoadon?.tour?.tour_name}</p>
                                        <span>Số booking:<span className="text-primary fw-bold"> {hoadon?.code}</span></span>
                                    </div>
                                </div>
                                <div className="detail">
                                    <div className="row item">
                                        <div className="col-4 fw-bold">Mã tour</div>
                                        <div className="col-8 text-end">{hoadon?.tour?.code_tour}</div>
                                    </div>
                                    {/* <div className="row item">
                                        <div className="col-4 fw-bold">Hành trình</div>
                                        <div className="col-8 text-end">SGN - HAN//HAN - SGN</div>
                                    </div> */}
                                    <div className="row item">
                                        <div className="col-4 fw-bold">Ngày đi</div>
                                        <div className="col-8 text-end">{hoadon?.tour?.start_date}</div>
                                    </div>
                                    <div className="row item">
                                        <div className="col-4 fw-bold">Ngày về</div>
                                        <div className="col-8 text-end">{hoadon?.tour?.end_date}</div>
                                    </div>
                                    <div className="row item">
                                        <div className="col-4 fw-bold">Nơi khởi hành</div>
                                        <div className="col-8 text-end">{hoadon?.tour?.departure_location}</div>
                                    </div>
                                </div>
                                <div className="box-loading" style={{display: 'none'}}>
                                    <div className="col-sm-12 col-md-auto col-lg-auto">
                                        <div className="loading animate__animated animate__fadeIn ">
                                        <img loading="lazy" alt="Vietravel" src={hoadon?.tour?.img} width="120" height="45" style={{ position: 'relative', left: '-18px' }} />
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
                            <td className="d-none">Giảm giá?</td>
                            <td>Ngày sinh</td>
                            <td>Giới tính</td>
                            <td>Địa chỉ</td>
                            <td>Độ tuổi</td>
                            </tr>
                        </thead>

                        <tbody>
                            {hoadon?.guests?.map((guest, index) => (
                            <tr key={index}>
                                <td>{guest.name}</td>
                                <td className="d-none">{getPrieGroup(guest.birthday)}</td>
                                <td>{guest.birthday}</td>
                                <td>{guest.gender}</td>
                                <td></td>
                                <td>{getAgeGroup(guest.birthday)}</td>
                            </tr>
                            ))}
                        </tbody>

                        <tfoot>
                            <tr>
                            <td colSpan="6" className="text-end">
                                <span>Tổng cộng: </span>
                                <span className="price text-primary fw-bold">{hoadon?.total_price}</span>
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