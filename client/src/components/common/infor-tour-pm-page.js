import calculateDaysBetweenDates from "../../helpers/DayBetweensDates";
import formatDate from "../../helpers/formatTime";

const InforTourPmComponent = ({data}) => {

    const tour = data;

    return (
        <>   
            <div className="col-12 top">
                <div className="product">
                    <div className="product-image">
                    <div className="image">
                        <img src={tour?.tour?.img} className="img-fluid" alt="" />
                    </div>
                    </div>

                    <div className="product-content">
                    <p className="title" id="title">{tour?.tour?.tour_name}</p>
                    <div className="entry">
                        <div className="entry-inner">
                        <span>Mã Tour <b>{tour?.tour?.code_tour}</b></span>
                        <span>Khởi hành <b>{formatDate(tour?.tour?.start_date)}</b></span>
                        <span>Thời gian 
                            <b> {calculateDaysBetweenDates(tour?.tour?.start_date,tour?.tour?.end_date)}</b>
                        </span>
                        <span>Nơi khởi hành <b>{tour?.tour?.departure_location}</b></span>
                        {/* <span>Số chỗ còn nhận <b>8</b></span> */}
                        {/* <span>Dịch vụ tùy chọn <b>Bay Vietnam Airlines - Khách sạn 5* Hôtel de la Coupole - MGallery</b></span> */}
                        </div>
                    </div>
                    </div>
                </div>
            </div>       
        </>
    )
}

export default InforTourPmComponent