const StartLocationFilter = ({tinh}) => {
    return (
        <>
        
        <div className="start-to-stop">

            <h5 className="point-start-title s-title">Điểm đến</h5>

            <div className="css-b62m3t-container" style={{ position: 'relative' }}>
            <div className="css-13cymwt-control" style={{ cursor: 'pointer' }}>
                <div className="css-hlgwow">
                <div className="css-1dimb5e-singleValue">Tất cả</div>
                <div className="css-19bb58m">
                    <input className="" id="react-select-6-input" 
                    style={{ color: 'inherit', background: '0px center', opacity: 0, width: '100%', gridArea: '1 / 2', font: 'inherit', minWidth: '2px', border: '0px', margin: '0px', outline: '0px', padding: '0px' }} />
                </div>
                </div>
                <div className="css-1wy0on6">
                <div className="css-1xc3v61-indicatorContainer">
                    <i className='bx bx-chevron-down'></i>
                </div>
                </div>
            </div>
            <div className="box-select-loaction-go">
                <div className="option-local">Tất cả</div>
                {tinh.map((destination, index) => (
                <div key={index} className="option-local">{destination}</div>
                ))}
            </div>
            </div>

        </div>

        </>
    )
}

export default StartLocationFilter;