const ChildFormPmComponent = ({childCount}) => {

    const Indexes = Array.from({ length: childCount }, (_, index) => index);

    return(
        <>
            <div className="group-fields-input-contact-children group-fields-input-contact-wrapper mb-3">
                <div className="title-persona" style={{display: Indexes.length === 0 ? "none" : "block"}}>
                    <img src="https://travel.com.vn/images/icons/persons/child.svg" alt="Trẻ em" />Trẻ em
                </div>

                {Indexes.map((i) => (
                <div className="row" key={i}>
                    <div className="col-lg-3 col-12" style={{ width: '43%' }}>
                        <div className="form-group">
                        <label className="pb-1 font-700">Họ và tên <span className="text-danger">*</span></label>
                        <input type="text" className="form-control fullName hotel-flight-input" placeholder="Nhập họ tên" name="fullName" />
                        <div className="errorform error-notes">Vui lòng nhập thông tin</div>
                        </div>
                    </div>

                    <div className="col-lg-2 col-12" style={{ width: '16%' }}>
                        <div className="form-group select-custom-icon">
                        <label className="pb-1 white-space-nowrap">Giới tính <span className="text-danger">*</span></label>
                        <select className="form-control title title-gender hotel-flight-input" name="gender">
                            <option value="Nam">Nam</option>
                            <option value="Nữ">Nữ</option>
                        </select>
                        </div>
                    </div>

                    <div className="col-lg-5 col-12" style={{ width: '41%' }}>
                        <div className="row">
                        <div className="col-sm-4 col-4 mt-sm-0" style={{ width: '33%', marginTop: 0 }}>
                            <div className="form-group select-custom-icon">
                            <label className="pb-1 white-space-nowrap font-700">Ngày sinh <span className="text-danger">*</span></label>
                            <select className="form-control birth-date hotel-flight-input" name="dayOfMonth">
                                <option value="">Ngày</option>
                                {/* {days.map((day, index) => (
                                <option key={index} value={day}>{day}</option>
                                ))} */}
                            </select>
                            </div>
                        </div>

                        <div className="col-sm-4 col-4 mt-sm-0" style={{ width: '33%' }}>
                            <div className="form-group select-custom-icon">
                            <label className="pb-1">&nbsp;</label>
                            <select className="form-control birth-month hotel-flight-input" name="monthOfYear">
                                <option value="">Tháng</option>
                                {/* {months.map((month, index) => (
                                <option key={index} value={month}>{month}</option>
                                ))} */}
                            </select>
                            </div>
                        </div>

                        <div className="col-sm-4 col-4 mt-sm-0" style={{ width: '33%' }}>
                            <div className="form-group select-custom-icon">
                            <label className="pb-1">&nbsp;</label>
                            <select className="form-control birth-year hotel-flight-input" name="year">
                                <option value="">Năm</option>
                                {/* {years.map((year, index) => (
                                <option key={index} value={year}>{year}</option>
                                ))} */}
                            </select>
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

export default ChildFormPmComponent;