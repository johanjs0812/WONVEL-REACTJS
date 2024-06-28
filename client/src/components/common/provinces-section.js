import React from 'react';
import "../../styles/provinces-section.css"
import { Link } from 'react-router-dom';

const ProvincesSection = () => {

  const destinations = [

  ]

  return (
    <>
      <div className="container">
        <h2 className="titlle-section">
          Điểm đến yêu thích
        </h2>

        <div className="contai-items">
          {destinations.map((destination, index) => (
            <div className="item-provinces" key={index}>
              <div className="card destination-item">
                <div className="position-relative destination-item__image">
                  <Link style={{ overflow: 'hidden', display: 'block' }}>
                    <img
                      style={{
                        borderRadius: '10px',
                        height: '100%',
                        minHeight: '207px',
                        objectFit: 'cover',
                        width: '100%'
                      }}
                      src={destination.img}
                      alt={destination.ten} // Alt attribute for accessibility
                      className="card-img-top img-fluid"
                    />
                  </Link>
                </div>
                <div className="card-body">
                  <h3 className="card-title destination-item__title">
                    <Link>{destination.ten}</Link>
                  </h3>
                  <p className="card-text destination-item__description">
                    Đã có {destination.luotThamQuan} lượt khách
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default ProvincesSection;