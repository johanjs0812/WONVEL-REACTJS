const CheckoutPmComponent = ({
    data, handleSubmitContact, isFormValid, 
    handleSubmit1, handleSubmit2, 
    formData1, formData2 }) => {

    const tour = data;

    const total = '';
    const young_childsArray = [];
    const adultsArray = [];
    const babysArray = [];
    const childrenArray = [];

    const handleAllSubmit = () => {
        handleSubmit1(formData1);
        handleSubmit2(formData2);
    };
  
    
    const handleBothSubmits = () => {
        handleAllSubmit();
        handleSubmitContact();
    };
      

    return (
        <>
            <div className="group-checkout">

                <h3>Tóm tắt chuyến đi</h3>

                <div className="product">
                    <div className="product-image">
                    <img src={tour?.tour?.img} className="img-fluid" alt="" />
                    </div>
                    <div className="product-content">
                    <p className="title">{tour?.tour?.tour_name}</p>
                    </div>
                </div>

                <div className="go-tour">
                    <div className="start">
                    <i className='bx bx-current-location'></i>
                    <div className="start-content">
                        <h4>Bắt đầu chuyến đi</h4>
                        <p className="time">{tour?.tour?.start_date}</p>
                        <p className="from"></p>
                    </div>
                    </div>
                    <div className="end">
                    <i className='bx bx-current-location'></i>
                    <div className="start-content">
                        <h4 style={{ marginBottom: '0px' }}>Kết thúc chuyến đi</h4>
                        <p className="time">{tour?.tour?.end_date}</p>
                        <p className="from"></p>
                    </div>
                    </div>
                </div>

                <div className="detail">
                    <table>
                        <thead>
                            <tr>
                            <th className="l1" style={{ textAlign: 'left' }}>
                                <i className="bx bx-group" id="AmoutPerson"></i>
                                Hành khách
                            </th>
                            <th className="l2 text-right">
                                <span className="total-booking">{tour?.tour?.price}</span>
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="detail">
                            <td>Người lớn</td>
                            <td className="t-price text-right">{adultsArray?.length} x {tour?.tour?.price}</td>
                            </tr>

                            {childrenArray?.length > 0 && (
                            <tr className="detail">
                                <td>Trẻ em</td>
                                <td className="t-price text-right">{childrenArray?.length} x {tour?.tour?.price}</td>
                            </tr>
                            )}

                            {young_childsArray?.length > 0 && (
                            <tr className="detail">
                                <td>Trẻ nhỏ</td>
                                <td className="t-price text-right">{young_childsArray?.length} x {tour?.tour?.price}</td>
                            </tr>
                            )}

                            {babysArray.length > 0 && (
                            <tr className="detail">
                                <td>Em bé</td>
                                <td className="t-price text-right">{babysArray?.length} x {tour?.tour?.price}</td>
                            </tr>
                            )}

                            <tr className="total">
                            <td>Tổng tiền </td>
                            <td className="t-price text-right">{total}</td>
                            </tr>
                        </tbody>
                    </table>

                    <button className="btn btn-primary btn-order" onClick={handleBothSubmits}>Đặt ngay</button>
                    
                    {!isFormValid && <div className="error-message">Please correct the errors in the form.</div>}

                </div>

            </div>
        </>
    )
}

export default CheckoutPmComponent;