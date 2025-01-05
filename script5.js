async function getWeather() {
  const location = document.getElementById('location').value.trim();
  if (!location) {
    alert('Please enter a location.');
    return;
  }

  const apiKey = '75194095ae4fbe0014eeb83856b7f49e';  // Replace with your actual API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (response.ok) {  // Check if the response status is OK (200)
      const weatherInfo = `
        <h2>Weather in ${data.name}, ${data.sys.country}</h2>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
      `;
      document.getElementById('weather-info').innerHTML = weatherInfo;
    } else {
      throw new Error(data.message || 'Unable to fetch weather data');
    }
  } catch (error) {
    document.getElementById('weather-info').innerHTML = `<p class="error">${error.message}</p>`;
  }
}
