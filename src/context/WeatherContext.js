import { useContext , createContext , useState } from "react";
import cities from '../cities.json'
const WeatherContext = createContext();

export const WeatherProveider = ({children}) => {
    const [weather,setWeather] = useState([]);

    const [city, setCity] = useState(cities.find(item => item.id === 6));

    const days = [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
      ];

      const value = {
        city,
        setCity,
        cities,
        days,
        weather,
        setWeather,
      };

      return (
        <WeatherContext.Provider value={value}>
          {children}
        </WeatherContext.Provider>
      );
};

export const useWeather = () => useContext(WeatherContext);