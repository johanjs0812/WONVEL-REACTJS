import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import DieuKhoanDangKyPmComponent from "./dieu-khoan-dang-ky";
import HinhThucThanhToanPmComponent from "./hinh-thuc-thanh-toan";

import { addMethod } from '../../redux/slices/paymentSlice';

const PaymentMethodComponent = ({page}) => {
    const [selectedPaymentType, setSelectedPaymentType] = useState('Thanh toán tiền mặt');
    const [dongydieukienchua, setdongydieukienchua] = useState(false);

    const handlePaymentTypeChange = (value) => {
        setSelectedPaymentType(value);
        console.log('Đã chọn hình thức thanh toán:', value);
    };

    const dongychua = (value) => {
        setdongydieukienchua(value);
    }

    const dispatch = useDispatch();
    const paymentState = useSelector((state) => state.payment);

    useEffect(() => {
        dispatch(addMethod(selectedPaymentType));
        if (dongydieukienchua) {
            dispatch(addMethod(selectedPaymentType));
        }
    }, [dongydieukienchua, selectedPaymentType])

    return (
        <>
            <div className="payment-method" style={{ display: page === 'method' ? 'block' : 'none' }}>

                <h2 className="d-none d-lg-block">Thanh toán</h2>

                < HinhThucThanhToanPmComponent onPaymentTypeChange={handlePaymentTypeChange} />
                < DieuKhoanDangKyPmComponent dongychua={dongychua}/>

            </div>
        </>
    )
}

export default PaymentMethodComponent;