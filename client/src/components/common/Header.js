import React from 'react';
import { Link } from 'react-router-dom';

// import "../css/header.css";

const Style = () => {
  return (
    <style>
      {`

header{
  background-color: white;
}

.box-flex{
  align-items: center;
  display: flex;
  flex-wrap: inherit;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  padding-left: .75rem;
  padding-right: .75rem;
  width: 100%;
}

.logo{
  display: flex;
  line-height: 60px;
  max-width: 150px;
  font-size: 1.25rem;
  margin-right: 1rem;
  padding-bottom: .3125rem;
  padding-top: .3125rem;
  text-decoration: none;
  white-space: nowrap;
}

.logo img {
  width: 100%;
}

.box-2
{
  align-items: center;
  display: flex !important;
  flex-basis: auto; flex-grow: 1;

}

.ul-hd {
  flex-direction: row;
  display: flex;
  list-style: none;
  margin-bottom: 0;
  padding-left: 0;
  margin-top: 0;
}

.li-hd {
  margin: 0 8px;
  position: static !important;
  padding: .5rem 0;
}

.li-hd a {
  font-weight: 700;
  padding-left: .5rem;
  padding-right: .5rem;
  color: #2d4271;
  font-size: 13px;
  white-space: nowrap;
  display: block;
  padding: .5rem 1rem;
  text-decoration: none;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out;
  background-color: transparent;
  cursor: pointer;
}

.box-3{
  align-items: center;
  display: flex;
  flex-direction: row;
  list-style: none;
  margin-bottom: 0;
  padding-left: 0;
  margin-left: auto !important;
}

.form-ss form{
  border: 2px solid #ffc709;
  border-radius: 5px;
  height: 50px;
  overflow: hidden;
  position: relative;
  display: block;
  margin-top: 0em;
  unicode-bidi: isolate;
}

.form-ss form label {
  display: none !important;
  cursor: default;
}

.ipt{
  border: none;
  color: #2d4271;
  font-weight: 400;
  height: 100%;
  padding: 0 25px;
  width: 100%;
  line-height: normal;
  font: inherit;
  margin: 0;
  outline: none;
}

.sm
{
  background: 0 0;
  border: none;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  width: 60px;
  z-index: 1;
  cursor: pointer;
  color: inherit;
  font: inherit;
  margin: 0;
  background-color: #fff;
}

.i-c {
  color: #2d4271;
  font-size: 18px;
  pointer-events: none;
  position: absolute;
  right: 13px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: 1;
}

.gr-ft {
  align-items: center;
  display: flex;
  padding-right: 0;
}

.gr-ft{
  align-items: center;
  display: flex;
  padding-right: 0;
}

.account.item {
  cursor: pointer;
  padding: 0 11px;
}

.o-p{
  color: #2d4271;
  font-size: 22px;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
  cursor: pointer;
}

      `}
    </style>
  );
};

const Header = () => {
  return (
    <>
      <Style />

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