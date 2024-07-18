import ContactFormPmComponent from "./contact-form-pm";
import GuetsFormPmComponent from "./guets-form-pm";
import QuyDinhTuoiTacComponent from "./quydinh-tuoi-tac-pm";
import AdultFormPmComponent from "./adult-form-pm";
import ChildFormPmComponent from "./child-form-pm";
import YoungChildFormPmComponent from "./youngchild-form-pm";
import BabyFormPmComponent from "./baby-form-pm";

import useGuestCounts from "../../hooks/useGuestCounts";

import React, { useEffect } from 'react';

const TongQuanTourPmComponent = ({    
        forms1,
        handleChange1,
        handleSubmitForm1,
        updateForms1,

        forms2,
        handleChange2,
        handleSubmitForm2,
        updateForms2,

        forms3,
        handleChange3,
        handleSubmitForm3,
        updateForms3,

        forms4,
        handleChange4,
        handleSubmitForm4,
        updateForms4,

        receiveFormData1,
        receiveFormData2,
        receiveFormData3,
        receiveFormData4,

        page
    }) => {

    const { guestCounts, increment, decrement } = useGuestCounts();
    const { adult: adultCount } = guestCounts;
    const { child: childCount } = guestCounts;
    const { youngChild: youngChildCount } = guestCounts;
    const { baby: babyCount } = guestCounts;

    useEffect(() => {
        updateForms1(adultCount);
        updateForms2(childCount);
        updateForms3(youngChildCount);
        updateForms4(babyCount);
    }, [adultCount, childCount, youngChildCount, babyCount]);

    const handleSubmit1 = (formData) => {
        receiveFormData1(formData);
        handleSubmitForm1(formData);
    };

    const handleSubmit2 = (formData) => {
        receiveFormData2(formData);
        handleSubmitForm2(formData);
    };

    const handleSubmit3 = (formData) => {
        receiveFormData3(formData);
        handleSubmitForm3(formData);
    };

    const handleSubmit4 = (formData) => {
        receiveFormData4(formData);
        handleSubmitForm4(formData);
    };

    return (
        <>
            <div className="payment-infor" style={{ display: page === 'inf' ? 'block' : 'none' }}>
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
                    < AdultFormPmComponent 
                        forms={forms1}
                        handleChange={handleChange1}
                        handleSubmit={handleSubmit1}
                    />
                    < ChildFormPmComponent 
                        forms={forms2}
                        handleChange={handleChange2}
                        handleSubmit={handleSubmit2}
                    />
                    < YoungChildFormPmComponent 
                        forms={forms3}
                        handleChange={handleChange3}
                        handleSubmit={handleSubmit3}
                    />
                    < BabyFormPmComponent 
                        forms={forms4}
                        handleChange={handleChange4}
                        handleSubmit={handleSubmit4}
                    />
                </section>
            </div>
        </>
    )
}

export default TongQuanTourPmComponent;