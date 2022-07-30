const Footer = () => {
  return (
    <div className="py-3 px-5 text-xs text-gray-500">
      <p className="mb-3">Created by Brayan Miza</p>
      <p>
        API powered by{' '}
        <a
          target="_blank"
          href="https://www.weatherapi.com/"
          title="Weather API"
        >
          WeatherAPI.com
        </a>
      </p>
    </div>
  );
};

export default Footer;
