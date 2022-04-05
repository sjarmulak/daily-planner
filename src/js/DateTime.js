import React, { useState, useEffect } from "react";
import "../scss/DateTime.scss";
import Clock from "./Clock";

export default function DateTime() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const updateClock = () => {
      setDate(new Date());
    };
    const Timer = setInterval(() => updateClock(), 1000);
  }, []);

  const weekday = (day) => {
    switch (day) {
      case 1:
        return "monday";
      case 2:
        return "tuesday";
      case 3:
        return "wednesday";
      case 4:
        return "thursday";
      case 5:
        return "friday";
      case 5:
        return "saturday";
      case 7:
        return "sunday";
      default:
        return "";
    }
  };

  const month = (m) => {
    switch (m) {
      case 0:
        return "january";
      case 1:
        return "february";
      case 2:
        return "march";
      case 3:
        return "april";
      case 4:
        return "may";
      case 5:
        return "june";
      case 6:
        return "july";
      case 7:
        return "august";
      case 8:
        return "september";
      case 9:
        return "october";
      case 10:
        return "november";
      case 11:
        return "december";
      default:
        return "";
    }
  };

  return (
    <div className="DateTime">
      <Clock time={date} />
      <h1 className="time">
        {date.getHours()}:{date.getMinutes()}
      </h1>
      <h2 className="dayOfWeek">{weekday(date.getDay())}</h2>
      <h3 className="completeDate">
        {date.getDate()} {month(date.getMonth())} {date.getFullYear()}
      </h3>
    </div>
  );
}
