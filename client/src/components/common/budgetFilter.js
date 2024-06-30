const BudgeFilter = () => {
    return (
        <>
        <h5 className="s-title">Ngân sách của Quý khách</h5>

        <div className="ranger-price giatien" style={{ marginBottom: '0' }}>

            <div style={{ display: 'flex', alignItems: 'center', columnGap: '20px' }}>
                <div className="btn-price">
                <input type="number" placeholder="Từ" />
                </div>
                <div>-</div>
                <div className="btn-price">
                <input type="text" placeholder="Đến"  />
                </div>
                <div className="box-btn-se" >
                <button>Tìm</button>
                </div>
            </div>

        </div>

        </>
    )
}

export default BudgeFilter;