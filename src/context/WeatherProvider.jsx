import { createContext, useEffect, useState } from 'react';

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [location, setLocation] = useState('New York City');
  const [background, setBackground] = useState('clear-day');
  const [weatherInfo, setWeatherInfo] = useState({});
  const [error, setError] = useState('');

  const handleBackground = (isDay, conditionCode) => {
    const getDayOrNight = (isDay) => {
      if (isDay === 1) {
        return 'day';
      } else {
        return 'night';
      }
    };

    const getCondition = (conditionCode) => {
      if (conditionCode === 1000) {
        return 'clear';
      } else if (
        conditionCode === 1003 ||
        conditionCode === 1006 ||
        conditionCode === 1009
      ) {
        return 'cloudy';
      } else if (
        conditionCode === 1030 ||
        conditionCode === 1063 ||
        conditionCode === 1087 ||
        conditionCode === 1135 ||
        conditionCode === 1150 ||
        conditionCode === 1153 ||
        conditionCode === 1180 ||
        conditionCode === 1183 ||
        conditionCode === 1186 ||
        conditionCode === 1189 ||
        conditionCode === 1192 ||
        conditionCode === 1195 ||
        conditionCode === 1240 ||
        conditionCode === 1243 ||
        conditionCode === 1246 ||
        conditionCode === 1273 ||
        conditionCode === 1276
      ) {
        return 'rainy';
      } else if (
        conditionCode === 1066 ||
        conditionCode === 1069 ||
        conditionCode === 1072 ||
        conditionCode === 1114 ||
        conditionCode === 1117 ||
        conditionCode === 1147 ||
        conditionCode === 1168 ||
        conditionCode === 1171 ||
        conditionCode === 1198 ||
        conditionCode === 1201 ||
        conditionCode === 1204 ||
        conditionCode === 1207 ||
        conditionCode === 1210 ||
        conditionCode === 1213 ||
        conditionCode === 1216 ||
        conditionCode === 1219 ||
        conditionCode === 1222 ||
        conditionCode === 1225 ||
        conditionCode === 1237 ||
        conditionCode === 1147 ||
        conditionCode === 1249 ||
        conditionCode === 1252 ||
        conditionCode === 1255 ||
        conditionCode === 1258 ||
        conditionCode === 1261 ||
        conditionCode === 1264 ||
        conditionCode === 1279 ||
        conditionCode === 1282
      ) {
        return 'snowy';
      } else {
        return 'clear';
      }
    };

    setBackground(
      '/img/' +
        getDayOrNight(isDay) +
        '/' +
        getCondition(conditionCode) +
        '.jpg'
    );
  };

  const getWeatherInfo = async () => {
    try {
      const key = import.meta.env.VITE_API_KEY;
      const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${location})`;
      const response = await fetch(url);
      const data = await response.json();
      setWeatherInfo(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, [location]);

  const formatDate = (date) => {
    const d = new Date(date);
    return d.toLocaleString('en-US', {
      day: 'numeric',
      weekday: 'long',
      month: 'long',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <WeatherContext.Provider
      value={{
        background,
        handleBackground,
        setLocation,
        location,
        getWeatherInfo,
        weatherInfo,
        formatDate,
        error,
        setError,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext };

export default WeatherProvider;
