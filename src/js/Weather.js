import React, { useEffect, useState } from "react";
import "../scss/Weather.scss";

export default function Weather() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [weatherData, setData] = useState([]);

  const API_URL = "https://api.openweathermap.org/data/2.5";
  const API_KEY = "e99c75ceb471049b3c5e1dfee32865aa";
  const ICON_URL = "https://openweathermap.org/img/w";

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `${API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, long]);

  return (
    <div className="Weather">
      {typeof weatherData.main != "undefined" ? (
        <div>tu bedzie pogoda</div>
      ) : (
        <div>loading weather...</div>
      )}
      {weatherData.name}
    </div>
  );
}
