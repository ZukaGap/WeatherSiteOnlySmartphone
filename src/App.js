import React from "react";
import "./App.css";

import Data from "./Component/data";

import Hourly from "./Component/hourly";
import Nav from "./Component/nav/nav";

function App() {
  const currentday = () => {
    const date = new Date();
    const dateTimeFormat = new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    const [
      { value: month },
      ,
      { value: day },
      ,
      { value: year },
    ] = dateTimeFormat.formatToParts(date);

    let n = `${day} ${month} ${year}`;

    return n;
  };

  return (
    <div className="app">
      <div className="header">
        <div>
          <h1>{Data.timezone}</h1>
          <p>{currentday()}</p>
        </div>
        <Nav />
      </div>
      <div className="todayWeather">
        <h2>Today</h2>
        <div className="todayWeather__prognos">
          <img
            src={`http://openweathermap.org/img/wn/${Data.hourly[0].weather[0].icon}@2x.png`}
          ></img>
          <p>{Data.hourly[0].temp + "°"}</p>
        </div>
        <p>{Data.hourly[0].weather[0].main}</p>
      </div>
      <div className="today_moredays">
        <div className="toggle-radio">
          <input type="radio" name="rdo" id="Today" checked />
          <input type="radio" name="rdo" id="Days" />
          <div className="switch">
            <label for="Today">Today</label>
            <label for="Days">Next 7 Days &#8594;</label>
          </div>
        </div>
      </div>
      <div className="dayhours">
        {Data.hourly.map((x) => (
          <Hourly data={x} key={x.dt} />
        ))}
      </div>
    </div>
  );
}

export default App;
