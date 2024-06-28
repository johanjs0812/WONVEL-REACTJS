import React from "react";

import { Link } from 'react-router-dom';

// import "../css/login.css";

const Style = () => {
    return (
      <style>
        {`
        .h5, h5 {
        font-size: 1.25rem;
        }

        .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
        font-weight: 500;
        line-height: 1.2;
        margin-bottom: .5rem;
        margin-top: 0;
        }



        .login {
        min-height: 100%;
        text-align: center;
        }

        .login .wrapper {
        align-items: center;
        display: flex;
        justify-content: center;
        min-height: calc(100vh - 85px);
        padding: 60px 0;
        }

        .login .wrapper .form-wrap {
        background-color: #fff;
        border-radius: 10px;
        overflow: hidden;
        width: 550px;
        }

        .login .wrapper .form-wrap .right {
        padding: 3rem 1.5rem;
        }

        .col-12 {
        flex: 0 0 auto;
        width: 100%;
        }

        .login .wrapper .form-wrap .right .form-signin {
        margin: auto;
        max-width: 400px;
        padding: 15px;
        width: 100%;
        }

        .text-center {
        text-align: center !important;
        }

        .mb-4 {
        margin-bottom: 1.5rem !important;
        }

        .fw-bold {
        font-weight: 700 !important;
        }

        .m-0 {
        margin: 0 !important;
        }

        @media (min-width: 1200px) {
        .h1, h1 {
            font-size: 2.5rem;
        }
        }

        .card {
        position: relative;
        display: flex;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-color: #fff;
        background-clip: border-box;
        border: 1px solid rgba(0, 0, 0, .125);
        border-radius: .25rem;
        }

        .card {
        border: none;
        }

        .bg-body, .bg-white {
        background-color: #fff !important;
        }

        .login .wrapper .form-wrap .right .form-signin .card .tab {
        background-color: #4d4aef;
        border-radius: 10px 10px 0 0;
        color: #fff;
        margin-bottom: 2rem;
        }
        .d-flex {
        display: flex !important;
        }

        .login .wrapper .form-wrap .right .form-signin .card .tab .signin-btn {
        background-color: #fff;
        border-radius: 10px 10px 0 0;
        color: #2d4271;
        }

        button:not(:disabled) {
        cursor: pointer;
        }
        .text-center {
        text-align: center !important;
        }

        .p-3 {
        padding: 1rem !important;
        }

        .mb-0 {
        margin-bottom: 0 !important;
        }

        .w-50 {
        width: 50% !important;
        }

        button, input[type=button], input[type=reset], input[type=submit] {
        border-width: 0;
        }

        button, html input[type=button], input[type=reset], input[type=submit] {
        cursor: pointer;
        }

        button, select {
        text-transform: none;
        }

        .login .wrapper .form-wrap .right .form-signin .card .tab a {
        color: #fff;
        cursor: pointer;
        }

        .box-loading {
        align-items: center;
        background-color: rgba(0, 0, 0, .5);
        bottom: 0;
        display: flex;
        justify-content: center;
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 999999;
        }

        .loading {
        background-color: #f4f4f4;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, .3);
        margin-left: 10px;
        margin-right: 10px;
        padding: 30px;
        text-align: center;
        }

        .loading .loading03 {
        color: #0066b3;
        font-family: VNI-Cooper;
        font-size: 32px;
        font-weight: 800;
        text-align: center;
        }

        .loading .loading03 span {
        display: inline-block;
        margin: 0 -.05em;
        }

        .loading .desc {
        font-size: 16px;
        }

        .login .wrapper .form-wrap .right .form-signin .card form {
        text-align: left;
        }
        .login .wrapper .form-wrap .right .form-signin .card label {
        font-size: 16px;
        }
        .form-label {
        margin-bottom: .5rem;
        }

        .text-danger {
        color: #dc3545 !important;
        }

        .form-control {
        -webkit-appearance: none;
        appearance: none;
        background-clip: padding-box;
        background-color: #fff;
        border: 1px solid #d8d8d8;
        border-radius: .25rem;
        color: #2d4271;
        display: block;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        padding: .375rem .75rem;
        transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
        width: 100%;
        }

        .text-end {
        text-align: right !important;
        }

        .py-2 {
        padding-bottom: .5rem !important;
        padding-top: .5rem !important;
        }

        a {
        color: #2d4271;
        text-decoration: none;
        }

        .text-center {
        text-align: center !important;
        }

        .w-100 {
        width: 100% !important;
        }

        .fas {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        display: inline-block;
        font-style: normal;
        font-variant: normal;
        text-rendering: auto;
        line-height: 1;
        }

        .login .wrapper .form-wrap .right .form-signin .card .form-divider {
        font-size: 18px;
        margin: 1rem 0;
        text-align: center;
        }

        .login .wrapper .form-wrap .right .form-signin .card .add-on {
        display: flex;
        justify-content: space-between;
        }

        .login .wrapper .form-wrap .right .form-signin .card .add-on .facebook {
        background-color: #4267b2;
        }

        .login .wrapper .form-wrap .right .form-signin .card .add-on .add-on-btn {
        border-radius: 5px;
        padding: 1rem;
        width: 48%;
        }

        .btn {
        background-color: initial;
        border: 1px solid transparent;
        border-radius: .25rem;
        color: #2d4271;
        cursor: pointer;
        display: inline-block;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        padding: .375rem .75rem;
        text-align: center;
        text-decoration: none;
        transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
        -webkit-user-select: none;
        user-select: none;
        vertical-align: middle;
        }

        .btn-link {
        color: #0d6efd;
        font-weight: 400;
        }

        .login .wrapper .form-wrap .right .form-signin .card .add-on .google {
        background-color: #e01600;
        }

        .login .wrapper .form-wrap .right .form-signin .card .add-on .add-on-btn {
        border-radius: 5px;
        padding: 1rem;
        width: 48%;
        }

        .text-white {
        color: #fff !important;
        }

        .mb-3 {
        margin-bottom: 1rem !important;
        }

        .btn-primary {
        background-color: #e01600;
        border-color: #e01600;
        color: #fff;
        }
        .py-3 {
        padding-bottom: 1rem !important;
        padding-top: 1rem !important;
        }

        `}
      </style>
    );
};

const Login = ({ loginForm, onSubmit, errLg, isUnauthorizedError }) => {
  const isInvalidEmail = loginForm && loginForm.controls.email.invalid && loginForm.controls.email.touched;
  const isInvalidPass = loginForm && loginForm.controls.pass.invalid && loginForm.controls.pass.touched;
  
  return (
    <>
    < Style/>
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
