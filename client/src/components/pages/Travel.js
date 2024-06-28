import React from 'react';
// import React, { useState, useRef  } from 'react';
import { Link } from 'react-router-dom';
// import DatePicker from '@material-ui/pickers/DatePicker';
// import '@material-ui/pickers/dist/base';

import "../../styles/travel.css"

const Travel = ( { formatVndDate, Duration, formatPrice, provinces, buttons, buttons2 }) => {

  const tours = [];


  // const [selectedProvince, setSelectedProvince] = useState(null);
  // const [selectedProvince2, setSelectedProvince2] = useState(null);
  // const [displayStyle, setDisplayStyle] = useState('none');
  // const [displayStyle2, setDisplayStyle2] = useState('none');
  // const [selectedButton, setSelectedButton] = useState(null);
  // const [selectedButton2, setSelectedButton2] = useState(null);

  // const fromInput = useRef(null);
  // const toInput = useRef(null);

  // const toggleDisplayStyle = (province, event) => {
  //   setSelectedProvince(province);
  //   setDisplayStyle(displayStyle === 'none' ? 'block' : 'none');
  // };

  // const toggleDisplayStyle2 = (province, event) => {
  //   setSelectedProvince2(province);
  //   setDisplayStyle2(displayStyle2 === 'none' ? 'block' : 'none');
  // };

  // const updateFilter = (filterType, value) => {
  //   // Implement filter logic here
  // };

  // const selectButton = (index) => {
  //   setSelectedButton(index);
  // };

  // const selectButton2 = (index) => {
  //   setSelectedButton2(index);
  // };

  // const onDateChange = (event) => {
  //   // Implement date change logic here
  // };

  // const clickPrice = (fromValue, toValue) => {
  //   // Implement price click logic here
  // };

  return (
    <>

    <div className="tour-search">

      <div className="container">
        <div className="row">
          <ul className="breadcrumbs__wrapper d-flex align-items-center">
            <li>
              <Link to="/" style={{ marginLeft: '10px' }}>
                <span>Du lịch</span>
              </Link>
              {/* <!-- » --> */}
            </li>
          </ul>
        </div>
      </div>

      <div className="container">

        <div className="row">

          <div className="left-bar">

            <div className="sidebar-inner">
              <div>
                <div className="tour-search-result__filter__brand">
                  <h2 className="font-weight-bold">Bộ lọc tìm kiếm</h2>
                </div>
                <div className="location-container">
                  <div>
                    <div className="tour-search-result__filter__heading">
                      <span className="fw-bold">Tất cả</span>
                    </div>

                    <div className="pt-2" style={{ paddingTop: '16px' }}>

                      <div className="start-to-stop">

                        <h5 className="point-start-title s-title">Điểm đi</h5>

                        {/* <div className="css-b62m3t-container" style={{ position: 'relative' }}>
                          <div className="css-13cymwt-control" style={{ cursor: 'pointer' }} onClick={(event) => toggleDisplayStyle2(selectedProvince2, event)}>
                            <div className="css-hlgwow">
                              <div className="css-1dimb5e-singleValue">{selectedProvince2 || 'Tất cả'}</div>
                              <div className="css-19bb58m">
                                <input className="" id="react-select-6-input" value="" style={{ color: 'inherit', background: '0px center', opacity: 0, width: '100%', gridArea: '1 / 2', font: 'inherit', minWidth: '2px', border: '0px', margin: '0px', outline: '0px', padding: '0px' }} />
                              </div>
                            </div>
                            <div className="css-1wy0on6">
                              <div className="css-1xc3v61-indicatorContainer">
                                <i className='bx bx-chevron-down'></i>
                              </div>
                            </div>
                          </div>
                          <div className="box-select-loaction-go" style={{ display: displayStyle2 }}>
                            <div className="option-local" onClick={(event) => { toggleDisplayStyle2('Tất cả', event); updateFilter('startFilter', undefined); }}>Tất cả</div>
                            {provinces.map((province, index) => (
                              <div key={index} className="option-local" onClick={(event) => { toggleDisplayStyle2(province, event); updateFilter('startFilter', province); }}>{province}</div>
                            ))}
                          </div>
                        </div> */}

                      </div>

                      <div className="start-to-stop">
                        <h5 className="point-start-title s-title">Điểm đến</h5>

                        {/* <div className="css-b62m3t-container" style={{ position: 'relative' }}>
                          <div className="css-13cymwt-control" style={{ cursor: 'pointer' }} onClick={(event) => toggleDisplayStyle(selectedProvince, event)}>
                            <div className="css-hlgwow">
                              <div className="css-1dimb5e-singleValue">{selectedProvince || 'Tất cả'}</div>
                              <div className="css-19bb58m">
                                <input className="" id="react-select-6-input" value="" style={{ color: 'inherit', background: '0px center', opacity: 0, width: '100%', gridArea: '1 / 2', font: 'inherit', minWidth: '2px', border: '0px', margin: '0px', outline: '0px', padding: '0px' }} />
                              </div>
                            </div>
                            <div className="css-1wy0on6">
                              <div className="css-1xc3v61-indicatorContainer">
                                <i className='bx bx-chevron-down'></i>
                              </div>
                            </div>
                          </div>
                          <div className="box-select-loaction-go" style={{ display: displayStyle }}>
                            <div className="option-local" onClick={(event) => { toggleDisplayStyle('Tất cả', event); updateFilter('endFilter', undefined); }}>Tất cả</div>
                            {provinces.map((province, index) => (
                              <div key={index} className="option-local" onClick={(event) => { toggleDisplayStyle(province, event); updateFilter('endFilter', province); }}>{province}</div>
                            ))}
                          </div>
                        </div> */}

                      </div>

                      <div className="tour-search-result__filter__block">
                        <h5 className="s-title">Số ngày</h5>

                        {/* <div className="btn-group tour-search-result__filter__room" style={{ width: '100%' }}>
                          <div className="row" style={{ margin: '0', width: '100%' }}>
                            {buttons.map((button, index) => (
                              <div key={index} className="col-6" style={{ backgroundColor: 'rgb(255, 255, 255)', color: 'rgb(33, 37, 41)' }}>
                                <button style={{ cursor: 'pointer' }} className={`btn-stitll ${selectedButton === index ? 'active' : ''}`} onClick={() => { selectButton(index); updateFilter('dayFilter', button); }}>
                                  {button}
                                </button>
                              </div>
                            ))}
                          </div>
                        </div> */}

                      </div>

                      <div className="tour-search-result__filter__block">
                        <h5 className="date-go-to-back-title s-title">Ngày đi</h5>

                        {/* <div className="datepciker-wrap" onClick={() => picker.open()}>
                          <i className='bx bxs-calendar-week'></i>
                          <div className="calendarWrap bg-transparent" style={{ overflow: 'hidden' }}>
                            <input value={valueDate} className="form-control input-date input-noborder bg-transparent" id="date-range-hotel" style={{ outline: 'none' }} />
                            <mat-form-field>
                              <input matInput ref={dateInput} className="form-control input-date input-noborder bg-transparent" id="date-range-hotel" style={{ outline: 'none' }} onChange={(event) => onDateChange(event)} />
                              <mat-datepicker ref={picker}></mat-datepicker>
                            </mat-form-field>
                          </div>
                        </div> */}

                      </div>

                      <div className="tour-search-result__filter__block" style={{ marginBottom: '0 !important' }}>
                        <h5 className="s-title" > Thông tin vận chuyển </h5>

                        {/* <div className="btn-group tour-search-result__filter__room" style={{ width: '100%' }}>
                          <div className="row" style={{ margin: '0', width: '100%' }}>
                            {buttons2.map((button, index) => (
                              <div key={index} className="col-6" style={{ backgroundColor: 'rgb(255, 255, 255)', color: 'rgb(33, 37, 41)' }}>
                                <button style={{ cursor: 'pointer' }} className={`btn-stitll ${selectedButton2 === index ? 'active' : ''}`} onClick={() => { selectButton2(index); updateFilter('vehicleFilter', button); }}>
                                  {button}
                                </button>
                              </div>
                            ))}
                          </div>
                        </div> */}
                    </div>

                    <br />

                    <h5 className="s-title">Ngân sách của Quý khách</h5>
                    <div className="ranger-price giatien" style={{ marginBottom: '0' }}>

                      {/* <div style={{ display: 'flex', alignItems: 'center', columnGap: '20px' }}>
                        <div className="btn-price">
                          <input type="number" placeholder="Từ" ref={fromInput} />
                        </div>
                        <div>-</div>
                        <div className="btn-price">
                          <input type="text" placeholder="Đến" ref={toInput} />
                        </div>
                        <div className="box-btn-se" onClick={() => clickPrice(fromInput.value, toInput.value)}>
                          <button>Tìm</button>
                        </div>
                      </div> */}

                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>

            <div className="right-bar">
              <div className="pen-3">
                <h1 className="heading-1">Du lịch</h1>
                <div className="py-2">
                  <p className="card-text mb-1 text-justify"></p>
                  <div></div>
                  <p></p>
                </div>
              </div>

              <div>
                <div className="order-by">
                  <div className="order-by-title">Chúng tôi tìm thấy <strong>{tours.length}</strong> tours cho Quý khách.</div>
                  <div className="order-by-left">
                    <div className="order-wrap">
                      <span>Sắp xếp theo</span>
                      <select className="form-control dropdown Filter" id="sllOrder" name="sllOrder" style={{ outline: 'none' }}>
                        <option>--- Chọn ---</option>
                        <option>Theo giá thấp -&gt; cao</option>
                        <option>Theo giá cao -&gt; thấp</option>
                        <option>Giảm giá nhiều nhất</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contai-product" style={{ flexWrap: 'wrap', rowGap: '25px' }}>

                {tours.map((tour) => (
                  <div key={tour.id} className="col-col">
                    <div className="card-item">
                      <div className="box-top">
                        <div className="box-img">
                          <Link to={`/detail/${tour.id}`}>
                            <img src={tour.img} alt="" />
                          </Link>
                        </div>
                      </div>
                      <div className="box-center pad-rs">
                        <p className="p-1">{formatVndDate(tour.start_date)} - {Duration(tour.start_date, tour.end_date)}</p>
                        <p className="p-2">
                          <Link to={`/detail/${tour.id}`}>
                            {tour.tour_name}
                          </Link>
                        </p>
                        <div className="p-3">
                          <div>Mã tour:</div>
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            <i className='bx bxs-coupon'></i>
                            <p style={{ marginBottom: '0px' }}>{tour.code_tour}</p>
                          </div>
                        </div>
                      </div>
                      <p className="box-bot padding-1rem pad-rs pad-top-rs">
                        Nơi khởi hành: {tour.departure_location}
                      </p>
                      <div className="box-last padding-1rem pad-rs ">
                        <div className="tour-item__price__wrapper">
                          <div className="tour-item__price--old" style={{ visibility: tour.discount_price ? 'visible' : 'hidden' }}>
                            Giá <span className="tour-item__price--old__number">{formatPrice(tour.price)}</span>
                          </div>
                          <div className="tour-item__price--current">
                            <span className="tour-item__price--current__number pe-2 mb-0">{formatPrice(tour.discount_price ?? tour.price)}</span>
                            <span className="tour-item__price--current__discount small p-1">
                              <Link to={`/detail/${tour.id}`}>Xem chi tiết</Link>
                            </span>
                          </div>
                          <div className="tour-item__price__timer py-2">
                            <span>Đặt ngay</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>
            
          </div>
        </div>

      </div>

    </div>

    </>
  );
};

export default Travel;