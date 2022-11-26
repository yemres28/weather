import { useEffect, useState } from "react";
import { usePosition } from "use-position";
import axios from "axios";
import HavaDurumu from "./components/HavaDurumu";
function App() {
  const [weather, setWeather] = useState();
  const { latitude, longitude } = usePosition();
  const getWeatherData = async (lat, lon) => {
    const lang = navigator.language.split("-")[0]
    console.log(lang)
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=787353de835388dadc9d0025251c5781&lang=${lang}&units=metric`
      );
      setWeather(data);
    } catch {
      alert("Veri alınırken hata oluştu");
    }
  };
  useEffect(() => {
    latitude && longitude && getWeatherData(latitude, longitude);
  }, [latitude, longitude]);
  return (
  <div>
    <h2>Hava Durumu</h2>
    <HavaDurumu weather={weather}/>
  </div>
  )
}

export default App;
