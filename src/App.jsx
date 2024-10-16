import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import Input from "./Input";
import MainInfoDisplay from "./MainInfoDisplay";
import SideBar from "./SideBar";
import Spinner from "./Spinner";

const API_KEY = import.meta.env.VITE_API_KEY;
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

function App() {
  const [query, setQuery] = useState("");
  const [background, setBackground] = useState("Clouds");
  const [location, setLocation] = useState("Zirakpur");
  const [temperature, setTemperature] = useState(23.234);
  const [weather, setWeather] = useState("Mist");
  const [windSpeed, setWindSpeed] = useState(24);
  const [humidity, setHumidity] = useState(45);
  const [pressure, setPressure] = useState(0);
  const [visibility, setVisibility] = useState(6789);
  const [description, setDescription] = useState("Misty");
  const [windDirection, setWindDirection] = useState(0);
  const [country, setCountry] = useState("India");
  const [loading, setLoading] = useState(false);

  const URL = `${url}${query}&appid=${API_KEY}`;

  const fetchApi = async (url) => {
    setLoading(true);
    try {
      const response = await axios.get(url);

      setLocation(response.data.name);
      setWeather(response.data.weather[0].main);
      setBackground(response.data.weather[0].main);
      setWindSpeed(response.data.wind.speed);
      setTemperature(response.data.main.temp);
      setHumidity(response.data.main.humidity);
      setDescription(response.data.weather[0].description);
      setPressure(response.data.main.pressure);
      setVisibility(response.data.visibility);
      setWindDirection(response.data.wind.deg);
      setCountry(response.data.sys.country);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      if (query) {
        fetchApi(URL);
      }
    }, 2000);
    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div
          className="w-full min-h-screen flex flex-row items-center bg-no-repeat bg-center transition-all duration-300"
          id="whole-container"
          style={{
            backgroundImage: `url(/images/${background}.jpg)`,
            backgroundSize: "cover",
            height: "100vh",
          }}
        >
          <div className="w-[70vw] h-full" id="left-side">
            <div>
              <div className="flex justify-center items-center min-h-[10vh]">
                <Input query={query} setQuery={setQuery} />
              </div>
              <div
                className="min-h-[90vh] flex flex-col justify-end"
                id="left-bottom-section"
              >
                <MainInfoDisplay
                  location={location}
                  weather={weather}
                  windSpeed={windSpeed}
                  temperature={temperature}
                  humidity={humidity}
                />
              </div>
            </div>
          </div>
          <div
            className="w-[30vw] h-full bg-white bg-opacity-15 pt-7 p-4 rounded-l-2xl "
            id="right-side"
          >
            <SideBar
              location={location}
              weather={weather}
              windSpeed={windSpeed}
              temperature={temperature}
              humidity={humidity}
              pressure={pressure}
              visibility={visibility}
              description={description}
              windDirection={windDirection}
              country={country}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
