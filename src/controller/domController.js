function updateCityAndCountry(wth) {
  const city = document.querySelector('#city');
  const country = document.querySelector('#country');

  city.textContent = `${wth.location.name}, `;
  country.textContent = wth.location.country;
}

function updateCondition(wth) {
  const condition = document.querySelector('#weather-condition');
  condition.textContent = wth.current.condition.text;
}

function updateIcon(wth) {
  const icon = document.querySelector('#weather-icon');
  icon.src = wth.current.condition.icon;
}

function updateTemperature(wth) {
  const temperature = document.querySelector('#temperature');
  temperature.textContent = wth.current.temp_c;
}

function updateHumidity(wth) {
  const humidity = document.querySelector('#humidity');
  humidity.textContent = wth.current.humidity;
}

function updateWindSpeed(wth) {
  const windSpeed = document.querySelector('#wind-speed');
  windSpeed.textContent = wth.current.wind_mph;
}

function showWeather() {
  const container = document.querySelector('#weather-info');
  container.classList.remove('hidden');
}

export default function updateWeather(wth) {
  updateCityAndCountry(wth);
  updateCondition(wth);
  updateIcon(wth);
  updateTemperature(wth);
  updateHumidity(wth);
  updateWindSpeed(wth);
  showWeather();
}
