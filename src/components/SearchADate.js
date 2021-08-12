import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

    

function SearchADate () {

  const[selectedDate, setSelectedDate] = useState(null)
  return (
    <div>
      <DatePicker 
        selected={selectedDate} 
        onChange={date => setSelectedDate(date)}
        dateFormat='yyyy-MM-dd'
        maxDate={new Date()}
        isClearable
        showYearDropdown
        scrollableMonthYearDropdown
      />
    </div>
  )
}

export default SearchADate


// const searchDate = new Date()
//     searchDate.toISOString().split('T')[0]