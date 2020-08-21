import React from "react";
import Search from "./Search";
import Overview from "./Overview";
import Temperature from "./Temperature";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function Weather() {
  return (
    <div className="App">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <Search />
          <Overview />
          <Temperature />
          <Forecast />
        </div>
        <Footer />
      </div>
    </div>
  );
}
