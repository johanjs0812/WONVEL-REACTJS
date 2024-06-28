import React from "react";
import "../../styles/detail.css"
import { Link } from "react-router-dom";

const Detail = () => {

    // const tour = [];
    // const timeday = "";

    return(
    <>
        <div className="detail-page">
            <div className="container">
                <div className="row">
                <ul className="breadcrumbs__wrapper d-flex align-items-center">
                    <li>
                    <Link to="" style={{ marginLeft: '10px' }}>
                        <span>Du lịch</span>
                    </Link>
                    »
                    </li>
                    <li>
                    <Link to="" style={{ marginLeft: '10px' }}>
                        {/* <span>Tour {tour.destination.provinces}</span> */}
                    </Link>
                    »
                    </li>
                    <li>
                    <Link style={{ marginLeft: '10px' }}>
                        {/* <span>{tour.tour.tour_name}</span> */}
                    </Link>
                    </li>
                </ul>
                </div>
            </div>

            <br /><br />

            <div className="container">
                <div style={{ marginBottom: '12px' }}>
                <div className="p-3">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                    <i className='bx bxs-coupon' style={{ marginRight: '15px', color: '#4d4aef', fontSize: '16px' }}></i>
                    {/* <p style={{ color: '#4d4aef', fontSize: '13px' }}>{tour.tour.code_tour}</p> */}
                    </div>
                </div>
                </div>
                <div className="row" style={{ alignItems: 'center' }}>
                <div className="left-head">
                    <h1 style={{ margin: '0' }} className="title">
                    {/* {tour.tour.tour_name} */}
                    </h1>
                </div>

                <div className="right-head">
                    <div className="group-price">
                    <div className="sale-price">
                        {/* <p><span className="price">{tour.tour.price}</span>/ khách</p> */}
                    </div>
                    </div>

                    <div className="group-add-cart">
                    {/* <Link title="Đặt ngay" to={`/inforpm/${tour.tour.id}`} className="add-to-cart">
                        <i className='bx bx-cart'></i>Đặt ngay
                    </Link> */}
                    <Link href="#" className="add-to-group">Liên hệ tư vấn</Link>
                    </div>
                </div>
                </div>
            </div>

            <br /><br />

            <div className="container">
                <div className="box-img">
                {/* <img src={tour.tour.img} alt="" /> */}
                </div>
            </div>

            <br />

            <div className="container">
                <div className="row">
                <div className="left-dt-op">
                    <div className="box-order">
                    <div className="time">
                        {/* <p>Khởi hành <b>{tour.tour.start_date}</b></p>
                        <p>Thời gian <b>{timeday}</b></p>
                        <p>Nơi khởi hành <b>{tour.tour.departure_location}</b></p> */}
                    </div>
                    </div>
                    <div className="box-support">
                    <label>Quý khách cần hỗ trợ?</label>
                    <div className="group-contact" style={{ marginTop: '10px' }}>
                        <Link target="_blank" className="phone">
                        <i className='bx bxs-phone'></i>
                        <p>Gọi miễn phí <br />qua internet</p>
                        </Link>
                        <Link className="mail">
                        <i className='bx bx-envelope'></i>
                        <p>Gửi yêu cầu <br />hỗ trợ ngay</p>
                        </Link>
                    </div>
                    </div>
                </div>
                <div className="right-dt-op">
                    <div className="group-services">
                    <div className="item">
                        <img src="https://travel.com.vn/images/icons/utility/thoi%20gian.png" className="icon-img" alt="icon" />
                        <label>Thời gian</label>
                        {/* <p>{timeday}</p> */}
                    </div>
                    <div className="item">
                        <img src="https://travel.com.vn/images/icons/utility/thoi%20gian.png" className="icon-img" alt="icon" />
                        <label>Phương tiện di chuyển</label>
                        {/* <p>{tour.tour.transportation}</p> */}
                    </div>
                    <div className="item">
                        <img src="https://travel.com.vn/images/icons/utility/diem%20tham%20quan.png" className="icon-img" alt="icon" />
                        <label>Điểm tham quan</label>
                        {/* <p>{tour.destination.destination_name}</p> */}
                    </div>
                    <div className="item">
                        <img src="https://travel.com.vn/images/icons/utility/am%20thuc.png" className="icon-img" alt="icon" />
                        <label>Ẩm thực</label>
                        <p>Theo thực đơn</p>
                    </div>
                    <div className="item">
                        <img src="https://travel.com.vn/images/icons/utility/khach%20san.png" className="icon-img" alt="icon" />
                        <label>Khách sạn</label>
                        <p></p>
                    </div>
                    <div className="item">
                        <img src="https://travel.com.vn/images/icons/utility/thoi%20gian%20ly%20tuong.png" className="icon-img" alt="icon" />
                        <label>Thời gian lý tưởng</label>
                        <p>Quanh năm</p>
                    </div>
                    <div className="item">
                        <img src="https://travel.com.vn/images/icons/utility/doi%20tuong%20thich%20hop.png" className="icon-img" alt="icon" />
                        <label>Đối tượng thích hợp</label>
                        <p>Cặp đôi, Gia đình nhiều thế hệ, Thanh niên</p>
                    </div>
                    <div className="item">
                        <img src="https://travel.com.vn/images/icons/utility/uu%20dai.png" className="icon-img" alt="icon" />
                        <label>Ưu đãi</label>
                        <p>Đã bao gồm trong giá tour</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <br /><br /><br />

            <div className="container">
                <div className="row">
                <div className="padding12" style={{ width: '100%' }}>
                    <h2 className="lich-trinh-h2">Về chuyến đi</h2>
                </div>
                </div>
            </div>

            <br />

            <div className="container">
                <div className="info row">
                <p style={{ textAlign: 'justify' }}>
                    {/* {tour.tour.description} */}
                </p>
                </div>
            </div>
        </div>
    </>
    )

}

export default Detail;