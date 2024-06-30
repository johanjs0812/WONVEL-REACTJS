const TimeDayTravelFilter = ({buttons1}) => {
    return (
        <> 
        
        <div className="tour-search-result__filter__block">
            <h5 className="s-title">Số ngày</h5>

            <div className="btn-group tour-search-result__filter__room" style={{ width: '100%' }}>
                <div className="row" style={{ margin: '0', width: '100%' }}>
                {buttons1.map((button, index) => (
                    <div key={index} className="col-6" style={{ backgroundColor: 'rgb(255, 255, 255)', color: 'rgb(33, 37, 41)' }}>
                    <button style={{ cursor: 'pointer' }} className='btn-stitll'>
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

export default TimeDayTravelFilter;