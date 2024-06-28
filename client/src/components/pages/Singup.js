import React, { useState } from 'react';
import "../../styles/singup.css"
import { Link } from 'react-router-dom';

const Signup = ({ onSubmit, errLg, isUnauthorizedError }) => {
  const [formData, setFormData] = useState({
    full_name: '',
    phone_number: '',
    email: '',
    pass: '',
    pass2: '',
  });
  const [touched, setTouched] = useState({
    full_name: false,
    phone_number: false,
    email: false,
    pass: false,
    pass2: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBlur = (field) => (e) => {
    setTouched({
      ...touched,
      [field]: true,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const isInvalid = (field) => touched[field] && !formData[field];
  const getBorderColor = (field) => (isInvalid(field) || isUnauthorizedError ? 'red' : null);

  return (
    <>
        <main className="login">
        <div className="wrapper">
            <div className="row form-wrap">
            <div className="col-12 right">
                <div className="form-signin">
                <div className="text-center heading mb-4">
                    <h5>Chào mừng Quý khách đến với</h5>
                    <h1 className="fw-bold m-0">WONVEL.COM</h1>
                </div>

                <div className="card bg-white">
                    <div className="d-flex tab">
                    <Link to="/login" className="w-50 p-3 signin-btn h5 mb-0 text-center fw-bold" style={{ background: 'none', color: 'white' }}>
                        Đăng nhập
                    </Link>
                    <Link to="/signup" className="w-50 p-3 signup-btn h5 mb-0 text-center fw-bold" style={{ backgroundColor: '#fff', borderRadius: '10px 10px 0 0', color: '#2d4271' }}>
                        Đăng ký
                    </Link>
                    </div>

                    <div className="box-loading" hidden style={{ display: 'none' }}>
                    <div className="col-sm-12 col-md-auto col-lg-auto">
                        <div className="loading animate__animated animate__fadeIn">
                        <img loading="lazy" alt="Vietravel" src="/images/order/plane_loading.gif" width="120" height="45" style={{ position: 'relative', left: '-18px' }} />
                        <div className="loading03">
                            <span>V</span><span>I</span><span>E</span><span>T</span><span>R</span><span>A</span><span>V</span><span>E</span><span>L</span>
                        </div>
                        <br />
                        <span className="desc">Mạng bán tour trực tuyến đầu tiên tại Việt Nam.</span>
                        </div>
                    </div>
                    </div>

                    <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Họ và tên</label>
                        <span className="text-danger">*</span>
                        <input
                        name="full_name"
                        className="form-control"
                        type="text"
                        placeholder="Tài khoản"
                        value={formData.full_name}
                        onChange={handleChange}
                        onBlur={handleBlur('full_name')}
                        style={{ marginTop: '10px', borderColor: getBorderColor('full_name') }}
                        />
                        {isInvalid('full_name') && (
                        <div className="alert alert-danger" style={{ color: 'red', marginTop: '5px' }}>
                            Tên không được để trống, tối thiểu 4 ký tự, không chấp nhận ký tự đặc biệt và số trong họ tên.
                        </div>
                        )}
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">Số điện thoại</label>
                        <span className="text-danger">*</span>
                        <input
                        name="phone_number"
                        className="form-control"
                        type="number"
                        placeholder="Tài khoản"
                        value={formData.phone_number}
                        onChange={handleChange}
                        onBlur={handleBlur('phone_number')}
                        style={{ marginTop: '10px', borderColor: getBorderColor('phone_number') }}
                        />
                        {isInvalid('phone_number') && (
                        <div className="alert alert-danger" style={{ color: 'red', marginTop: '5px' }}>
                            Số điện thoại không được để trống, tối thiểu 10 chữ số tối đa 11 số.
                        </div>
                        )}
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">Email tài khoản</label>
                        <span className="text-danger">*</span>
                        <input
                        name="email"
                        id="Email"
                        className="form-control"
                        type="text"
                        placeholder="Tài khoản"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur('email')}
                        style={{ marginTop: '10px', borderColor: getBorderColor('email') }}
                        />
                        {isInvalid('email') && (
                        <div className="alert alert-danger" style={{ color: 'red', marginTop: '5px' }}>
                            Vui lòng nhập email hợp lệ.
                        </div>
                        )}
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">Mật khẩu</label>
                        <span className="text-danger">*</span>
                        <input
                        name="pass"
                        id="Password"
                        className="form-control"
                        type="password"
                        placeholder="Mật khẩu"
                        value={formData.pass}
                        onChange={handleChange}
                        onBlur={handleBlur('pass')}
                        style={{ marginTop: '10px', borderColor: getBorderColor('pass') }}
                        />
                        {isInvalid('pass') && (
                        <div className="alert alert-danger" style={{ color: 'red', marginTop: '5px' }}>
                            Mật khẩu bao gồm số và chữ, tối thiểu 4 ký tự.
                        </div>
                        )}
                        <div className="text-end py-2"></div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">Nhập lại mật khẩu</label>
                        <span className="text-danger">*</span>
                        <input
                        name="pass2"
                        id="Password2"
                        className="form-control"
                        type="password"
                        placeholder="Mật khẩu"
                        value={formData.pass2}
                        onChange={handleChange}
                        onBlur={handleBlur('pass2')}
                        style={{ marginTop: '10px', borderColor: getBorderColor('pass2') }}
                        />
                        {isInvalid('pass2') && (
                        <div className="alert alert-danger" style={{ color: 'red', marginTop: '5px' }}>
                            Mật khẩu không khớp.
                        </div>
                        )}
                        <div className="text-end py-2"></div>
                    </div>

                    <div className="mb-3 text-center"></div>

                    <p style={{ color: 'red' }}>{errLg}</p>

                    <button type="submit" id="btndangnhap" className="btn btn-primary w-100 py-3 fw-bold">
                        Đăng ký
                        <i className="fas fa-sign-in-alt" aria-hidden="true"></i>
                    </button>
                    </form>

                    <div className="form-divider">Hoặc</div>
                    <div className="add-on">
                    <div id="btnfacebook" className="add-on-btn facebook">
                        <span style={{ transition: 'opacity 0.5s ease 0s' }}>
                        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
                        <button type="button" className="btn btn-link text-white text-decoration-none metro">
                            <i className="fa fa-facebook"></i> Tiếp tục với Facebook
                        </button>
                        </span>
                    </div>
                    <div id="btngoogle" className="add-on-btn google">
                        <button id="customBtn" className="btn btn-link text-white text-decoration-none">
                        <i className="fab fa-google-plus-g"></i> Tiếp tục với Google
                        </button>
                    </div>
                    </div>

                </div>

                </div>

            </div>

            </div>

        </div>

        </main>
    </>
  );
};

export default Signup;
