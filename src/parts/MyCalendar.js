import { useState, useEffect } from "react";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./MyCalendar.css";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../utils/const";
import moment from "moment";
import "moment-timezone";

function MyCalendar() {
  const [first, setFirst] = useState(true);
  const [date, setDate] = useState(new Date());
  const [enabledDates, setEnabledDates] = useState([]);
  const navigate = useNavigate();

  // get available date from the database
  useEffect(() => {
    fetch(`${API_URL}/available`)
      .then((response) => response.json())
      .then((data) => {
        const dates = data.map((entry) =>
          moment.tz(entry._id.day, "Etc/UTC").toDate()
        );
        setEnabledDates(dates);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  useEffect(() => {
    if (first) {
      setFirst(false);
      // get disabled date for the calendar
    } else {
      const year = date.getFullYear();
      const month = date.getMonth() + 1; // Note: Months are zero-based, so add 1
      const day = date.getDate();
      const dateString = `${year}-${month}-${day}`;
      navigate(`/date/${dateString}`);
    }
  }, [date]);
  const minDate = new Date(2023, 4, 25);
  const maxDate = new Date();

  const isDateEnabled = (date) => {
    // Check if date is within the allowed range
    if (date >= minDate && date <= maxDate) {
      // Check if date is in the enabledDates array
      return enabledDates.some((enabledDate) => isSameDay(date, enabledDate));
    }
    return false;
  };

  const tileDisabled = ({ date }) => {
    return !isDateEnabled(date);
  };
  const isSameDay = (date1, date2) => {
    const utcDate1 = moment(date1).utc();
    const utcDate2 = moment(date2).utc();
    return (
      utcDate1.date() === utcDate2.date() &&
      utcDate1.month() === utcDate2.month() &&
      utcDate1.year() === utcDate2.year()
    );
  };

  return (
    <div className="calendar-div">
      <div className="calendar-container">
        <Calendar
          onChange={setDate}
          selectRange={false}
          value={date}
          tileDisabled={tileDisabled}
          maxDate={maxDate} // will not allow date later than today
          minDate={minDate}
        />
      </div>
    </div>
  );
}

export default MyCalendar;
