import React, { useState, useEffect } from 'react';
import { TOUR_GET_PRICE_RANGE } from "../../constants/apiConfig";

const BudgeFilter = ({ FILTER, name, onClick, choose, owner }) => {
    const [minValue, setMinValue] = useState('');
    const [maxValue, setMaxValue] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        if (owner === name) {
            setMinValue(choose.min);
            setMaxValue(choose.max);
        }
    }, [owner, name, choose]);

    const handleSearch = () => {
        const min = Number(minValue);
        const max = Number(maxValue);

        if (!minValue && !maxValue) {
            setError('Vui lòng nhập mức giá cần tìm.');
            return;
        }

        if (maxValue && min > max) {
            setError('Giá trị max phải lớn hơn giá trị min.');
            return;
        }

        setError(false);

        const double = {
            min: min,
            max: max
        };

        FILTER(`${TOUR_GET_PRICE_RANGE}${min}/${max}`);
        onClick(double, name);
    };

    return (
        <>
            <h5 className="s-title">Ngân sách của Quý khách</h5>

            <div className="ranger-price giatien" style={{ marginBottom: '0' }}>

                <div style={{ display: 'flex', alignItems: 'center', columnGap: '20px' }}>

                    <div className="btn-price" style={{ borderColor: error ? 'red' : 'initial' }}>
                        <input
                            type="number"
                            placeholder="Từ"
                            value={minValue}
                            onChange={(e) => setMinValue(e.target.value)}    
                        />                
                    </div>

                    <div>-</div>

                    <div className="btn-price" style={{ borderColor: error ? 'red' : 'initial' }}>
                        <input
                            type="number"
                            placeholder="Đến"
                            value={maxValue}
                            onChange={(e) => setMaxValue(e.target.value)}
                        />
                    </div>

                    <div className="box-btn-se">
                        <button onClick={handleSearch}>Tìm</button>
                    </div>
                </div>

            </div>

            <p style={{color: 'red', fontSize: '12px', marginTop: '5px'}}>{error}</p>

            </>
    )
}

export default BudgeFilter;
