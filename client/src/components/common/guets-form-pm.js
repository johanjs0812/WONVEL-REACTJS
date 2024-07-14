const GuetsFormPmComponent = ({ guestCounts, onIncrement, onDecrement }) => {
    return(
        <>
            <div className="customer">
                <h3>Hành khách</h3>

                <div className="change">
                    <div className="change-title">
                        <h4>Người lớn</h4>
                        <p>Từ 12 tuổi</p>
                    </div>
                    <div className="change-number">
                        <span className="minus btn-click" onClick={() => onDecrement('adult')}><i className="bx bx-minus-circle" id="adultMinus"></i></span>
                        <span className="number" id="adult">{guestCounts.adult}</span>
                        <span className="plus btn-click" onClick={() => onIncrement('adult')}><i className="bx bx-plus-circle" id="adultPlus"></i></span>
                    </div>
                </div>

                <div className="change">
                    <div className="change-title">
                        <h4>Trẻ em</h4>
                        <p>Từ 5 - 11 tuổi</p>
                    </div>
                    <div className="change-number">
                        <span className="minus btn-click" onClick={() => onDecrement('child')}><i className="bx bx-minus-circle" id="childrenMinus"></i></span>
                        <span className="number" id="children">{guestCounts.child}</span>
                        <span className="plus btn-click" onClick={() => onIncrement('child')}><i className="bx bx-plus-circle" id="childrenPlus"></i></span>
                    </div>
                </div>

                <div className="change">
                    <div className="change-title">
                        <h4>Trẻ nhỏ</h4>
                        <p>Từ 2 - 4 tuổi</p>
                    </div>
                    <div className="change-number">
                        <span className="minus btn-click" onClick={() => onDecrement('youngChild')}><i className="bx bx-minus-circle" id="smallchildrenMinus"></i></span>
                        <span className="number" id="smallchildren">{guestCounts.youngChild}</span>
                        <span className="plus btn-click" onClick={() => onIncrement('youngChild')}><i className="bx bx-plus-circle" id="smallchildrenPlus"></i></span>
                    </div>
                </div>

                <div className="change">
                    <div className="change-title">
                        <h4>Em bé</h4>
                        <p>Từ 0 - 2 tuổi</p>
                    </div>
                    <div className="change-number">
                        <span className="minus btn-click" onClick={() => onDecrement('baby')}><i className="bx bx-minus-circle" id="babyMinus"></i></span>
                        <span className="number" id="baby">{guestCounts.baby}</span>
                        <span className="plus btn-click" onClick={() => onIncrement('baby')}><i className="bx bx-plus-circle" id="babyPlus"></i></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GuetsFormPmComponent;