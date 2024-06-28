import React from "react";
import "../../styles/information-payment.css"

function removePeople(x) {

}

function addPeople(x) {

}

function removeAdult(x){

}

function removeBaby(x){

}

function removeChildren(x){

}

function removeYoungChild(x){

}

function paychangePage(x){

}

const InformationPayment = () => {

    const page = '';
    const tour = {
    }
    const timeday = '';

    const account = {}

    const adultsArray = [];
    const young_childsArray = [];
    const childrenArray = [];
    const babysArray = [];
    
    const alertVisible = '';

    const days = [];
    const months = [];
    const years = [];

    const total = '';

    return (
        <>
            <div className="booking-tour">

                <section className="checkout-head d-block d-lg-block">
                    <div className="container">
                        <div className="row">
                        <ul className="head col-12">
                            <li className="checked">1. Nhập thông tin</li>
                            <li className="checked">
                            <i className="bx bx-chevron-right"></i>
                            </li>
                            <li className={page === 'method' ? 'checked' : ''}>2. Thanh toán</li>
                        </ul>
                        </div>
                    </div>
                </section>

                <section className="checkout-main order-tour animate__fadeIn animate__animated">

                    <div className="container">

                        <div className="col-12 top" style={{ display: page === 'inf' ? 'block' : 'none' }}>
                            <div className="product">
                                <div className="product-image">
                                <div className="image">
                                    <img src={tour?.tour?.img} className="img-fluid" alt="" />
                                </div>
                                </div>

                                <div className="product-content">
                                <p className="title" id="title">{tour?.tour?.tour_name}</p>
                                <div className="entry">
                                    <div className="entry-inner">
                                    <span>Mã Tour <b>{tour?.tour?.code_tour}</b></span>
                                    <span>Khởi hành <b>{tour?.tour?.start_date}</b></span>
                                    <span>Thời gian <b>{timeday}</b></span>
                                    <span>Nơi khởi hành <b>{tour?.tour?.departure_location}</b></span>
                                    {/* <span>Số chỗ còn nhận <b>8</b></span> */}
                                    {/* <span>Dịch vụ tùy chọn <b>Bay Vietnam Airlines - Khách sạn 5* Hôtel de la Coupole - MGallery</b></span> */}
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div style={{display: "flex"}} className="phanchiathienha">

                            <div className="col-md-8 col-12 left" style={{padding: "0 12px"}}>

                                <div className="payment-infor" style={{ display: page === 'inf' ? 'block' : 'none' }}>
                                    <h2 className="d-none d-lg-block">Tổng quan về chuyến đi</h2>

                                    <h3>Thông tin liên lạc</h3>

                                    <div className="customer-contact mb-3">
                                        <form className="customer-contact-inner" action="#" method="get" id="form">
                                        <div className="name">
                                            <label>Họ và Tên <b>*</b></label>
                                            <input autoComplete="off" type="text" className="form-control" name="fullName" value={account?.full_name} />
                                            <div className="errorform error-notes">Vui lòng nhập thông tin</div>
                                        </div>
                                        <div className="mail">
                                            <label>Email <b>*</b></label>
                                            <input type="email" className="form-control" name="email" value={account?.email} />
                                            <div className="errorform error-notes">Vui lòng nhập thông tin</div>
                                        </div>
                                        <div className="phone">
                                            <label>Số điện thoại <b>*</b></label>
                                            <input type="number" className="form-control" name="phone" value={account?.phone_number} />
                                            <div className="errorform error-notes">Vui lòng nhập thông tin</div>
                                        </div>
                                        <div className="address">
                                            <label>Địa chỉ</label>
                                            <input type="text" className="form-control" name="address" value={account?.address} style={{ marginBottom: '18px' }} />
                                            {/* <div className="errorform error-notes">Vui lòng nhập thông tin</div> */}
                                        </div>
                                        </form>
                                    </div>

                                    <div className="customer">
                                        <h3>Hành khách</h3>

                                        <div className="change">
                                        <div className="change-title">
                                            <h4>Người lớn</h4>
                                            <p>Từ 12 tuổi</p>
                                        </div>
                                        <div className="change-number">
                                            <span className="minus btn-click" onClick={() => removePeople('adults')}><i className="bx bx-minus-circle" id="adultMinus"></i></span>
                                            <span className="number" id="adult">{adultsArray.length}</span>
                                            <span className="plus btn-click" onClick={() => addPeople('adults')}><i className="bx bx-plus-circle" id="adultPlus"></i></span>
                                        </div>
                                        </div>

                                        <div className="change">
                                        <div className="change-title">
                                            <h4>Trẻ em</h4>
                                            <p>Từ 5 - 11 tuổi</p>
                                        </div>
                                        <div className="change-number">
                                            <span className="minus btn-click" onClick={() => removePeople('childrens')}><i className="bx bx-minus-circle" id="childrenMinus"></i></span>
                                            <span className="number" id="children">{childrenArray.length}</span>
                                            <span className="plus btn-click" onClick={() => addPeople('childrens')}><i className="bx bx-plus-circle" id="childrenPlus"></i></span>
                                        </div>
                                        </div>

                                        <div className="change">
                                        <div className="change-title">
                                            <h4>Trẻ nhỏ</h4>
                                            <p>Từ 2 - 4 tuổi</p>
                                        </div>
                                        <div className="change-number">
                                            <span className="minus btn-click" onClick={() => removePeople('young_childs')}><i className="bx bx-minus-circle" id="smallchildrenMinus"></i></span>
                                            <span className="number" id="smallchildren">{young_childsArray.length}</span>
                                            <span className="plus btn-click" onClick={() => addPeople('young_childs')}><i className="bx bx-plus-circle" id="smallchildrenPlus"></i></span>
                                        </div>
                                        </div>

                                        <div className="change">
                                        <div className="change-title">
                                            <h4>Em bé</h4>
                                            <p>Từ 0 - 2 tuổi</p>
                                        </div>
                                        <div className="change-number">
                                            <span className="minus btn-click" onClick={() => removePeople('babys')}><i className="bx bx-minus-circle" id="babyMinus"></i></span>
                                            <span className="number" id="baby">{babysArray.length}</span>
                                            <span className="plus btn-click" onClick={() => addPeople('babys')}><i className="bx bx-plus-circle" id="babyPlus"></i></span>
                                        </div>
                                        </div>
                                    </div>

                                    <div className="customer-notice">
                                        <div className="customer-notice-left">
                                        . Người lớn sinh trước ngày<b className="mx-1">08/06/2012</b><br />
                                        . Trẻ nhỏ sinh từ<b className="mx-1">09/06/2019</b> đến<b className="mx-1">08/06/2022</b>
                                        </div>
                                        <div className="customer-notice-right">
                                        . Trẻ em sinh từ<b className="mx-1">09/06/2012</b> đến<b className="mx-1">08/06/2019</b><br />
                                        . Em bé sinh từ<b className="mx-1">09/06/2022</b> đến<b className="mx-1">10/06/2024</b>
                                        </div>
                                    </div>

                                    <section className="wrap-info-customer-number-person-details mt-4 wrapper-new-input">
                                        <div className="title-section mb-3 title-hotel-flight-infor" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span>Thông tin hành khách</span>
                                        <span id="alert" style={{ visibility: alertVisible ? 'visible' : 'hidden', color: 'red', fontSize: '13px', fontWeight: '400' }}>
                                            Tối thiểu phải có 1 hành khách!
                                        </span>
                                        </div>

                                        <div className="group-fields-input-contact-adult group-fields-input-contact-wrapper mb-3">
                                            <div className="title-persona">
                                                <img src="https://travel.com.vn/images/icons/persons/adult.svg" alt="Người lớn" />Người lớn
                                            </div>

                                            {adultsArray.map((item, i) => (
                                            <div className="row" key={i}>
                                                <div className="col-lg-3 col-12" style={{ width: '43%' }}>
                                                    <div className="form-group">
                                                    <label className="pb-1 font-700">Họ và tên <span className="text-danger">*</span></label>
                                                    <input type="text" className="form-control fullName hotel-flight-input" placeholder="Nhập họ tên" name="fullName" />
                                                    <div className="errorform error-notes">Vui lòng nhập thông tin</div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-2 col-12" style={{ width: '16%' }}>
                                                    <div className="form-group select-custom-icon">
                                                        <label className="pb-1 white-space-nowrap">Giới tính <span className="text-danger">*</span></label>
                                                        <select className="form-control title title-gender hotel-flight-input" name="gender">
                                                            <option value="Nam">Nam</option>
                                                            <option value="Nữ">Nữ</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-lg-5 col-12" style={{ width: '41%' }}>
                                                    <div className="row">
                                                    <div className="col-sm-4 col-4 mt-sm-0" style={{ width: '33%', marginTop: 0 }}>
                                                        <div className="form-group select-custom-icon">
                                                        <label className="pb-1 white-space-nowrap font-700">Ngày sinh <span className="text-danger">*</span></label>
                                                        <select className="form-control birth-date hotel-flight-input" name="dayOfMonth">
                                                            <option value="">Ngày</option>
                                                            {days.map((day, index) => (
                                                            <option key={index} value={day}>{day}</option>
                                                            ))}
                                                        </select>
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-4 col-4 mt-sm-0" style={{ width: '33%' }}>
                                                        <div className="form-group select-custom-icon">
                                                        <label className="pb-1">&nbsp;</label>
                                                        <select className="form-control birth-month hotel-flight-input" name="monthOfYear">
                                                            <option value="">Tháng</option>
                                                            {months.map((month, index) => (
                                                            <option key={index} value={month}>{month}</option>
                                                            ))}
                                                        </select>
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-4 col-4 mt-sm-0" style={{ width: '33%' }}>
                                                        <div className="form-group select-custom-icon">
                                                        <label className="pb-1">&nbsp;</label>
                                                        <select className="form-control birth-year hotel-flight-input" name="year">
                                                            <option value="">Năm</option>
                                                            {years.map((year, index) => (
                                                            <option key={index} value={year}>{year}</option>
                                                            ))}
                                                        </select>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                <button className="btn-delete btn-click" onClick={() => removeAdult(i)}>
                                                    <i className="bx bxs-trash"></i>
                                                </button>
                                            </div>
                                            ))}
                                        </div>

                                        <div className="group-fields-input-contact-children group-fields-input-contact-wrapper mb-3">
                                            <div className="title-persona">
                                                <img src="https://travel.com.vn/images/icons/persons/child.svg" alt="Trẻ em" />Trẻ em
                                            </div>

                                            {childrenArray.map((item, i) => (
                                            <div className="row" key={i}>
                                            <div className="col-lg-3 col-12" style={{ width: '43%' }}>
                                                <div className="form-group">
                                                <label className="pb-1 font-700">Họ và tên <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control fullName hotel-flight-input" placeholder="Nhập họ tên" name="fullName" />
                                                <div className="errorform error-notes">Vui lòng nhập thông tin</div>
                                                </div>
                                            </div>

                                            <div className="col-lg-2 col-12" style={{ width: '16%' }}>
                                                <div className="form-group select-custom-icon">
                                                <label className="pb-1 white-space-nowrap">Giới tính <span className="text-danger">*</span></label>
                                                <select className="form-control title title-gender hotel-flight-input" name="gender">
                                                    <option value="Nam">Nam</option>
                                                    <option value="Nữ">Nữ</option>
                                                </select>
                                                </div>
                                            </div>

                                            <div className="col-lg-5 col-12" style={{ width: '41%' }}>
                                                <div className="row">
                                                <div className="col-sm-4 col-4 mt-sm-0" style={{ width: '33%', marginTop: 0 }}>
                                                    <div className="form-group select-custom-icon">
                                                    <label className="pb-1 white-space-nowrap font-700">Ngày sinh <span className="text-danger">*</span></label>
                                                    <select className="form-control birth-date hotel-flight-input" name="dayOfMonth">
                                                        <option value="">Ngày</option>
                                                        {days.map((day, index) => (
                                                        <option key={index} value={day}>{day}</option>
                                                        ))}
                                                    </select>
                                                    </div>
                                                </div>

                                                <div className="col-sm-4 col-4 mt-sm-0" style={{ width: '33%' }}>
                                                    <div className="form-group select-custom-icon">
                                                    <label className="pb-1">&nbsp;</label>
                                                    <select className="form-control birth-month hotel-flight-input" name="monthOfYear">
                                                        <option value="">Tháng</option>
                                                        {months.map((month, index) => (
                                                        <option key={index} value={month}>{month}</option>
                                                        ))}
                                                    </select>
                                                    </div>
                                                </div>

                                                <div className="col-sm-4 col-4 mt-sm-0" style={{ width: '33%' }}>
                                                    <div className="form-group select-custom-icon">
                                                    <label className="pb-1">&nbsp;</label>
                                                    <select className="form-control birth-year hotel-flight-input" name="year">
                                                        <option value="">Năm</option>
                                                        {years.map((year, index) => (
                                                        <option key={index} value={year}>{year}</option>
                                                        ))}
                                                    </select>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <button className="btn-delete btn-click" onClick={() => removeChildren(i)}>
                                                <i className="bx bxs-trash"></i>
                                            </button>
                                            </div>
                                            ))}
                                        </div>

                                        <div className="group-fields-input-contact-young-child group-fields-input-contact-wrapper mb-3">
                                            <div className="title-persona">
                                                <img src="https://travel.com.vn/images/icons/persons/young_child.svg" alt="Trẻ nhỏ" />Trẻ nhỏ
                                            </div>

                                            {young_childsArray.map((item, i) => (
                                            <div className="row" key={i}>
                                            <div className="col-lg-3 col-12" style={{ width: '43%' }}>
                                                <div className="form-group">
                                                <label className="pb-1 font-700">Họ và tên <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control fullName hotel-flight-input" placeholder="Nhập họ tên" name="fullName" />
                                                <div className="errorform error-notes">Vui lòng nhập thông tin</div>
                                                </div>
                                            </div>

                                            <div className="col-lg-2 col-12" style={{ width: '16%' }}>
                                                <div className="form-group select-custom-icon">
                                                <label className="pb-1 white-space-nowrap">Giới tính <span className="text-danger">*</span></label>
                                                <select className="form-control title title-gender hotel-flight-input" name="gender">
                                                    <option value="Nam">Nam</option>
                                                    <option value="Nữ">Nữ</option>
                                                </select>
                                                </div>
                                            </div>

                                            <div className="col-lg-5 col-12" style={{ width: '41%' }}>
                                                <div className="row">
                                                <div className="col-sm-4 col-4 mt-sm-0" style={{ width: '33%', marginTop: 0 }}>
                                                    <div className="form-group select-custom-icon">
                                                    <label className="pb-1 white-space-nowrap font-700">Ngày sinh <span className="text-danger">*</span></label>
                                                    <select className="form-control birth-date hotel-flight-input" name="dayOfMonth">
                                                        <option value="">Ngày</option>
                                                        {days.map((day, index) => (
                                                        <option key={index} value={day}>{day}</option>
                                                        ))}
                                                    </select>
                                                    </div>
                                                </div>

                                                <div className="col-sm-4 col-4 mt-sm-0" style={{ width: '33%' }}>
                                                    <div className="form-group select-custom-icon">
                                                    <label className="pb-1">&nbsp;</label>
                                                    <select className="form-control birth-month hotel-flight-input" name="monthOfYear">
                                                        <option value="">Tháng</option>
                                                        {months.map((month, index) => (
                                                        <option key={index} value={month}>{month}</option>
                                                        ))}
                                                    </select>
                                                    </div>
                                                </div>

                                                <div className="col-sm-4 col-4 mt-sm-0" style={{ width: '33%' }}>
                                                    <div className="form-group select-custom-icon">
                                                    <label className="pb-1">&nbsp;</label>
                                                    <select className="form-control birth-year hotel-flight-input" name="year">
                                                        <option value="">Năm</option>
                                                        {years.map((year, index) => (
                                                        <option key={index} value={year}>{year}</option>
                                                        ))}
                                                    </select>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <button className="btn-delete btn-click" onClick={() => removeYoungChild(i)}>
                                                <i className="bx bxs-trash"></i>
                                            </button>
                                            </div>
                                            ))}
                                        </div>

                                        <div className="group-fields-input-contact-baby group-fields-input-contact-wrapper mb-3">
                                            <div className="title-persona">
                                                <img src="https://travel.com.vn/images/icons/persons/baby.svg" alt="Em bé" />Em bé
                                            </div>

                                            {babysArray.map((item, i) => (
                                            <div className="row" key={i}>
                                            <div className="col-lg-3 col-12" style={{ width: '43%' }}>
                                                <div className="form-group">
                                                <label className="pb-1 font-700">Họ và tên <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control fullName hotel-flight-input" placeholder="Nhập họ tên" name="fullName" />
                                                <div className="errorform error-notes">Vui lòng nhập thông tin</div>
                                                </div>
                                            </div>

                                            <div className="col-lg-2 col-12" style={{ width: '16%' }}>
                                                <div className="form-group select-custom-icon">
                                                <label className="pb-1 white-space-nowrap">Giới tính <span className="text-danger">*</span></label>
                                                <select className="form-control title title-gender hotel-flight-input" name="gender">
                                                    <option value="Nam">Nam</option>
                                                    <option value="Nữ">Nữ</option>
                                                </select>
                                                </div>
                                            </div>

                                            <div className="col-lg-5 col-12" style={{ width: '41%' }}>
                                                <div className="row">
                                                <div className="col-sm-4 col-4 mt-sm-0" style={{ width: '33%', marginTop: 0 }}>
                                                    <div className="form-group select-custom-icon">
                                                    <label className="pb-1 white-space-nowrap font-700">Ngày sinh <span className="text-danger">*</span></label>
                                                    <select className="form-control birth-date hotel-flight-input" name="dayOfMonth">
                                                        <option value="">Ngày</option>
                                                        {days.map((day, index) => (
                                                        <option key={index} value={day}>{day}</option>
                                                        ))}
                                                    </select>
                                                    </div>
                                                </div>

                                                <div className="col-sm-4 col-4 mt-sm-0" style={{ width: '33%' }}>
                                                    <div className="form-group select-custom-icon">
                                                    <label className="pb-1">&nbsp;</label>
                                                    <select className="form-control birth-month hotel-flight-input" name="monthOfYear">
                                                        <option value="">Tháng</option>
                                                        {months.map((month, index) => (
                                                        <option key={index} value={month}>{month}</option>
                                                        ))}
                                                    </select>
                                                    </div>
                                                </div>

                                                <div className="col-sm-4 col-4 mt-sm-0" style={{ width: '33%' }}>
                                                    <div className="form-group select-custom-icon">
                                                    <label className="pb-1">&nbsp;</label>
                                                    <select className="form-control birth-year hotel-flight-input" name="year">
                                                        <option value="">Năm</option>
                                                        {years.map((year, index) => (
                                                        <option key={index} value={year}>{year}</option>
                                                        ))}
                                                    </select>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <button className="btn-delete btn-click" onClick={() => removeBaby(i)}>
                                                <i className="bx bxs-trash"></i>
                                            </button>
                                            </div>
                                            ))}
                                        </div>
                                    </section>
                                </div>

                                {/* ---------------------- */}

                                <div className="payment-method" style={{ display: page === 'method' ? 'block' : 'none' }}>
                                    <h2 className="d-none d-lg-block">Thanh toán</h2>

                                    <div className="payments-warp">
                                        <h3>Các hình thức thanh toán</h3>
                                        
                                        <div className="payments">
                                            <div className="payment-item">
                                                <div className="pm-head">
                                                <div className="pm-head-icon">
                                                    <i className='bx bx-money'></i>
                                                    <h4>Tiền mặt</h4>
                                                </div>
                                                <input className="check" type="radio" name="payment-type" value="Thanh toán tiền mặt" />
                                                </div>
                                                <div className="pm-des">
                                                <div>
                                                <p style={{ textAlign: 'justify' }}>
                                                    Quý khách vui lòng thanh toán tại bất kỳ văn phòng Vietravel trên toàn quốc và các chi nhánh tại nước ngoài. Xem
                                                    <a href="https://travel.com.vn/lien-he.aspx">chi tiết</a>.
                                                    </p>
                                                    <p>&nbsp;</p>
                                                </div>
                                                </div>
                                            </div>

                                            <div className="payment-item">

                                                <div className="pm-head">
                                                <div className="pm-head-icon">
                                                    <i className='bx bxs-bank' ></i>
                                                    <h4>Chuyển khoản</h4>
                                                </div>
                                                <input className="check" type="radio" name="payment-type" value="Thanh toán chuyển khoản" />
                                                </div>

                                                <div className="pm-des">
                                                    <div>
                                                        <p style={{ textAlign: 'justify' }}>
                                                            Quý khách sau khi thực hiện việc chuyển khoản vui lòng gửi email đến
                                                            <span style={{ color: '#ff0000' }}><strong> </strong></span>
                                                            <span style={{ color: '#cc0000' }}><strong>tructuyen@wonvel.com</strong></span>&nbsp;hoặc gọi tổng đài <strong>
                                                            <span style={{ color: '#cc0000' }}>19001839</span>
                                                            </strong> để được xác nhận từ công ty chúng tôi.
                                                        </p>

                                                        <div style={{ textAlign: 'justify' }}>Tên Tài Khoản : Công ty CP Du lịch và Tiếp thị GTVT Việt Nam – Vietravel</div>

                                                        <div style={{ textAlign: 'justify' }}>Tên tài khoản viết tắt : VIETRAVEL</div>

                                                        <div style={{ textAlign: 'justify' }}>Số Tài khoản : <strong>111 6977 27979</strong></div>

                                                        <div style={{ textAlign: 'justify' }}>Ngân hàng : Vietinbank - Chi nhánh 7</div>

                                                    </div>
                                                </div>

                                            </div>

                                            <div className="payment-item">

                                                <div className="pm-head">
                                                    <div className="pm-head-icon">
                                                        <i className='bx bx-credit-card-alt' ></i>
                                                        <h4>Thẻ tín dụng</h4>
                                                    </div>
                                                    <input className="check" type="radio" name="payment-type" value="Thanh toán thẻ tín dụng" />
                                                </div>

                                                <div className="pm-des">

                                                    <div className="row d-flex justify-content-between mb-3">
                                                        <div className="col-3">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="payment-option-type" value="thevisa" />
                                                            <label className="form-check-label">
                                                                <img src="https://api.travel.com.vn/Content/Icon/Payment/NameCard/thevisa.png" alt="" />
                                                            </label>
                                                            </div>
                                                        </div>
                                                        <div className="col-3">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="payment-option-type" value="master" />
                                                            <label className="form-check-label">
                                                                <img src="https://api.travel.com.vn/Content/Icon/Payment/NameCard/master.png" alt="amex" />
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="col-3">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="payment-option-type" value="jcb" />
                                                            <label className="form-check-label">
                                                            <img src="https://api.travel.com.vn/Content/Icon/Payment/NameCard/jcb.png" alt="amex" />
                                                            </label>
                                                        </div>
                                                        </div>
                                                        <div className="col-3">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="payment-option-type" value="amex"/>
                                                            <label className="form-check-label">
                                                            <img src="https://api.travel.com.vn/Content/Icon/Payment/NameCard/amex.png" alt="amex"/>
                                                            </label>
                                                        </div>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <p><span style={{ fontSize: '18px', color: '#ff0000', fontFamily: 'Times New Roman,Times,serif' }}><strong>THANH TOÁN BẰNG THẺ TÍN DỤNG</strong></span></p>

                                                        <p style={{ textAlign: 'justify', fontFamily: 'Times New Roman,Times,serif' }}>Tất cả giao dịch của Quý khách được xử lý bảo mật theo giao thức SSL tại hệ thống của <em><strong>MasterCard</strong></em>. Vietravel không lưu giữ bất kì thông tin nào về thẻ của quý khách tại hệ thống của Vietravel. Do đó, quý khách có thể hoàn toàn an tâm rằng thông tin thẻ của Quý khách sẽ được bảo đảm an toàn tuyệt đối tại hệ thống của <em><strong>MasterCard</strong></em> và Ngân hàng Ngoại Thương Việt Nam (<strong>Vietcombank</strong>).</p>

                                                        <p style={{ textAlign: 'justify', fontFamily: 'Times New Roman,Times,serif' }}>Hiện tại hệ thống www.travel.com.vn chấp nhận cho Quý khách thanh toán bằng một trong các loại thẻ sau: <strong>VISA</strong> (Credit hoặc Debit), <em><strong>MasterCard</strong></em> (Credit), <strong>Diners Clup International</strong> (Credit), <strong>JCB</strong> (Credit) và <strong>American Express</strong> (Credit) của bất kỳ ngân hàng nào.</p>

                                                        <hr />

                                                        <p style={{ marginRight: '6px', textAlign: 'justify' }}><span style={{ color: '#e74c3c', fontSize: '16px', fontFamily: 'Times New Roman,Times,serif' }}><strong><img alt="mail" src="https://travel.hivietravel.vn/Content/plugins/ckeditor/plugins/smiley/images/envelope.png" style={{ height: '23px', width: '23px' }} title="mail" />&nbsp;</strong></span><span style={{ color: '#ff0000', fontSize: '18px', fontFamily: 'Times New Roman,Times,serif' }}><strong>ƯU ĐÃI THẺ JCB TRONG TAY – BAY NGAY ĐẾN NHẬT</strong></span></p>

                                                        <p style={{ marginRight: '6px', textAlign: 'justify', fontSize: '16px', fontFamily: 'Times New Roman,Times,serif' }}>Thời gian: <strong>từ 15/02/2024 đến 31/05/2024</strong> hoặc đến hết ngân sách <span style={{ color: '#ff0000' }}>/Có điền Form/</span></p>

                                                        <p style={{ marginRight: '6px', textAlign: 'justify', fontSize: '16px', fontFamily: 'Times New Roman,Times,serif', color: '#ff0000' }}><strong>Trường hợp thanh toán Online vui lòng liên hệ nhân viên tư vấn của Vietravel để được tư vấn quyền lợi ưu đãi.</strong></p>

                                                        <ul>
                                                            <li style={{ textAlign: 'justify', fontSize: '16px', fontFamily: 'Times New Roman,Times,serif' }}>
                                                                <strong><span style={{ color: '#ff0000' }}>Chương trình 01: Giảm 1.500.000 Đ</span><span style={{ color: '#c00000' }}> </span></strong>cho tour trọn gói <strong>Nhật Bản có giá bán từ 20.000.000 Đ đến dưới 40.000.000 Đ.</strong>
                                                            </li>

                                                            <li style={{ textAlign: 'justify', fontSize: '16px', fontFamily: 'Times New Roman,Times,serif' }}>
                                                                <span style={{ color: '#ff0000' }}><strong>Chương trình 02: Giảm 3.000.000 Đ</strong></span><strong> </strong>cho tour trọn gói <strong>Nhật Bản có giá bán từ 40.000.000 Đ.</strong>
                                                            </li>

                                                            <li style={{ textAlign: 'justify', fontSize: '16px', fontFamily: 'Times New Roman,Times,serif' }}>
                                                                <span style={{ color: '#ff0000' }}><strong>Chương trình 03: Tặng Vali du lịch cao cấp</strong></span><strong> </strong>cho chủ thẻ JCB phát hành mới và phát sinh thanh toán <strong>tour du lịch trọn gói Nhật.</strong>
                                                            </li>

                                                            <li style={{ textAlign: 'justify', fontSize: '16px', fontFamily: 'Times New Roman,Times,serif' }}>
                                                                <span style={{ color: '#ff0000' }}><strong>Chương trình 04: Giảm 500.000 Đ</strong></span><strong> </strong>cho tour trọn gói <strong>(trừ Nhật) giá bán từ 15.000.000đ trở lên</strong>.
                                                            </li>
                                                        </ul>

                                                        <p style={{ marginRight: '6px', textAlign: 'justify', fontSize: '16px', fontFamily: 'Times New Roman,Times,serif' }}>
                                                            <span>Đối tượng áp dụng: Khách hàng phát sinh thanh toán Tour trọn gói bằng Thẻ JCB tại&nbsp;</span>
                                                            <span>Vietravel tại các Văn phòng Vietravel hoặc trên trang bán travel.com.vn</span>
                                                        </p>

                                                        <p style={{ marginRight: '6px', textAlign: 'justify', fontSize: '16px', fontFamily: 'Times New Roman,Times,serif' }}>
                                                            <u>Lưu ý:</u>
                                                        </p>

                                                        <ul>
                                                            <li style={{ textAlign: 'left', fontSize: '16px', fontFamily: 'Times New Roman,Times,serif' }}>Chương trình 1,2 và 3: áp dụng cho thị trường Nhật.</li>
                                                            <li style={{ textAlign: 'left', fontSize: '16px', fontFamily: 'Times New Roman,Times,serif' }}>Chương trình 1 và 2: không áp dụng đồng thời.</li>
                                                            <li style={{ textAlign: 'left', fontSize: '16px', fontFamily: 'Times New Roman,Times,serif' }}>Chương trình 3: áp dụng đồng thời chương trình 1 hoặc 2.</li>
                                                            <li style={{ textAlign: 'left', fontSize: '16px', fontFamily: 'Times New Roman,Times,serif' }}>Chương trình 3: thời gian phát hành thẻ &amp; thanh toán tính từ 15/02/2024 đến 31/05/2024. Nhận diện thời gian mở thẻ, kích hoạt thẻ qua các kênh: tin nhắn/ app ngân hàng/ email.</li>
                                                            <li style={{ textAlign: 'left', fontSize: '16px', fontFamily: 'Times New Roman,Times,serif' }}>Chương trình 4: áp dụng thị trường còn lại (trừ Nhật).</li>
                                                            <li style={{ textAlign: 'left', fontSize: '16px', fontFamily: 'Times New Roman,Times,serif' }}>Mỗi chủ thẻ hưởng tối đa một lần ưu đãi trong suốt thời gian diễn ra chương trình.</li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>



                                    </div>
                                    
                                    <div className="terms">
                                        <h3>Điều khoản bắt buộc khi đăng ký online</h3>
                                        <div className="term-content">
                                            <div>
                                                <p style={{ textAlign: 'justify', color: '#444444' }}>
                                                    Khi khách hàng đã mua vé và có nhu cầu hủy chương trình du lịch, Quý khách vui lòng thực hiện theo quy định sau:
                                                </p>

                                                <p style={{ textAlign: 'justify', color: '#444444' }}>
                                                    - Việc hủy vé chỉ được chấp nhận khi có yêu cầu về chương trình bằng văn bản và chấp thuận từ Vietravel. Sau khi Quý khách nhận được việc hủy vé chính thức từ Công ty Vietravel, Quý khách vui lòng mang theo văn bản này đến bất kỳ chi nhánh Vietravel nào hoặc gửi qua địa chỉ email: sales@vietravel.com để được hoàn tiền. 
                                                </p>

                                                <p style={{ textAlign: 'justify', color: '#444444' }}>
                                                    - Nếu Quý khách hủy chương trình du lịch ít nhất 45 ngày trước ngày khởi hành, Vietravel sẽ hoàn lại toàn bộ số tiền cọc. Nếu Quý khách hủy chương trình du lịch ít hơn 45 ngày trước ngày khởi hành, Vietravel sẽ tính phí hủy như sau:
                                                </p>

                                                <p style={{ textAlign: 'justify', color: '#444444' }}>
                                                    - Hủy từ 31 - 44 ngày: mất 30% giá trị tour.
                                                </p>

                                                <p style={{ textAlign: 'justify', color: '#444444' }}>
                                                    - Hủy từ 16 - 30 ngày: mất 50% giá trị tour.
                                                </p>

                                                <p style={{ textAlign: 'justify', color: '#444444' }}>
                                                    - Hủy từ 08 - 15 ngày: mất 75% giá trị tour.
                                                </p>

                                                <p style={{ textAlign: 'justify', color: '#444444' }}>
                                                    - Hủy sau 07 ngày hoặc không đi: mất 100% giá trị tour.
                                                </p>

                                                <p style={{ textAlign: 'justify', color: '#444444' }}>
                                                    Đối với các tour tham quan hành hương, lễ hội, tour nước ngoài, vé máy bay, vé tham quan đặt chỗ có điều kiện hủy hoặc không hoàn lại, Vietravel sẽ thực hiện hủy chương trình theo qui định của đối tác dịch vụ.
                                                </p>

                                                <p style={{ textAlign: 'justify', color: '#444444' }}>
                                                    Vietravel có quyền từ chối hủy chương trình nếu Quý khách chưa hoàn tất các nghĩa vụ tài chính đối với Vietravel, phải chịu trách nhiệm bồi thường thiệt hại cho Vietravel nếu có thiệt hại.
                                                </p>

                                                <p style={{ textAlign: 'justify', color: '#444444' }}>
                                                    <strong>V. CHÍNH SÁCH THAY ĐỔI</strong>
                                                </p>

                                                <p style={{ textAlign: 'justify', color: '#444444' }}>
                                                    Chính sách thay đổi liên quan đến tour du lịch (ngày khởi hành, chương trình tham quan…) phải được thực hiện theo thỏa thuận giữa hai bên. Mọi sự thay đổi có thể dẫn đến việc điều chỉnh giá tour và/hoặc các chi phí phát sinh do thay đổi.
                                                </p>

                                                <p style={{ textAlign: 'justify', color: '#444444' }}>
                                                    <strong>VI. CHÍNH SÁCH BẢO HIỂM DU LỊCH</strong>
                                                </p>

                                                <p style={{ textAlign: 'justify', color: '#444444' }}>
                                                    Quý khách vui lòng tham khảo các điều khoản bảo hiểm du lịch của Vietravel tại địa chỉ: www.vietravel.com để biết thêm chi tiết.
                                                </p>

                                                <p style={{ textAlign: 'justify', color: '#444444' }}>
                                                    <strong>VII. CAM KẾT BẢO MẬT THÔNG TIN</strong>
                                                </p>

                                                <p style={{ textAlign: 'justify', color: '#444444' }}>
                                                    Vietravel cam kết bảo mật thông tin của Quý khách theo chính sách bảo mật của Công ty.
                                                </p>

                                                <p style={{ textAlign: 'justify', color: '#444444' }}>
                                                    Quý khách vui lòng đọc kỹ và hiểu rõ các điều khoản và điều kiện này trước khi đăng ký tham gia tour du lịch cùng Vietravel.
                                                </p>
                                            </div>
                                        </div>
                                        <label className="checker">
                                            Tôi đồng ý với các điều kiện trên
                                            <input type="checkbox" id="DieuKien" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-4 col-12 right">
                                <div className="box-support">
                                    <label>Quý khách cần hỗ trợ?</label>
                                    <div className="group-contact" style={{ marginTop: '10px' }}>
                                        <a href="https://webcall.talking.vn/frame-click-to-call/new?code=tCEZl1-MKPuA6JU-czVAScCb0pPkHmPt" className="phone">
                                        <i className='bx bx-phone'></i>
                                        <p>Gọi miễn phí <br />qua internet</p>
                                        </a>
                                        <a href="mailto:info@vietravel.com" className="mail">
                                        <i className='bx bx-envelope'></i>
                                        <p>Gửi yêu cầu <br />hỗ trợ ngay</p>
                                        </a>
                                    </div>
                                </div>

                                <div className="group-checkout">

                                    <h3>Tóm tắt chuyến đi</h3>

                                    <div className="product">
                                        <div className="product-image">
                                        <img src={tour?.tour?.img} className="img-fluid" alt="" />
                                        </div>
                                        <div className="product-content">
                                        <p className="title">{tour?.tour?.tour_name}</p>
                                        </div>
                                    </div>

                                    <div className="go-tour">
                                        <div className="start">
                                        <i className='bx bx-current-location'></i>
                                        <div className="start-content">
                                            <h4>Bắt đầu chuyến đi</h4>
                                            <p className="time">{tour?.tour?.start_date}</p>
                                            <p className="from"></p>
                                        </div>
                                        </div>
                                        <div className="end">
                                        <i className='bx bx-current-location'></i>
                                        <div className="start-content">
                                            <h4 style={{ marginBottom: '0px' }}>Kết thúc chuyến đi</h4>
                                            <p className="time">{tour?.tour?.end_date}</p>
                                            <p className="from"></p>
                                        </div>
                                        </div>
                                    </div>

                                    <div className="detail">
                                        <table>
                                        <thead>
                                            <tr>
                                            <th className="l1" style={{ textAlign: 'left' }}>
                                                <i className="bx bx-group" id="AmoutPerson"></i>
                                                Hành khách
                                            </th>
                                            <th className="l2 text-right">
                                                <span className="total-booking">{tour?.tour?.price}</span>
                                            </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="detail">
                                            <td>Người lớn</td>
                                            <td className="t-price text-right">{adultsArray.length} x {tour?.tour?.price}</td>
                                            </tr>

                                            {childrenArray.length > 0 && (
                                            <tr className="detail">
                                                <td>Trẻ em</td>
                                                <td className="t-price text-right">{childrenArray.length} x {tour?.tour?.price}</td>
                                            </tr>
                                            )}

                                            {young_childsArray.length > 0 && (
                                            <tr className="detail">
                                                <td>Trẻ nhỏ</td>
                                                <td className="t-price text-right">{young_childsArray.length} x {tour?.tour?.price}</td>
                                            </tr>
                                            )}

                                            {babysArray.length > 0 && (
                                            <tr className="detail">
                                                <td>Em bé</td>
                                                <td className="t-price text-right">{babysArray.length} x {tour?.tour?.price}</td>
                                            </tr>
                                            )}

                                            <tr className="total">
                                            <td>Tổng tiền </td>
                                            <td className="t-price text-right">{total}</td>
                                            </tr>
                                        </tbody>
                                        </table>

                                        <button className="btn btn-primary btn-order" onClick={() => paychangePage(page)}>Đặt ngay</button>
                                    </div>

                                    </div>
                            </div>

                        </div>

                    </div>

                </section>
            </div>
        </>
    )
    
}

export default InformationPayment;