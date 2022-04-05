import React, { useState, useEffect } from "react";
import "../scss/Clock.scss";

export default function Clock() {
  const [time, setTime] = useState(new Date());
  const [minutes, setMinutes] = useState(time.getMinutes());
  const [hours, setHours] = useState(time.getHours());
  const [minDegrees, setMinDegrees] = useState(0);
  const [hourDegrees, setHourDegrees] = useState(0);
  const [hourStyle, setHourStyle] = useState({});
  const [minStyle, setMinStyle] = useState({});

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date());
      setMinutes(time.getMinutes());
      setHours(time.getHours());
      setHourDegrees((hours / 12) * 360 + (minutes / 60) * 30 + 90);
      setMinDegrees((minutes / 60) * 360 + 90);
      console.log(time);
    };
    const Timer = setInterval(() => updateTime(), 1000);
  }, []);

  useEffect(() => {
    setHourStyle({ transform: `rotate(${hourDegrees}deg)` });
    setMinStyle({ transform: `rotate(${minDegrees}deg)` });
  }, [minDegrees]);

  return (
    <div className="Clock">
      <div className="hand hour-hand" style={hourStyle}></div>
      <div className="hand min-hand" style={minStyle}></div>
    </div>
  );
}
