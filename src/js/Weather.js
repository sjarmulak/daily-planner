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
        <div className="weatherData">
          {/* tu bedzie pogoda */}
          <div className="iconAndTemp">
            <div
              id="weatherImage"
              className={weatherData.weather[0].main}
            ></div>
            <h3 className="temperature">{weatherData.main.temp.toFixed()}°</h3>
          </div>

          <h1 className="location">{weatherData.name}</h1>
          <div className="descriptionAndHighLow">
            <h2 className="weatherDescription">
              {weatherData.weather[0].main.toLowerCase()}
            </h2>
            <span> </span>
          </div>

          {/* * */}
        </div>
      ) : (
        <div>loading weather...</div>
      )}
    </div>
  );
}

// przykładowe Weather Data:
// {
//   coord: { lon: 16.8, lat: 51.6 },
//   weather: [
//     { id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" },
//   ],
//   base: "stations",
//   main: {
//     temp: 5.93,
//     feels_like: 5.93,
//     temp_min: 4.47,
//     temp_max: 6.75,
//     pressure: 1004,
//     humidity: 95,
//   },
//   visibility: 222,
//   wind: { speed: 0.89, deg: 200, gust: 2.68 },
//   clouds: { all: 100 },
//   dt: 1649141690,
//   sys: {
//     type: 2,
//     id: 2000041,
//     country: "PL",
//     sunrise: 1649132355,
//     sunset: 1649179888,
//   },
//   timezone: 7200,
//   id: 3087307,
//   name: "Rawicz",
//   cod: 200,
// };
