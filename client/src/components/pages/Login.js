import React from "react";
import "../../styles/login.css";

import { Link } from 'react-router-dom';

const Login = ({ loginForm, onSubmit, errLg, isUnauthorizedError }) => {
  const isInvalidEmail = loginForm && loginForm.controls.email.invalid && loginForm.controls.email.touched;
  const isInvalidPass = loginForm && loginForm.controls.pass.invalid && loginForm.controls.pass.touched;
  
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
                    <button className="w-50 p-3 signin-btn h5 mb-0 text-center fw-bold">Đăng nhập</button>
                    <Link to="/singup" className="w-50 p-3 signup-btn h5 mb-0 text-center fw-bold">Đăng ký</Link>
                    </div>

                    <div className="box-loading" hidden style={{ display: 'none' }}>
                    <div className="col-sm-12 col-md-auto col-lg-auto">
                        <div className="loading animate__animated animate__fadeIn">
                        <img 
                            loading="lazy" 
                            alt="Vietravel" 
                            src="/images/order/plane_loading.gif" 
                            width="120" 
                            height="45" 
                            style={{ position: 'relative', left: '-18px' }}
                        />
                        <div className="loading03">
                            <span>V</span><span>I</span><span>E</span><span>T</span><span>R</span><span>A</span><span>V</span><span>E</span><span>L</span>
                        </div>
                        <br />
                        <span className="desc">Mạng bán tour trực tuyến đầu tiên tại Việt Nam.</span>
                        </div>
                    </div>
                    </div>

                    <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Email tài khoản</label>
                        <span className="text-danger">*</span>
                        <input 
                        //   formControlName="email"
                        id="Email"
                        className="form-control"
                        name="Email"
                        type="text"
                        placeholder="Tài khoản"
                        style={{ 
                            marginTop: '10px', 
                            borderColor: (isInvalidEmail || isUnauthorizedError) ? 'red' : null 
                        }}
                        />
                        {isInvalidEmail && (
                        <div className="alert alert-danger" style={{ color: 'red', marginTop: '5px' }}>
                            Vui lòng nhập email.
                        </div>
                        )}
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">Mật khẩu</label>
                        <span className="text-danger">*</span>
                        <input 
                        //   formControlName="pass"
                        id="Password"
                        className="form-control"
                        name="Password"
                        type="password"
                        placeholder="Mật khẩu"
                        style={{ 
                            marginTop: '10px', 
                            borderColor: (isInvalidPass || isUnauthorizedError) ? 'red' : null 
                        }}
                        />
                        {isInvalidPass && (
                        <div className="alert alert-danger" style={{ color: 'red', marginTop: '5px' }}>
                            Vui lòng nhập mật khẩu.
                        </div>
                        )}
                        <div className="text-end py-2">
                        <Link rel="nofollow noreferrer" target="_blank">Lấy lại mật khẩu</Link>
                        </div>
                    </div>

                    <div className="mb-3 text-center"></div>

                    <p style={{ color: 'red' }}>
                        {errLg}
                    </p>

                    <button type="submit" id="btndangnhap" className="btn btn-primary w-100 py-3 fw-bold">
                        Đăng nhập
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

export default Login;
