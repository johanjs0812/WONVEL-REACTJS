import React from 'react';
import { YEARS, DAYS, MONTHS } from '../../constants/date';

const ChildFormPmComponent = ({forms, handleChange }) => {

    return (
        <>
            <div className="group-fields-input-contact-adult group-fields-input-contact-wrapper mb-3">
                <div  style={{display: forms.length === 0 ? "none" : "block"}}>
                    {/* <img src="https://travel.com.vn/images/icons/persons/child.svg" alt="Người lớn" />Em bé */}
                    <div style={{fontWeight: "bold", color:"orange"}}>
                       (Trẻ em)
                    </div>
                </div>

                {forms.map((form, index) => (
                    <form className="row" key={index}>
                        <div className="col-lg-3 col-12" style={{ width: '43%' }}>
                        <div className="form-group">
                            <label className="pb-1 font-700">Họ và tên <span className="text-danger">*</span></label>
                            <input
                            type="text"
                            className="form-control fullName hotel-flight-input"
                            placeholder="Nhập họ tên"
                            name="fullName"
                            value={form.fullName}
                            onChange={(e) => handleChange(index, 'fullName', e.target.value)}
                            />
                            {form.errors.fullName && <div className="errorform error-notes">{form.errors.fullName}</div>}
                        </div>
                        </div>

                        <div className="col-lg-2 col-12" style={{ width: '16%' }}>
                        <div className="form-group select-custom-icon">
                            <label className="pb-1 white-space-nowrap">Giới tính <span className="text-danger">*</span></label>
                            <select
                            className="form-control title title-gender hotel-flight-input"
                            name="gender"
                            value={form.gender}
                            onChange={(e) => handleChange(index, 'gender', e.target.value)}
                            >
                            <option value="">Giới tính</option>
                            <option value="Nam">Nam</option>
                            <option value="Nữ">Nữ</option>
                            </select>
                            {form.errors.gender && <div className="errorform error-notes">{form.errors.gender}</div>}
                        </div>
                        </div>

                        <div className="col-lg-5 col-12" style={{ width: '41%' }}>
                        <div className="row">
                            <div className="col-sm-4 col-4 mt-sm-0" style={{ width: '33%', marginTop: 0 }}>
                            <div className="form-group select-custom-icon">
                                <label className="pb-1 white-space-nowrap font-700">Ngày sinh <span className="text-danger">*</span></label>
                                <select
                                className="form-control birth-date hotel-flight-input"
                                name="dayOfMonth"
                                value={form.dayOfMonth}
                                onChange={(e) => handleChange(index, 'dayOfMonth', e.target.value)}
                                >
                                <option value="">Ngày</option>
                                {DAYS.map((day, dayIndex) => (
                                    <option key={dayIndex} value={day}>{day}</option>
                                ))}
                                </select>
                                {form.errors.dayOfMonth && <div className="errorform error-notes">{form.errors.dayOfMonth}</div>}
                            </div>
                            </div>

                            <div className="col-sm-4 col-4 mt-sm-0" style={{ width: '33%' }}>
                            <div className="form-group select-custom-icon">
                                <label className="pb-1">&nbsp;</label>
                                <select
                                className="form-control birth-month hotel-flight-input"
                                name="monthOfYear"
                                value={form.monthOfYear}
                                onChange={(e) => handleChange(index, 'monthOfYear', e.target.value)}
                                >
                                <option value="">Tháng</option>
                                {MONTHS.map((month, monthIndex) => (
                                    <option key={monthIndex} value={month}>{month}</option>
                                ))}
                                </select>
                                {form.errors.monthOfYear && <div className="errorform error-notes">{form.errors.monthOfYear}</div>}
                            </div>
                            </div>

                            <div className="col-sm-4 col-4 mt-sm-0" style={{ width: '33%' }}>
                            <div className="form-group select-custom-icon">
                                <label className="pb-1">&nbsp;</label>
                                <select
                                className="form-control birth-year hotel-flight-input"
                                name="year"
                                value={form.year}
                                onChange={(e) => handleChange(index, 'year', e.target.value)}
                                >
                                <option value="">Năm</option>
                                {YEARS.map((year, yearIndex) => (
                                    <option key={yearIndex} value={year}>{year}</option>
                                ))}
                                </select>
                                {form.errors.year && <div className="errorform error-notes">{form.errors.year}</div>}
                            </div>
                            </div>
                        </div>
                        </div>
                    </form>
                ))}
            </div>
        </>
    );
};

export default ChildFormPmComponent;
