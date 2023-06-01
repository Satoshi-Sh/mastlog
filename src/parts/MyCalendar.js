import { useState, useEffect } from "react";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./MyCalendar.css";
import { useNavigate } from "react-router-dom";

function MyCalendar() {
  const [first, setFirst] = useState(true);
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Note: Months are zero-based, so add 1
    const day = date.getDate();
    const dateString = `${year}-${month}-${day}`;
    console.log(dateString);
    if (first) {
      setFirst(false);
    } else {
      navigate(`/date/${dateString}`);
    }
  }, [date]);

  return (
    <div className="calendar-div">
      <div className="calendar-container">
        <Calendar
          onChange={setDate}
          selectRange={false}
          value={date}
          maxDate={new Date()} // will not allow date later than today
          minDate={new Date(2023, 4, 25)}
        />
      </div>
    </div>
  );
}

export default MyCalendar;
