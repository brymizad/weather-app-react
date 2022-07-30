import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherProvider';
import { cities } from '../data';

const MainCities = () => {
  const { setLocation, setError } = useContext(WeatherContext);

  return (
    <div className="hidden py-3 px-5 md:flex flex-col border-b border-gray-400">
      {cities.map((city) => (
        <button
          className="p-2 text-gray-500 font-semibold"
          key={city.id}
          onClick={() => {
            setLocation(city.city);
            setError('');
          }}
        >
          {city.city}
        </button>
      ))}
    </div>
  );
};

export default MainCities;
