import React, { useState } from 'react';

const ContactFormPmComponent = () => {
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <div className="customer-contact mb-3">
      <form className="customer-contact-inner" id="form">
        
        <div className="name">
          <label>Họ và Tên <b>*</b></label>
          <input
            autoComplete="off"
            type="text"
            className="form-control"
            name="fullName"
            value={formValues.fullName}
            onChange={handleInputChange}
            required
            minLength={6}
          />
          <div className="errorform error-notes">Vui lòng nhập thông tin</div>
        </div>

        <div className="mail">
          <label>Email <b>*</b></label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
            required
            pattern="\S+@\S+\.\S+"
          />
          <div className="errorform error-notes">Vui lòng nhập thông tin</div>
        </div>

        <div className="phone">
          <label>Số điện thoại <b>*</b></label>
          <input
            type="number"
            className="form-control"
            name="phone"
            value={formValues.phone}
            onChange={handleInputChange}
            required
            minLength={10}
          />
          <div className="errorform error-notes">Vui lòng nhập thông tin</div>
        </div>

        <div className="address">
          <label>Địa chỉ</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={formValues.address}
            onChange={handleInputChange}
            style={{ marginBottom: '18px' }}
          />
        </div>

      </form>
    </div>
  );
};

export default ContactFormPmComponent;
