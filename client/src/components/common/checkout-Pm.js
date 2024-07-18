import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import formatDate from "../../helpers/formatTime";
import formatCurrency from '../../helpers/formatVnd';
import { countAge } from '../../helpers/countAge';
import { removeDuplicatesAge } from '../../helpers/removeDuplicatesAge';
import { generateInvoiceNumber } from '../../helpers/generateInvoiceNumber ';
import cvArrayGuets from '../../helpers/cvArrayGuets';

import useBooking from '../../hooks/bookingApi';
import useInvoices from '../../hooks/invoicesApi';
import useGuets from '../../hooks/guetsApi';

import { addbooking, addinvoices, addguets2, addContact } from '../../redux/slices/paymentSlice';

const CheckoutPmComponent = ({
    data, handleSubmitContact, isFormValid, 
    handleSubmit1, handleSubmit2, handleSubmit3, handleSubmit4,
    formData1, formData2, formData3, formData4,
    page }) => {

    const tour = data;

    const paymentState = useSelector((state) => state.payment);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const { id } = useParams();

    const [agues, setAgues] = useState({});
    const [total, setTotal] = useState(tour.tour?.price);
    const [shouldCallAPI, setShouldCallAPI] = useState(false);

    const { book} = useBooking();
    const { add: themhoadon } = useInvoices();
    const { add: themlisthanhkhach } = useGuets();

    const handleAllSubmit = () => {
        handleSubmit1(formData1);
        handleSubmit2(formData2);
        handleSubmit3(formData3);
        handleSubmit4(formData4);
    };
    
    const handleBothSubmits = () => {
        handleAllSubmit();
        handleSubmitContact();
    };

    const paymentNow = async () => {
        if (paymentState.contact && paymentState.guets.length > 0 && paymentState.method) {
            const mangcuoicung = removeDuplicatesAge(paymentState.guets);
            setAgues(countAge(mangcuoicung));
            setShouldCallAPI(true);
        }
    };
    
    useEffect(() => {
        const kq = ((agues.ag_1 || 0) + (agues.ag_2 || 0) + (agues.ag_3 || 0) + (agues.ag_4 || 0)) * (tour.tour?.price || 0);
        setTotal(kq);
    }, [agues, tour]);

    useEffect(() => {
        setTotal(tour.tour?.price || 0);
    }, [tour]);

    useEffect(() => {
        if (shouldCallAPI) {

            const storedUserLogin = sessionStorage.getItem('user_login');
            let sessionObject = {};
                if (storedUserLogin) {
                sessionObject = JSON.parse(storedUserLogin);
                dispatch(addContact(sessionObject));
            }

            let annatiensinh = total;
            let lieuphungtien = (agues.ag_1 || 0) + (agues.ag_2 || 0) + (agues.ag_3 || 0) + (agues.ag_4 || 0);
            // console.log('558', annatiensinh, lieuphungtien);

            const booking = {
                user_id: sessionObject.id,
                tour_id: parseInt(id, 10),
                booking_date: new Date().toLocaleDateString('vi-VN'),
                num_of_people: lieuphungtien,
                total_price: annatiensinh * lieuphungtien,
                payment_status: 1,
                code: generateInvoiceNumber()
            };

            (async () => {
                try {
                    console.log('aysn', booking)
                    const booking_added = await book(booking);
                    // console.log('Booking successful:', booking_added);
                    dispatch(addbooking(booking_added));

                    const mangcuoicung = removeDuplicatesAge(paymentState.guets);
                    const ggArray = cvArrayGuets(mangcuoicung, booking_added.id);
                    const hanhkhach = await themlisthanhkhach(ggArray);
                    // console.log('add guets successful', hanhkhach);
                    dispatch(addguets2(hanhkhach));

                    const invoices = {
                        booking_id: booking_added.id,
                        invoice_date: new Date().toLocaleDateString('vi-VN'),
                        total_amount: booking_added.total_price,
                        payment_method: "Thanh toán chuyển khoản"
                    };
                    const hoadondathem = await themhoadon(invoices);
                    // console.log('hoa don da them', hoadondathem);
                    dispatch(addinvoices(hoadondathem));

                    navigate('/payment');
                } catch (error) {
                    console.error('Booking failed:', error);
                }
            })();
        
                setShouldCallAPI(false); // Đặt lại cờ để không gọi API lần nữa
        }
      }, [total, shouldCallAPI]);

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
                        <p className="time">{formatDate(tour?.tour?.start_date)}</p>
                        <p className="from"></p>
                    </div>
                    </div>
                    <div className="end">
                    <i className='bx bx-current-location'></i>
                    <div className="start-content">
                        <h4 style={{ marginBottom: '0px' }}>Kết thúc chuyến đi</h4>
                        <p className="time">{formatDate(tour?.tour?.end_date)}</p>
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
                                <span className="total-booking">{formatCurrency(tour?.tour?.price)}/người</span>
                            </th>
                            </tr>
                        </thead>

                        <tbody>
                            {agues.ag_1 > 0 && (
                            <tr className="detail">
                                <td>Người lớn</td>
                                
                                <td className="t-price text-right">{agues.ag_1} x {formatCurrency(tour?.tour?.price)}</td>
                            </tr>
                            )}

                            {agues.ag_2 > 0 && (
                            <tr className="detail">
                                <td>Trẻ em</td>
                                <td className="t-price text-right">{agues.ag_2} x {formatCurrency(tour?.tour?.price)}</td>
                            </tr>
                            )}

                            {agues.ag_3 > 0 && (
                            <tr className="detail">
                                <td>Trẻ nhỏ</td>
                                <td className="t-price text-right">{agues.ag_3} x {formatCurrency(tour?.tour?.price)}</td>
                            </tr>
                            )}

                            {agues.ag_4 > 0 && (
                            <tr className="detail">
                                <td>Em bé</td>
                                <td className="t-price text-right">{agues.ag_4} x {formatCurrency(tour?.tour?.price)}</td>
                            </tr>
                            )}

                            <tr className="total" >
                                <td>Tổng tiền </td>
                                <td className="t-price text-right">{formatCurrency(total)}</td>
                            </tr>

                        </tbody>
                    </table>

                    {!isFormValid && <div className="error-message" style={{color:"red", marginBottom:"5px"}}>Vui lòng điền chính xác tất cả các thông tin theo yêu cầu.</div>}
                    <button className="btn btn-primary btn-order" onClick={handleBothSubmits} style={{ display: page === 'inf' ? 'flex' : 'none' }}>Đặt ngay</button>   

                    <button className="btn btn-primary btn-order" onClick={paymentNow} style={{ display: page === 'method' ? 'flex' : 'none' }}>Thanh toán</button>   

                </div>

            </div>
        </>
    )
}

export default CheckoutPmComponent;