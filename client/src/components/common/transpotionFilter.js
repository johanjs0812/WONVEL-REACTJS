import React, { useState, useEffect } from 'react';
import { TOUR_GET_TRANSPORTATION} from "../../constants/apiConfig";

const TranspostionFilter = ({ buttons2, FILTER, name, onClick, choose, owner }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (owner === name) {
      setActiveIndex(choose);
    }
  }, [owner, name, choose]);
  
  const handleButtonClick = (index, button) => {
    FILTER(`${TOUR_GET_TRANSPORTATION}${button}`);
    setActiveIndex(index);
    onClick(index, name);
  };

  return (
    <>
      <div className="tour-search-result__filter__block" style={{ marginBottom: '0 !important' }}>
        <h5 className="s-title">Thông tin vận chuyển</h5>

        <div className="btn-group tour-search-result__filter__room" style={{ width: '100%' }}>
          <div className="row" style={{ margin: '0', width: '100%' }}>
            {buttons2.map((button, index) => (
              <div
                key={index}
                className={`col-6 ${activeIndex === index ? 'active' : ''}`}
                style={{ backgroundColor: 'rgb(255, 255, 255)', color: 'rgb(33, 37, 41)' }}
              >
                <button
                  style={{ cursor: 'pointer' }}
                  className={`btn-stitll ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => handleButtonClick(index, button)}
                >
                  {button}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TranspostionFilter;
