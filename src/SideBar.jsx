import React from "react";

export default function SideBar({
  location,
  weather,
  windSpeed,
  temperature,
  humidity,
  pressure,
  visibility,
  description,
  windDirection,
  country,
}) {
  return (
    <>
      <div className="flex flex-col" id="sidebar-section">
        <div
          className="flex flex-col text-3xl font-[GT] text-white py-2 border-b-4 font-bold"
          id="loaction-and-country"
        >
          <p>{location},</p>
          <p>{country}</p>
        </div>
        <div className="py-2 border-b-2 " id="weather-description">
          <p className="text-2xl text-white flex flex-row text-opacity-90 ">
            <img src={`/svg/${weather}.svg`} alt="" /> {description}
          </p>
        </div>
        <div
          className="min-h-[15vh] p-2 mt-[5vh] flex flex-col text-3xl text-white"
          id="wind-description"
        >
          <p className="flex flex-row gap-2">
            <img src="/svg/wind.svg" alt="" />
            {windSpeed}km/h
          </p>
          <p className="flex flex-row gap-2">
            <img src="/svg/windDirection.svg" alt="" />
            {windDirection}°
          </p>
        </div>

        <div
          className="flex flex-col gap-2 mt-4  text-3xl text-white p-2"
          id="humidity"
        >
          <p className="flex flex-row gap-2">
            <img src="/svg/humidity.svg" alt="humidity" />
            {humidity}%
          </p>
          <p className="flex flex-row gap-2">
            <img src="/svg/visibility.svg" alt="visibility" />
            <p>{Math.floor(Number(visibility) / 1000)} km</p>
          </p>
          <p className="flex flex-row gap-2">
            <img src="/svg/pressure.svg" alt="pressure" />
            <p>{pressure} Psi</p>
          </p>
        </div>
      </div>
    </>
  );
}
