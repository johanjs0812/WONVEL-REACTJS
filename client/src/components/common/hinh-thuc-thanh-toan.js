import React, { useState, useEffect } from 'react';

const HinhThucThanhToanPmComponent = ({ onPaymentTypeChange }) => {
    const [selectedPaymentType, setSelectedPaymentType] = useState("Thanh toán tiền mặt");

    const handlePaymentTypeChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedPaymentType(selectedValue);
    };

    useEffect(() => {
        onPaymentTypeChange(selectedPaymentType);
    }, [selectedPaymentType])

    return (
        <>
            <div className="payments-warp">
                <h3>Các hình thức thanh toán</h3>
                <div className="payments" style={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
                    <div className="payment-item" style={{ width: "50%" }}>
                        <div className="pm-head">
                            <div className="pm-head-icon">
                                <i className='bx bx-money'></i>
                                <h4>Tiền mặt</h4>
                            </div>
                            <input
                                className="check"
                                type="radio"
                                name="payment-type"
                                value="Thanh toán tiền mặt"
                                checked={selectedPaymentType === "Thanh toán tiền mặt"}
                                onChange={handlePaymentTypeChange}
                            />
                        </div>
                    </div>
                    <div className="payment-item" style={{ width: "50%" }}>
                        <div className="pm-head">
                            <div className="pm-head-icon">
                                <i className='bx bxs-bank'></i>
                                <h4>Chuyển khoản</h4>
                            </div>
                            <input
                                className="check"
                                type="radio"
                                name="payment-type"
                                value="Thanh toán chuyển khoản"
                                checked={selectedPaymentType === "Thanh toán chuyển khoản"}
                                onChange={handlePaymentTypeChange}
                            />
                        </div>
                    </div>
                    <div className="payment-item" style={{ width: "50%" }}>
                        <div className="pm-head">
                            <div className="pm-head-icon">
                                <i className='bx bx-credit-card-alt'></i>
                                <h4>Thẻ tín dụng</h4>
                            </div>
                            <input
                                className="check"
                                type="radio"
                                name="payment-type"
                                value="Thanh toán thẻ tín dụng"
                                checked={selectedPaymentType === "Thanh toán thẻ tín dụng"}
                                onChange={handlePaymentTypeChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HinhThucThanhToanPmComponent;
