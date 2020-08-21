import React from "react";

export default function Forecast() {
  return (
    <div className="row weather-forecast">
      <div className="col-2">
        <h3>14:00</h3>
        <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="" />
        <div className="weather-forecast-temperature">
          <strong>94°</strong>
        </div>
      </div>
      <div className="col-2">
        <h3>17:00</h3>
        <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="" />
        <div className="weather-forecast-temperature">
          <strong>94°</strong>
        </div>
      </div>
      <div className="col-2">
        <h3>20:00</h3>
        <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="" />
        <div className="weather-forecast-temperature">
          <strong>93°</strong>
        </div>
      </div>
      <div className="col-2">
        <h3>23:00</h3>
        <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="" />
        <div className="weather-forecast-temperature">
          <strong>93°</strong>
        </div>
      </div>
      <div className="col-2">
        <h3>26:00</h3>
        <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="" />
        <div className="weather-forecast-temperature">
          <strong>91°</strong>
        </div>
      </div>
      <div className="col-2">
        <h3>29:00</h3>
        <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="" />
        <div className="weather-forecast-temperature">
          <strong>89°</strong>
        </div>
      </div>
    </div>
  );
}
