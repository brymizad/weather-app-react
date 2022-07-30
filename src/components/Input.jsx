import { useContext, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { WeatherContext } from '../context/WeatherProvider';

const Input = () => {
  const { setLocation, error, setError } = useContext(WeatherContext);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === '') {
      setError('Please enter a valid location...');
      return;
    }
    setError('');
    setLocation(input);
    setInput('');
  };

  return (
    <div className="pt-8 pb-5 px-5 border-b border-gray-400">
      <form className="flex gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter location..."
          className="w-full p-2 rounded bg-transparent border border-gray-500 focus:outline-none placeholder:text-gray-500"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button type="submit" className="inline text-gray-500">
          <FiSearch />
        </button>
      </form>
      {error && <small className="text-red-500">{error}</small>}
    </div>
  );
};

export default Input;
