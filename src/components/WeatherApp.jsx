import { useContext, useEffect } from 'react';
import { WeatherContext } from '../context/WeatherProvider';
import Footer from './Footer';
import Input from './Input';
import MainCities from './MainCities';

const WeatherApp = () => {
  const { background, handleBackground, weatherInfo, formatDate } =
    useContext(WeatherContext);

  useEffect(() => {
    if (weatherInfo.current) {
      handleBackground(
        weatherInfo.current.is_day,
        weatherInfo.current.condition.code
      );
    }
  }, [weatherInfo]);

  return (
    <div className="font-montserrat h-screen w-full flex items-center relative overflow-y-scroll">
      <img
        src={background}
        alt="weather-background"
        className="object-cover w-full h-screen absolute -z-50"
      />

      {weatherInfo.current ? (
        <div className="container mx-auto grid md:grid-cols-3">
          <div className="backdrop-blur-sm md:h-auto bg-white/30 col-span-3 md:col-span-2 flex flex-col justify-between px-10 py-8">
            <div className="h-20">
              <h1>Weather App</h1>
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:items-center">
              <h2 className="text-7xl font-bold">
                {weatherInfo?.current?.temp_c}&#176;
              </h2>
              <div>
                <h3 className="text-5xl font-semibold">
                  {weatherInfo?.location?.name}
                </h3>
                <small>{weatherInfo?.location?.country}</small>
                <p className="text-sm">
                  {formatDate(weatherInfo?.location?.localtime)}
                </p>
              </div>
              <div className="flex md:flex-col">
                <img
                  src={weatherInfo?.current?.condition.icon}
                  alt={weatherInfo?.current?.condition.text}
                  className="h-20 w-20"
                />
                <p className="text-center">
                  {weatherInfo?.current?.condition?.text}
                </p>
              </div>
            </div>
          </div>
          <div className="backdrop-blur-sm col-span-3 md:col-span-1 bg-white/60">
            <Input />
            <MainCities />
            <Footer />
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default WeatherApp;
