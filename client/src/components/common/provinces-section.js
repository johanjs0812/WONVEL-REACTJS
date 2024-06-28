import React from 'react';
import { Link } from 'react-router-dom';

// import "../css/provinces-section.css";

const Style = () => {
  return (
    <style>
      {`
        .container{
  max-width: 1320px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 48px;
}



.titlle-section{
  color: #2d4271;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 2rem;
}

.contai-items{
  display: flex;
  flex-wrap: wrap;
  margin-left: calc(var(--bs-gutter-x) / -2);
  margin-right: calc(var(--bs-gutter-x) / -2);
  margin-top: calc(var(--bs-gutter-y)* -1);
}

.item-provinces {
  margin-top: var(--bs-gutter-y);
  max-width: 100%;
  padding-left: calc(var(--bs-gutter-x) / 2);
  padding-right: calc(var(--bs-gutter-x) / 2);

  width: 25%;
  flex: 0 0 auto;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border-radius: .25rem;
}

.position-relative {
  position: relative !important;
}

.destination-item__image {
  height: auto;
  overflow: hidden;
  border-radius: 10px;

}

a {
  color: #2d4271;
  text-decoration: none;
}

img{
  border-radius: 10px;

}

.destination-item__title {
  font-size: 17px;
  font-weight: 700;
  line-height: 1.75rem;
}

.card-title {
  margin-bottom: .5rem;
}

.destination-item__description {
  font-size: 13px;
}

      `}
    </style>
  );
};

const ProvincesSection = () => {

  const destinations = [

  ]

  return (
    <>
    <Style />
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