import React from "react";

export default function Temperature() {
  return (
    <div className="row">
      <div className="col-6">
        <div className="clearfix weather-temperature">
          <img
            src="http://openweathermap.org/img/wn/02d@2x.png"
            alt=""
            className="float-left"
          />
          <div className="clearfix">
            <strong>93</strong>
            <span className="units">
              <a href="/" id="fahrenheit-link" className="active">
                °F
              </a>{" "}
              |
              <a href="/" id="celsius-link">
                °C
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="col-6">
        <ul>
          <li>Humidity: 52%</li>
          <li>Wind: 1 mph</li>
        </ul>
      </div>
    </div>
  );
}
