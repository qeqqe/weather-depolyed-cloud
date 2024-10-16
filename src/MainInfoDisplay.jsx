import React, { useState } from "react";
import wind from "/svg/wind.svg";
import humid from "/svg/humidity.svg";

export default function MainInfoDisplay({
  location,
  weather,
  windSpeed,
  temperature,
  humidity,
}) {
  const [isCelsius, setIsCelsius] = useState(true);

  const toggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
  };

  const displayTemperature = isCelsius
    ? Math.floor(temperature * 10) / 10
    : Math.floor(((temperature * 9) / 5 + 32) * 10) / 10;

  return (
    <div className="m-[7vh] w-full min-h-[10vh]">
      <div
        className="flex flex-row text-4xl font-bold font-sans text-white"
        id="top-section"
      >
        <p onClick={toggleTemperatureUnit}>
          {displayTemperature}°{isCelsius ? "C" : "F"} |{" "}
        </p>
        <p>{location}</p>
        <img src={`/svg/${weather}.svg`} alt={weather} />
      </div>
      <div
        className="mt-[2vh] flex flex-row gap-4 text-white text-opacity-80 text-2xl"
        id="bottom-section"
      >
        <p className="flex flex-row">
          <img src={wind} alt="wind speed" />
          {windSpeed} km/h
        </p>
        <p className="flex flex-row">
          <img src={humid} alt="humidity" />
          {humidity}%
        </p>
      </div>
      <div className="mt-4"></div>
    </div>
  );
}
