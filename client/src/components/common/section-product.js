import React from 'react';
import "../../styles/section-product.css"
import { Link } from 'react-router-dom';

const ProductSection = () => {
  const tourDiscounts = [
    
  ];

  return (
    <>
     <div className="container">
      <h2 className="title-section">Tour đang giảm giá hot</h2>
      <div className="contai-product">
        {tourDiscounts.map(tour => (
          <div className="col-col" key={tour.id}>
            <div className="card-item">
              <div className="box-top">
                <div className="box-img">
                  <Link to={`/detail/${tour.id}`}>
                    <img src={tour.img} alt={tour.tour_name} />
                  </Link>
                </div>
              </div>
              <div className="box-center">
                <p className="p-1">{`${tour.start_date} - ${tour.timeday}`}</p>
                <p className="p-2">
                  <Link to={`/detail/${tour.id}`}>
                    {tour.tour_name}
                  </Link>
                </p>
                <div className="p-3">
                  <div>Mã tour:</div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <i className='bx bxs-coupon'></i>
                    <p style={{ marginBottom: 0 }}>{tour.code_tour}</p>
                  </div>
                </div>
              </div>
              <p className="box-bot padding-1rem">
                Nơi khởi hành: {tour.departure_location}
              </p>
              <div className="box-last padding-1rem">
                <div className="tour-item__price__wrapper">
                  <div className="tour-item__price--old">
                    Giá <span className="tour-item__price--old__number">{tour.price}</span>
                  </div>
                  <div className="tour-item__price--current">
                    <span className="tour-item__price--current__number pe-2 mb-0">{tour.discount_price}</span>
                    <span className="tour-item__price--current__discount small p-1">{tour.discount_percentage}% GIẢM</span>
                  </div>
                  <Link className="tour-item__price__timer py-2" to={`/inforpm/${tour.id}`}>
                    <span>Đặt ngay</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
     </div>
    </>
  );
};

export default ProductSection;
