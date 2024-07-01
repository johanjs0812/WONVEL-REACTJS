import React, { useState, useEffect  } from 'react';
import { TOUR_GET_START_DATE } from "../../constants/apiConfig";
import { formatDateFT } from "../../helpers/formatDataPicker";

import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const MaterialDatePicker = ({FILTER, name, onClick, choose, owner}) => {
  
    const [selectedDate, setSelectedDate] = useState(dayjs().startOf('day'));

    useEffect(() => {
      if (owner === name) {
        setSelectedDate(choose);
      }
    }, [owner, name, choose]);

    const handleDateChange = (newDate) => {
      if (newDate) {

        // console.log('jp',newDate.$d);

        const date = formatDateFT(newDate.$d);
        console.log(newDate.$d, date)
        FILTER(`${TOUR_GET_START_DATE}${date}`);

        setSelectedDate(newDate);
        onClick(newDate, name);
      }
    };
  
    const DateCss = () => {
      return (
        <style> 
        { `
          .MuiFormControl-root.MuiTextField-root.css-z3c6am-MuiFormControl-root-MuiTextField-root
          {
          //  visibility:hidden;
          }
    
          .MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputAdornedEnd.css-nxo287-MuiInputBase-input-MuiOutlinedInput-input{
            padding: 0px;
    
          }
    
          .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-formControl.MuiInputBase-adornedEnd.css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root{
          padding: 0px;
          }
    
          .MuiInputAdornment-root.MuiInputAdornment-positionEnd.MuiInputAdornment-outlined.MuiInputAdornment-sizeMedium.css-1laqsz7-MuiInputAdornment-root{
          display:none;
          }
    
          .MuiOutlinedInput-notchedOutline.css-1d3z3hw-MuiOutlinedInput-notchedOutline{
            display:none;
          }
    
    
    
        `}
    
        </style>
      )
    }
  
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        < DateCss />
        <DatePicker
          value={selectedDate} 
          onChange={handleDateChange}
          format="DD/MM/YYYY"
        />
      </LocalizationProvider>
    );
  
  }
  
  export default MaterialDatePicker;