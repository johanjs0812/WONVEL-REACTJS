import React, { useState, useEffect } from 'react';
import { TOUR_GET_DATE_RANGE} from "../../constants/apiConfig";

const TimeDayTravelFilter = ({ buttons1, FILTER, name, onClick, choose, owner }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (owner === name) {
      setActiveIndex(choose);
    }
  }, [owner, name, choose]);

  const handleButtonClick = (index, button) => {
    FILTER(`${TOUR_GET_DATE_RANGE}${button}`);
    setActiveIndex(index);
    onClick(index, name);
  };

  return (
    <> 
      <div className="tour-search-result__filter__block">
        <h5 className="s-title">Số ngày</h5>

        <div className="btn-group tour-search-result__filter__room" style={{ width: '100%' }}>
          <div className="row" style={{ margin: '0', width: '100%' }}>
            {buttons1.map((button, index) => (
              <div
                key={index}
                className={`col-6 ${activeIndex === index ? 'active' : ''}`}
                style={{ backgroundColor: 'rgb(255, 255, 255)', color: 'rgb(33, 37, 41)' }}
              >
                <button
                  style={{ cursor: 'pointer' }}
                  className={`btn-stitll ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => handleButtonClick(index, button.value)}
                >
                  {button.text}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeDayTravelFilter;
