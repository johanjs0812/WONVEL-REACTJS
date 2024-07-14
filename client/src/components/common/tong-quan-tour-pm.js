import ContactFormPmComponent from "./contact-form-pm";
import GuetsFormPmComponent from "./guets-form-pm";
import QuyDinhTuoiTacComponent from "./quydinh-tuoi-tac-pm";
import AdultFormPmComponent from "./adult-form-pm";
import ChildFormPmComponent from "./child-form-pm";
import YoungChildFormPmComponent from "./youngchild-form-pm";
import BabyFormPmComponent from "./baby-form-pm";

import useGuestCounts from "../../hooks/useGuestCounts";

import React, { useState } from 'react';

const TongQuanTourPmComponent = () => {

    const { guestCounts, increment, decrement } = useGuestCounts();
    const { adult: adultCount } = guestCounts;
    const { child: childCount } = guestCounts;
    const { youngChild: youngChildCount } = guestCounts;
    const { baby: babyCount } = guestCounts;

    return (
        <>
            <div className="payment-infor">
                <h2 className="d-none d-lg-block">Tổng quan về chuyến đi</h2>
                <h3>Thông tin liên lạc</h3>

                < ContactFormPmComponent  />
                < GuetsFormPmComponent
                    guestCounts={guestCounts}
                    onIncrement={increment}
                    onDecrement={decrement}          
                />
                < QuyDinhTuoiTacComponent />

                <section className="wrap-info-customer-number-person-details mt-4 wrapper-new-input">
                    <div className="title-section mb-3 title-hotel-flight-infor" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>Thông tin hành khách</span>
                        <span id="alert" style={{ color: 'red', fontSize: '13px', fontWeight: '400' }}>
                            Tối thiểu phải có 1 hành khách!
                        </span>
                    </div>
                    < AdultFormPmComponent adultCount={adultCount} />
                    < ChildFormPmComponent childCount={childCount} />
                    < YoungChildFormPmComponent youngChildCount={youngChildCount} />
                    < BabyFormPmComponent babyCount={babyCount} />
                </section>
            </div>
        </>
    )
}

export default TongQuanTourPmComponent;