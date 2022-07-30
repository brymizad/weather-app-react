import WeatherApp from './components/WeatherApp';
import WeatherProvider from './context/WeatherProvider';

const App = () => {
  return (
    <WeatherProvider>
      <WeatherApp />
    </WeatherProvider>
  );
};

export default App;
