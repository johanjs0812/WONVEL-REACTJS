import { Link } from 'react-router-dom';
import formatCurrency from '../../helpers/formatVnd';
import formatDate from '../../helpers/formatTime';
import calculateDaysBetweenDates from '../../helpers/DayBetweensDates';

const ToursList = ({tours}) => {
    return(
        <>
        
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
                        <p className="p-1">{formatDate(tour.start_date)} - {calculateDaysBetweenDates(tour.start_date, tour.end_date)}</p>
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
                            Giá <span className="tour-item__price--old__number">{formatCurrency(tour.price)}</span>
                        </div>
                        <div className="tour-item__price--current">
                            <span className="tour-item__price--current__number pe-2 mb-0">{formatCurrency(tour.discount_price ?? tour.price)}</span>
                            <span className="tour-item__price--current__discount small p-1" >
                            <Link to={`/detail/${tour.id}`} style={{color: "white"}}>Xem chi tiết</Link>
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

        </>
    )
}

export default ToursList;