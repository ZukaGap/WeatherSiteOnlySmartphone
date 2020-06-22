import React from 'react';
import './App.css';

import Data from './Component/data';

import Hourly from './Component/hourly';
import Nav from './Component/nav/nav';

function App() {

  const currentday = () => {
    var d = new Date();
    var weekday = new Array();
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fri";
    weekday[6] = "Sat";
    var n = weekday[d.getUTCDay()];
    n += ', ' + d.getDate();
    var month = new Array();
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sep";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";
    n += ' ' + month[d.getMonth()];
    return n;
  }
  
  return (
  <>
    <div className="header">
      <h1>{Data.timezone}</h1>
      <p>{ currentday()}</p>
      <Nav />
    </div>
    <div className="todayWeather" >
      <h2>Today</h2>
      <div className="todayWeather__prognos">
        <img src={'http://openweathermap.org/img/wn/' + Data.hourly[0].weather[0].icon + '@2x.png'} ></img>
        <p>{ Data.hourly[0].temp +'°'}</p>
      </div>
      <p>{Data.hourly[0].weather[0].main}</p>
    </div>
    <div className="today_moredays">
      <a href="#" >Today</a>
      <a href="#" >Next 7 Days &#8594;</a>
    </div>
    <div className = "dayhours">
      {Data.hourly.map(x => (
        <Hourly data={x} key={x.dt} />
      ))}
    </div>
  </>
  );
}

export default App;
