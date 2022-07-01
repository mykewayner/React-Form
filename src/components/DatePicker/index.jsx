import React from 'react'
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './index.css';

export default function TableDatePicker() {
    const [date, setDate] = useState(null);
   
    return (
      <div className='Div'>
        <label>Birthdate*</label>
        <DatePicker
          ClassName="datePicker"
          placeholderText="yyyy/mm/dd"
          dateFormat="yyyy/MM/dd"
          selected={date}
          required={true}
          minDate={new Date("1900-01-01")} 
          maxDate={new Date()}
          onChange={date => setDate(date)}
        />
      </div>
    )
   }


