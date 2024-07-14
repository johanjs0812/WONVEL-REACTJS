const PaymentMethodComponent = () => {

    const page = "";

    return (
        <>
        
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

        </>
    )
}

export default PaymentMethodComponent;