import MaterialDatePicker from "./materialDataPicker";

const DateButton = () =>{
    const btn = document.querySelector("button.MuiButtonBase-root");
    if (btn) {
        btn.click();
    }
}

const DayStartFilter = ({FILTER, name, onClick, choose, owner}) => {

    return (
        <>
        
        <div className="tour-search-result__filter__block">
            <h5 className="date-go-to-back-title s-title">Ngày đi</h5>

            <div className="datepciker-wrap" style={{cursor:"pointer"}} onClick={DateButton}>
                <i className='bx bxs-calendar-week'></i>
                <div className="calendarWrap bg-transparent" style={{ overflow: 'hidden' }}>

                <div className='MaterialDataPicker' >
                    < MaterialDatePicker
                        FILTER={FILTER} 
                        name={name}
                        onClick={onClick}
                        choose={choose}
                        owner={owner}           
                    />
                </div>
                
                </div>
            </div>

        </div>
        
        </>
    )

}

export default DayStartFilter;