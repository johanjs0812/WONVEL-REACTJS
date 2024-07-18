import React, { useState, useEffect } from 'react';

const Style = () => {
    return(
        <style>
{
            `
    
            .notification {
                opacity: 0;
                position: fixed;
                top: 10;
                left: 50%;
                transform: translateX(-50%);
                background-color: #f8d7da;
                color: #721c24;
                padding: 15px;
                border: 1px solid #f5c6cb;
                border-radius: 5px;
                transition: opacity 1s ease-in-out;
                z-index: 1000;
            }
    
            .notification.show {
                opacity: 1;
            }    
        `
}
            
        </style>
)
}

const Notification = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Hiển thị thông báo khi component được mount
    setVisible(true);

    // Ẩn thông báo sau 2 giây
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    // Dọn dẹp timer khi component bị unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    < Style/>
    <div className={`notification ${visible ? 'show' : ''}`}>
      Hãy đăng nhập để có thể đặt tour trực tuyến
    </div>
    </>

  );
};

export default Notification;
