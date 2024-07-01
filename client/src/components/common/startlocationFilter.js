import React, {useState, useEffect } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { TOUR_GET_DEPARTMENT_LOCATION, TOUR_GET_ALL_DATA} from "../../constants/apiConfig";

const StartLocationFilter = ({tinh, FILTER, fetchData, name, onClick, choose, owner}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Tất cả');

  useEffect(() => {
    if (owner === name) {
      setSelectedOption(choose);
    }
  }, [owner, name, choose]);

  const handleOutsideClick = () => {
    setIsDropdownOpen(false);
  };

  const handleOptionClick = (province) => {
    
    if (province === "Tất cả") {
      fetchData(TOUR_GET_ALL_DATA);
      setSelectedOption(province);
      setIsDropdownOpen(false);

      onClick(province, name);
      return;
    }

    FILTER(`${TOUR_GET_DEPARTMENT_LOCATION}${province}`);
    setSelectedOption(province);
    setIsDropdownOpen(false);

    onClick(province, name);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="start-to-stop">
      <h5 className="point-start-title s-title">Điểm đi</h5>

      <div className="css-b62m3t-container" style={{ position: 'relative' }}>
        <div className="css-13cymwt-control" style={{ cursor: 'pointer' }} onClick={toggleDropdown}>
          <div className="css-hlgwow">
            <div className="css-1dimb5e-singleValue">{selectedOption}</div>
            <div className="css-19bb58m">
              <input
                className=""
                id="react-select-6-input"
                style={{
                  color: 'inherit',
                  background: '0px center',
                  opacity: 0,
                  width: '100%',
                  gridArea: '1 / 2',
                  font: 'inherit',
                  minWidth: '2px',
                  border: '0px',
                  margin: '0px',
                  outline: '0px',
                  padding: '0px',
                }}
              />
            </div>
          </div>
          <div className="css-1wy0on6">
            <div className="css-1xc3v61-indicatorContainer">
              <i className="bx bx-chevron-down"></i>
            </div>
          </div>
        </div>

        {isDropdownOpen && (
          <OutsideClickHandler onOutsideClick={handleOutsideClick}>
            <div className="box-select-loaction-go" style={{ cursor: 'pointer', display: 'inline-block' }}>

              <div className="option-local" onClick={() => handleOptionClick('Tất cả')}>
                Tất cả
              </div>

              {tinh.map((province, index) => (
                <div key={index} className="option-local" onClick={() => handleOptionClick(province)}>
                  {province}
                </div>
              ))}

            </div>
          </OutsideClickHandler>
        )}
      </div>
    </div>
  );
};

export default StartLocationFilter;


