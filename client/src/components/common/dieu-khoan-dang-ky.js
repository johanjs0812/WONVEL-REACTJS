import React, { useEffect, useState, useCallback, useRef  } from 'react';

const DieuKhoanDangKyPmComponent = ({dongychua}) => {
    const [dongydieukien, setdongydieukien] = useState(false);
  
    const isUpdating = useRef(false);

    const okay = useCallback(() => {
      if (isUpdating.current) return;
      isUpdating.current = true;
  
      if (dongydieukien) {
        setdongydieukien(false);
      } else {
        setdongydieukien(true);
      }
  
      setTimeout(() => {
        isUpdating.current = false;
      }, 0);
    }, [dongydieukien]);

    useEffect(() => {
        dongychua(dongydieukien)
    }, [dongydieukien]);

    return (
        <>
            <div className="terms">
                <h3>Điều khoản bắt buộc khi đăng ký online</h3>
                <div className="term-content">
                    <div>
                        <p style={{ textAlign: 'justify', color: '#444444' }}>
                            Khi khách hàng đã mua vé và có nhu cầu hủy chương trình du lịch, Quý khách vui lòng thực hiện theo quy định sau:
                        </p>

                        <p style={{ textAlign: 'justify', color: '#444444' }}>
                            - Việc hủy vé chỉ được chấp nhận khi có yêu cầu về chương trình bằng văn bản và chấp thuận từ WONVEL. Sau khi Quý khách nhận được việc hủy vé chính thức từ Công ty WONVEL, Quý khách vui lòng mang theo văn bản này đến bất kỳ chi nhánh WONVEL nào hoặc gửi qua địa chỉ email: sales@wonvel.com để được hoàn tiền. 
                        </p>

                        <p style={{ textAlign: 'justify', color: '#444444' }}>
                            - Nếu Quý khách hủy chương trình du lịch ít nhất 45 ngày trước ngày khởi hành, WONVEL sẽ hoàn lại toàn bộ số tiền cọc. Nếu Quý khách hủy chương trình du lịch ít hơn 45 ngày trước ngày khởi hành, WONVEL sẽ tính phí hủy như sau:
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
                            Đối với các tour tham quan hành hương, lễ hội, tour nước ngoài, vé máy bay, vé tham quan đặt chỗ có điều kiện hủy hoặc không hoàn lại, WONVEL sẽ thực hiện hủy chương trình theo qui định của đối tác dịch vụ.
                        </p>

                        <p style={{ textAlign: 'justify', color: '#444444' }}>
                            WONVEL có quyền từ chối hủy chương trình nếu Quý khách chưa hoàn tất các nghĩa vụ tài chính đối với WONVEL, phải chịu trách nhiệm bồi thường thiệt hại cho WONVEL nếu có thiệt hại.
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
                            Quý khách vui lòng tham khảo các điều khoản bảo hiểm du lịch của WONVEL tại địa chỉ: www.wonvel.com để biết thêm chi tiết.
                        </p>

                        <p style={{ textAlign: 'justify', color: '#444444' }}>
                            <strong>VII. CAM KẾT BẢO MẬT THÔNG TIN</strong>
                        </p>

                        <p style={{ textAlign: 'justify', color: '#444444' }}>
                            WONVEL cam kết bảo mật thông tin của Quý khách theo chính sách bảo mật của Công ty.
                        </p>

                        <p style={{ textAlign: 'justify', color: '#444444' }}>
                            Quý khách vui lòng đọc kỹ và hiểu rõ các điều khoản và điều kiện này trước khi đăng ký tham gia tour du lịch cùng WONVEL.
                        </p>
                    </div>
                </div>
                <label className="checker" onClick={okay}>
                    Tôi đồng ý với các điều kiện trên
                    <input type="checkbox" id="DieuKien"  />
                    <span className="checkmark"></span>
                </label>
            </div>
        </>
    )
}

export default DieuKhoanDangKyPmComponent;