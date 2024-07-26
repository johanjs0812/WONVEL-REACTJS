import React from 'react';
import { Link } from 'react-router-dom';

// import "../css/footer.css";

const Style = () => {
  return (
    <style>
      {`
footer {
    background: #f9f9f9;
    padding-top: 45px;
  }
  
  .ctn-ftop{
    max-width: 1320px;
    margin-left: auto;
    margin-right: auto;
    padding-left: .75rem;
    padding-left: var(--bs-gutter-x, .75rem);
    padding-right: .75rem;
    padding-right: var(--bs-gutter-x, .75rem);
    width: 100%;
  }
  
  .rw-rw {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-left: calc(var(--bs-gutter-x) / -2);
    margin-right: calc(var(--bs-gutter-x) / -2);
    margin-top: calc(var(--bs-gutter-y)* -1);
  }
  
  .cocobay-p {
    display: block;
    flex: none;
    margin-bottom: 40px;
    width: 25%;
  }
  
  .cocobay-p h4 {
    margin-bottom: 12px;
    font-size: 18px;
    font-weight: 700;
    line-height: 30px;
    width: 100%;
    color: #2d4271 !important;
  }
  
  .coco-tour{
    display: flex;
  }
  
  .menu {
    width: 40%;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  .menu-item{
    line-height: 30px;
  }
  
  .coco-app
  {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  
  .mb-bb{
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
  
  .mb-bb p {
    margin-bottom: 10px;
  }
  
  .h4-ppp{
    margin-bottom: 12px;
  }
  
  .contact-info{
    font-weight: 300;
    line-height: 30px;
  }
  
  .socials{
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  .social{
    padding-right: 20px;
  }
  
  .social a i {
    color: #2d4271;
    font-size: 25px;
  }
  
  .newsletter form {
    background: #fff;
    border: 1px solid #7d8fab;
    border-radius: 10px;
    box-sizing: border-box;
    height: 40px;
    margin-bottom: 15px;
    margin-top: -5px;
    max-width: 323px;
    overflow: hidden;
    position: relative;
  }
  
  footer .newsletter form input[type=text] {
    border: none;
    color: #2d4271;
    font-weight: 400;
    height: 100%;
    padding: 0 25px;
    width: 100%;
  }
  
  footer .newsletter form input[type=submit] {
    background: 0 0;
    border: none;
    border-left: 1px solid #7d8fab;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    width: 50px;
    z-index: 1;
  }
  
  footer .newsletter form i {
    color: #2d4271;
    font-size: 18px;
    pointer-events: none;
    position: absolute;
    right: 13px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    z-index: 1;
    cursor: pointer;
  }
  
  .securi-payment{
    display: flex; justify-content: space-between;
  }
  
  .securi{
    max-width: 178px;
  }
  
  .payment{
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    /* min-width: 300px; */
    padding-left: 43px;
  }
  
      `}
    </style>
  );
};

