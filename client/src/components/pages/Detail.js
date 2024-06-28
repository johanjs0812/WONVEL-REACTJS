import React from "react";
import { Link } from "react-router-dom";

// import "../css/detail.css";

const Style = () => {
    return (
      <style>
        {`
.container{
    width: 100%;
    max-width: 1320px;
    margin-left: auto;
    margin-right: auto;
  
    padding-left: 12px;
    padding-right: 12px;
  }
  
  .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: .5rem;
    margin-top: 0;
  }
  
  h2, h3 {
    font-size: 20px;
    line-height: 40px;
  }
  
  .row{
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-left: calc(var(--bs-gutter-x) / -2);
    margin-right: calc(var(--bs-gutter-x) / -2);
    margin-top: calc(var(--bs-gutter-y)* -1);
  }
  
  .d-flex {
    display: flex;
  }
  
  .align-items-center {
    align-items: center;
  }
  
  .breadcrumbs__wrapper {
    height: auto;
    list-style-type: none;
    margin: 0;
    padding-top: 5px;
  }
  
  .breadcrumbs__wrapper li {
    color: #2d4271;
    display: inline;
    font-size: 13px;
    font-weight: 400;
    margin: 0 10px;
  }
  
  .breadcrumbs__wrapper li a {
    color: #2d4271;
    text-decoration: underline;
  }
  
  /* =================== */
  
  .left-head{
    width: 50%;
    padding-left: 12px;
  }
  
  .left-head h1 {
    color: #2d4271;
    font-size: 26px;
    font-weight: 700;
    line-height: 30px;
    margin-bottom: 12px;
    max-width: 100%;
  }
  
  .short-rating {
    display: flex;
  }
  
  .s-rate {
    align-items: center;
    display: flex;
    margin-right: 22px;
  }
  
  .short-rating .s-rate span {
    align-items: center;
    background: #fdc432;
    border-bottom-right-radius: 5px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    color: #2d4271;
    display: flex;
    font-size: 25px;
    font-weight: 700;
    height: 50px;
    justify-content: center;
    line-height: 20px;
    margin-right: 11px;
    position: relative;
    width: 65px;
  }
  
  .short-rating .s-wishlist {
    align-items: center;
    background: #fff;
    border: .5px solid #d5d5d5;
    border-radius: 5px;
    display: flex;
    height: 50px;
    justify-content: center;
    width: 112px;
  }
  
  .short-rating .s-wishlist i {
    color: #e01600;
    font-size: 22px;
    padding-right: 5px;
  }
  
  .right-head{
    width: 50%;
    display: flex;
    justify-content: flex-end;
    padding-top: 25px;
    padding-right: 12px;
  }
  
  .group-price {
    text-align: right;
  }
  
  .group-price .sale-price {
    align-items: center;
    display: flex;
  }
  
  .group-price .sale-price p {
    margin-bottom: 0;
  }
  
  .group-price .sale-price .price {
    color: #e01600;
    font-size: 22px;
    font-weight: 700;
    line-height: 28px;
    margin: 0;
  }
  
  .group-add-cart {
    display: flex;
    flex-direction: column;
    padding-left: 16px;
    width: 40%;
  }
  
  .group-add-cart .add-to-cart i {
    margin-right: 7px;
    font-size: 20px;
  }
  
  .group-add-cart .add-to-cart {
    align-items: center;
    background: linear-gradient(64.4deg, #e01600 21.33%, #fe2214 67.61%);
    border-radius: 5px;
    color: #fff;
    display: flex;
    font-weight: 500;
    height: 50px;
    justify-content: center;
    margin-bottom: 10px;
    width: 100%;
  }
  
  .group-add-cart .add-to-group {
    align-items: center;
    border: 1px solid #2d4271;
    border-radius: 5px;
    color: #2d4271;
    display: flex;
    height: 50px;
    justify-content: center;
    width: 100%;
  }
  
  .box-img{
    width: 100%;
    overflow: hidden;
    height: 550px;
    border-radius: 20px;
  }
  
  .box-img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  
  .left-dt-op
  {
    flex: 0 0 auto;
    width: 41.66667%;
    padding-right: 12px;
    padding-left: 12px;
  }
  
  .box-order {
    background: #fff;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    padding: 15px 30px;
  }
  
  .box-order .calendar .calendar-box {
    align-items: center;
    border: 1px solid #4d4aef;
    border-radius: 5px;
    color: #4d4aef;
    display: flex;
    height: 30px;
    justify-content: center;
    width: 110px;
  }
  
  .box-order .calendar .calendar-box i {
    padding-right: 5px;
  }
  
  .right-dt-op{
    padding-left: 50px;
    flex: 0 0 auto;
    width: 58.33333%;
  }
  
  .group-services {
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    border-bottom: 1px solid #7d8fab;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-bottom: 35px;
    padding-bottom: 20px;
  }
  
  .group-services .item {
    display: flex;
    flex-direction: column;
  }
  
  .group-services .item img {
    max-height: 25px;
    max-width: 25px;
  }
  
  .group-services .item label {
    font-weight: 700;
    margin-bottom: 5px;
  }
  
  .group-services .item p {
    font-size: 13px;
    margin: 0;
  }
  
  .box-support label {
    color: #2d4271;
    margin-bottom: 8px;
  }
  
  .box-support .group-contact {
    align-items: center;
    background: #fff;
    border: 1px solid #4d4aef;
    border-radius: 14px;
    display: flex;
    max-width: 350px;
  }
  
  .box-support .group-contact .phone {
    align-items: center;
    background: #4d4aef;
    border-radius: 10px;
    color: #fff;
    display: flex;
    height: 50px;
    justify-content: center;
    width: 183px;
  }
  
  .box-support .group-contact .phone i {
    font-size: 25px;
    margin-right: 5px;
  }
  
  .box-support .group-contact .phone p {
    line-height: 16px;
    margin: 0;
  }
  
  .box-support .group-contact .mail {
    align-items: center;
    border-radius: 10px;
    color: #4d4aef;
    display: flex;
    height: 50px;
    justify-content: center;
    width: 183px;
  }
  
  .box-support .group-contact .mail i {
    font-size: 25px;
    margin-right: 5px;
  }
  
  .box-support .group-contact .mail p {
    line-height: 16px;
    margin: 0;
  }
  
  .padding12{
    padding-left: 12px;
    padding-right: 12px;
  }
  
  h2.lich-trinh-h2{
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 30px;
    text-align: center;
  }
  
        `}
      </style>
    );
};

const Detail = () => {

    // const tour = [];
    // const timeday = "";

    return(
    <>
    < Style />
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