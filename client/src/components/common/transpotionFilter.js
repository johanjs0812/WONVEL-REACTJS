const TranspostionFilter = ({buttons2}) => {
    return (
        <>
        
        <div className="tour-search-result__filter__block" style={{ marginBottom: '0 !important' }}>
            <h5 className="s-title" > Thông tin vận chuyển </h5>

            <div className="btn-group tour-search-result__filter__room" style={{ width: '100%' }}>
                <div className="row" style={{ margin: '0', width: '100%' }}>
                {buttons2.map((button, index) => (
                    <div key={index} className="col-6" style={{ backgroundColor: 'rgb(255, 255, 255)', color: 'rgb(33, 37, 41)' }}>
                    <button style={{ cursor: 'pointer' }} className="btn-stitll">
                        {button}
                    </button>
                    </div>
                ))}
                </div>
            </div>
        </div>

        </>
    )
}

export default TranspostionFilter;