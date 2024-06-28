import React from 'react';
import "../../styles/header.css";
// import LinkOrButton  from "../../helpers/linkOrButton";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header>
        <div className="box-flex">
          <Link to="" className="logo" >
          <img src="/images/logo.png" alt="" />
          </Link>
          <div className="box-2">
            <ul className="ul-hd">
              <li className="li-hd">
                <Link to="/travel">Du lịch</Link>
              </li>
              <li className="li-hd">
                <Link to="">Tin tức</Link>
              </li>
              <li className="li-hd">
                <Link to="">Về chúng tôi</Link>
              </li>
              <li className="li-hd">
                <Link to="">Liên hệ</Link>
              </li>
            </ul>
          </div>
          <div className="box-3">
            <div className="form-ss">
              <form>
                <label htmlFor="submit">Từ khoá</label>
                <input type="text" name="search" className="ipt" placeholder="Bắt đầu tìm kiếm..." defaultValue="" />
                {/* <input type="submit" name="submit" title="Tìm kiếm" className="sm" defaultValue="" /> */}
                <i className='bx bx-search i-c'></i>
                <div className="form-search-wrapper"></div>
              </form>
            </div>
            <div className="gr-ft">
              <div className="account item">
                <Link to="/login" className="so-po">
                  <i className='bx bx-user o-p'></i>
                </Link>
                {/* <Link style={{ display: 'flex', alignItems: 'center' }}>
                  <p style={{ marginBottom: '0px', marginRight: '5px' }}>x</p>
                  <i className='bx bx-log-in' style={{ fontSize: '20px' }}></i>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;