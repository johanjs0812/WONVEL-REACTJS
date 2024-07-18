import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { addContact } from '../../redux/slices/paymentSlice';

const ContactFormPmComponent = () => {

  const [userLogin, setUserLogin] = useState('');

  useEffect(() => {
    const storedUserLogin = sessionStorage.getItem('user_login');

    if (storedUserLogin) {
      const sessionObject = JSON.parse(storedUserLogin);
      setUserLogin(sessionObject);
    }
  }, []); 

  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
  });

  const dispatch = useDispatch();
  // const paymentState = useSelector((state) => state.payment);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

    dispatch(addContact(formValues));
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
            value={formValues.fullName || userLogin.full_name}
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
            value={formValues.email || userLogin.email}
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
            value={formValues.phone || userLogin.phone_number}
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
            value={formValues.address || userLogin.address}
            onChange={handleInputChange}
            style={{ marginBottom: '18px' }}
          />
        </div>

      </form>
    </div>
  );
};

export default ContactFormPmComponent;
