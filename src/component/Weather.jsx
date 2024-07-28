import React, { useState, useEffect } from 'react';
import FormA from './FormA';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const lat = '77.1'; // Replace with your actual latitude
  const lon = '28.7'; // Replace with your actual longitude
  const API_URL = "https://api.weatherapi.com/v1/current.json";
  const apiKey = 'd6771bfc7e41414a99b124041242906'; // Replace with your actual OpenWeatherMap API key
  const city = 'New York'; // Replace with the city name you want to fetch data for


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}?key=${apiKey}&q=${encodeURIComponent(city)}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('data weather', data);
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [lat, lon, apiKey]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  // Render your weather data here
  return (
    <div className='App mt-10 mb-10'>
      <p style={{color:'blue'}}>Current humidity: {weatherData.current.humidity} °C</p>
      <p style={{color:'red'}}>Current temperature: {weatherData.current.temp_f} °C</p>
      <p style={{color:'Green'}}>Current wind: {weatherData.current.wind_dir}</p>
      <p style={{color:'red'}}>Current pressure: {weatherData.current.pressure_in} °C</p>
      <p style={{color:'blue'}}>Current location: {weatherData.location.name}</p>

      <p>calling formA</p>
      <FormA/>
      </div>
  );
};

export default Weather;
