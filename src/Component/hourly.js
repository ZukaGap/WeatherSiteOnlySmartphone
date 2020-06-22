import React from 'react';
import './hourly.css';

function Hourly(props) {
    var AmOrPm = (new Date(props.data.dt * 1000).getHours()) >= 12 ? 'PM' : 'AM';
    var hours = ((new Date(props.data.dt * 1000).getHours()) % 12) || 12;
    var finalTime = hours + AmOrPm; 
    var png = 'http://openweathermap.org/img/wn/' + props.data.weather[0].icon + '.png';

    return (
        <div className="hourly" >
            <p>{finalTime}</p>
            <img alt="" src={png} ></img>
            <p>{Math.round(props.data.temp) + '°'}</p>
        </div>
    )
};

export default Hourly;