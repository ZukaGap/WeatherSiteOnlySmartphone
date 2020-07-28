import React from "react";
import "./hourly.css";

function Hourly(props) {
  const dateTimeFormat = new Intl.DateTimeFormat("en", {
    hour12: false,
    hour: "numeric",
  });

  const [{ value: hour }] = dateTimeFormat.formatToParts(props.data.dt * 1000);
  var png =
    "http://openweathermap.org/img/wn/" + props.data.weather[0].icon + ".png";
  return (
    <div className="hourly">
      <p>{hour}</p>
      <img alt="" src={png}></img>
      <p>{Math.round(props.data.temp) + "°"}</p>
    </div>
  );
}

export default Hourly;