const Footer = () => {
  return (
    <>
    <Style />

    <footer>
      <section className="ft-top">
        <div className="ctn-ftop">
          <div className="rw-rw">
            <div className="cocobay-p">
              <h4>
                <Link href={"bbx.cm"} name="Du lịch trong nước" title="/du-lich/viet-nam">
                  Du lịch trong nước
                </Link>
              </h4>
              <div className="coco-tour">
                <ul className="menu menu-1">
                  <li className="menu-item">
                    <Link href={"bbx.cm"} name="Hà Nội" title="/du-lich-ha-noi">
                      Hà Nội
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href={"bbx.cm"} name="Hạ Long" title="/du-lich-ha-long">
                      Hạ Long
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href={"bbx.cm"} name="Huế" title="/du-lich-hue">
                      Huế
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href={"bbx.cm"} name="Quảng Bình" title="/du-lich-quang-binh">
                      Quảng Bình
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href={"bbx.cm"} name="Đà Nẵng" title="/du-lich-da-nang">
                      Đà Nẵng
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href={"bbx.cm"} name="Quảng Nam" title="/du-lich-quang-nam">
                      Quảng Nam
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href={"bbx.cm"} name="Nha Trang" title="/du-lich-nha-trang">
                      Nha Trang
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href={"bbx.cm"} name="Đà Lạt" title="/du-lich-da-lat">
                      Đà Lạt
                    </Link>
                  </li>
                </ul>
                <ul className="menu menu-2">
                  <li className="menu-item">
                    <Link href={"bbx.cm"} name="Phan Thiết" title="/du-lich-phan-thiet">
                      Phan Thiết
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href={"bbx.cm"} name="Bà Rịa - Vũng Tàu" title="/du-lich-vung-tau">
                      Bà Rịa - Vũng Tàu
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href={"bbx.cm"} name="Phú Quốc" title="/du-lich-phu-quoc">
                      Phú Quốc
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href={"bbx.cm"} name="Cần Thơ" title="/du-lich-can-tho">
                      Cần Thơ
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href={"bbx.cm"} name="Hà Tiên" title="/du-lich-ha-tien">
                      Hà Tiên
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href={"bbx.cm"} name="Bắc Kạn" title="/du-lich-bac-kan">
                      Bắc Kạn
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href={"bbx.cm"} name="Hà Giang" title="/du-lich-ha-giang">
                      Hà Giang
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href={"bbx.cm"} name="Côn Đảo" title="/du-lich-con-dao">
                      Côn Đảo
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="cocobay-p">
              <h4>
                <Link href={"bbx.cm"} name="Du lịch trong nước" title="/du-lich/viet-nam">
                  Dòng Tour
                </Link>
              </h4>
              <div className="coco-tour">
                <ul className="menu menu-1">
                  <li className="menu-item">
                    <Link href={"bbx.cm"} name="Hà Nội" title="/du-lich-ha-noi">
                      Cao cấp
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href={"bbx.cm"} name="Hạ Long" title="/du-lich-ha-long">
                      Tiêu chuẩn
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href={"bbx.cm"} name="Huế" title="/du-lich-hue">
                      Tiết kiệm
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href={"bbx.cm"} name="Huế" title="/du-lich-hue">
                      Giá Tốt
                    </Link>
                  </li>
                </ul>
              </div>
              <h4>
                <Link href={"bbx.cm"} name="Du lịch trong nước" title="/du-lich/viet-nam">
                  Dịch vụ lẻ
                </Link>
              </h4>
              <div className="coco-tour">
                <ul className="menu menu-1">
                  <li className="menu-item">
                    <Link href={"bbx.cm"} name="Hà Nội" title="/du-lich-ha-noi">
                      Vé máy bay
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href={"bbx.cm"} name="Hạ Long" title="/du-lich-ha-long">
                      Khách sạn
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href={"bbx.cm"} name="Huế" title="/du-lich-hue">
                      Combo du lịch
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="cocobay-p">
              <h4>
                <Link href={"bbx.cm"} name="Du lịch trong nước" title="/du-lich/viet-nam">
                  Thông tin
                </Link>
              </h4>
              <div className="coco-tour">
                <ul className="menu menu-1">
                  <li className="menu-item">
                    <Link href={"bbx.cm"} name="Hà Nội" title="/du-lich-ha-noi">
                      Tạp chí du lịch
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href={"bbx.cm"} name="Hạ Long" title="/du-lich-ha-long">
                      Cẩm nang du lịch
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href={"bbx.cm"} name="Huế" title="/du-lich-hue">
                      Tin tức
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href={"bbx.cm"} name="Huế" title="/du-lich-hue">
                      Sitemap
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href={"bbx.cm"} name="Huế" title="/du-lich-hue">
                      FAQs
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href={"bbx.cm"} name="Huế" title="/du-lich-hue">
                      Chính sách riêng tư
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href={"bbx.cm"} name="Huế" title="/du-lich-hue">
                      Thỏa thuận sử dụng
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="cocobay-p">
              <h4 className="h4-ppp">Liên hệ</h4>
              <div className="contact-info">
                190 Pasteur, Phường Võ Thị Sáu, Quận 3, TP
                <br />
                HCM
                <br />
                (+84 28) 3822 8898
                <br />
                (+84 28) 3829 9142
                <br />
                info&#64;vietravel.com
              </div>
              <h4>Mạng xã hội</h4>
              <ul className="socials">
                <li className="social">
                  <Link href={"bbx.cm"} target="_blank" rel="nofollow noreferrer" name="facebook" title="facebook">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li className="social">
                  <Link href={"bbx.cm"} target="_blank" rel="nofollow noreferrer" name="instagram" title="instagram">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
                <li className="social">
                  <Link href={"bbx.cm"} target="_blank" rel="nofollow noreferrer" name="viber" title="viber">
                    <i className="fab fa-viber"></i>
                  </Link>
                </li>
                <li className="social">
                <Link href={"bbx.cm"} target="_blank" rel="nofollow noreferrer" name="youtube" title="youtube">
                  <i className="fab fa-youtube"></i>
                </Link>
              </li>
            </ul>
          </div>

          <div className="cocobay-p" style={{ marginRight: '20px' }}>
            <h4>Ứng dụng di động</h4>
            <div className="coco-app">
              <Link href={"bbx.cm"} style={{paddingRight: "10px"}}>
                <img style={{width: '100%', height: "100%"}} src="https://travel.com.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fandroid.1dfd2bf5.png&w=1920&q=75" alt="" />
              </Link>
              <Link href={"bbx.cm"}>
                <img style={{width: '100%', height: "100%"}} src="https://travel.com.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fios.fca19e7c.png&w=1920&q=75" alt="" />
              </Link>
            </div>
            <div className="mb-bb">
              <div className="andr-pp">
                <p>Android</p>
                <Link href={"bbx.cm"}>
                  <img style={{width: '100%', height: "100%"}} src="https://travel.com.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FgooglePlay.18297d0d.png&w=1920&q=75" alt="" />
                </Link>
              </div>
              <div className="ios">
                <p>iOS</p>
                <Link href={"bbx.cm"}>
                  <img style={{width: '100%', height: "100%"}} src="https://travel.com.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FappStore.1a57a52a.png&w=1920&q=75" alt="" />
                </Link>
              </div>
            </div>
          </div>

          <div className="cocobay-p" style={{ width: '35%', marginRight: '20px' }}>
            <div className="securi-payment">
              <div className="securi">
                <h4>Chứng nhận</h4>
                <Link
                  href="#"
                  rel="nofollow noreferrer"
                  target="_blank"
                >
                  <img
                    src="https://travel.com.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDMCA.9cae11ea.png&w=1920&q=75"
                    alt=""
                    width="178"
                    height="37"
                    loading="lazy" />
                </Link>
                <Link
                  href="#"
                  rel="nofollow noreferrer"
                  target="_blank"
                >
                  <img
                    src="https://travel.com.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FboCongThuong.7694ea55.png&w=1920&q=75"
                    alt=""
                    width="177"
                    height="68"
                    loading="lazy"
                  />
                </Link>
              </div>
              <div className="payment">
                <h4>Chấp nhận thanh toán</h4>
                <img src="https://travel.com.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F123pay.7c4be670.png&w=1920&q=75" width="71" height="27" loading="lazy" alt="123pay" />
                <img src="https://travel.com.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvnpay.2a25e56f.png&w=1920&q=75" width="71" height="27" loading="lazy" alt="vnpay" />
                <img src="https://travel.com.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvisa.299c65a0.png&w=1920&q=75" width="71" height="27" loading="lazy" alt="visa" />
                <img src="https://travel.com.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMSB.9ce49fcc.png&w=1920&q=75" width="71" height="27" loading="lazy" alt="mastercard" />
                <img src="https://travel.com.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmomo.11f49354.png&w=1920&q=75" width="71" height="27" loading="lazy" alt="jcb" />
                <img src="https://travel.com.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FverifiedByVisa.a320b2a4.png&w=1920&q=75" width="71" height="27" loading="lazy" alt="visa" />
                <img src="https://travel.com.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmastercard.7b4e0444.png&w=1920&q=75" width="71" height="27" loading="lazy" alt="ShopeePay" />
                <img src="https://travel.com.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FJCB.41ec6f14.png&w=1920&q=75" width="71" height="27" loading="lazy" alt="MSB" />
              </div>
            </div>
          </div>

          <div className="cocobay-p">
            <div className="newsletter form">
              <form action="#" method="post">
                <input name="__RequestVerificationToken" type="hidden" />
                <input
                  type="text"
                  name="EmailRegister"
                  placeholder="Email của Quý khách"
                  id="EmailRegisterFooter"
                  required
                  defaultValue=""
                />
                <input type="submit" name="submit" className="sm" />
              </form>
              <h4>Tìm kiếm thông tin</h4>
              <div className="search form">
                <form action="/Tour/SearchToursByDestinationChild" method="post">
                  <input name="__RequestVerificationToken" type="hidden" />
                  <input type="text" name="search" placeholder="Tour du lịch, điểm đến..." defaultValue="" />
                  <input type="submit" name="submit" className="sm" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </footer>
    </>
);
};

export default Footer;
