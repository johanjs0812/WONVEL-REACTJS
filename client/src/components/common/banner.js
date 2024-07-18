import React from 'react';

import "../css/banner.css";


const Banner = () => {
  return (
    <>
      <div className="banner-travel" style={{ marginBottom: '48px' }}>
        <div className="slick-kit">
          <div className="contai-slick-kit">
            <div className="img-item-bn" style={{ position: 'relative' }}>
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.274)', position: 'absolute', height: '100%', width: '100%', top: 0 }}></div>
              <img src="https://statics.vinpearl.com/female-names-in-vietnam-04_1680096778.jpg" alt="" />
            </div>
          </div>
        </div>

        <div className="search-box">
          <div className="contai-sb">
            <div className="padd-ct-sb">
              <div className="row-sb">
                <div className="sb-bx-1">
                  <div className="benx-benx" style={{ display: 'flex' }}>
                    <div className="chat-kol">
                      <div className="input-kol">
                        <div className="center-kol">
                          <div className="flex-ssh-kol">
                            <i className='bx bx-current-location' ></i>
                          </div>

                          <div className="flex-righ-klol">
                            <label htmlFor="react-select-2-input" className="h212">Điểm đi</label>
                            <div className="location-select">
                              <div className="text-select-location">
                                Nơi khởi hành
                              </div>
                              <div className="box-down-location-select">
                                <i className='bx bxs-chevron-down' ></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="chat-kol-central">
                      <i className='bx bx-transfer'></i>
                    </div>
                    <div className="chat-kol">
                      <div className="input-kol">
                        <div className="center-kol">
                          <div className="flex-ssh-kol">
                            <i className='bx bx-current-location' ></i>
                          </div>

                          <div className="flex-righ-klol">
                            <label htmlFor="react-select-2-input" className="h212">Điểm đến</label>
                            <div className="location-select">
                              <div className="text-select-location">
                                Hãy chọn điểm đến
                              </div>
                              <div className="box-down-location-select">
                                <i className='bx bxs-chevron-down' ></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sb-bx-2">
                  <div className="chat-kol chat-kol-cancel">
                    <div className="input-kol">
                      <div className="center-kol">
                        <div className="flex-ssh-kol">
                          <i className='bx bxs-calendar' ></i>
                        </div>

                        <div className="flex-righ-klol">
                          <div className="h212">Ngày đi</div>
                          <div className="location-select">
                            <div className="text-select-location">
                              12/05/2024
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sb-bx-3">
                  <button type="submit" className="btn submit-btn">
                    <i className="fa fa-search me-1" aria-hidden="true"></i>
                    Tìm kiếm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
