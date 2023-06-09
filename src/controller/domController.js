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

function showElement(element) {
  const loading = document.querySelector(element);
  loading.classList.remove('hidden');
}

function hideElement(element) {
  const loading = document.querySelector(element);
  loading.classList.add('hidden');
}

function displayInfo(elementToHide, elementToShow) {
  setTimeout(() => {
    hideElement(elementToHide);
    showElement(elementToShow);
  }, 400);
}

function hideInfo(elementToShow, elementToHide) {
  showElement(elementToShow);
  hideElement(elementToHide);
}

function updateWeather(wth) {
  updateCityAndCountry(wth);
  updateCondition(wth);
  updateIcon(wth);
  updateTemperature(wth);
  updateHumidity(wth);
  updateWindSpeed(wth);
}

export {
  updateWeather, displayInfo, hideInfo, hideElement,
};
