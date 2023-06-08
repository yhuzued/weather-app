
import {
  updateWeather, displayInfo, hideInfo, hideElement,
} from './domController';

function requestUrl(location) {
  const key = '94c1fa00c6a040f6a5672750230106';
  const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`;
  return url;
}

async function getWeather(location) {
  try {
    hideInfo('#loading', '#weather-info');
    hideElement('#error');
    const url = requestUrl(location);
    const response = await fetch(url, { mode: 'cors' });
    const weather = await response.json();
    return weather;
  } catch (error) {
    throw new Error('Can\'t fetch data');
  }
}

async function processData() {
  try {
    const location = document.getElementById('input-form').value;
    const weather = location === '' ? await getWeather('london') : await getWeather(location);
    updateWeather(weather);
    displayInfo('#loading', '#weather-info');
  } catch (error) {
    displayInfo('#loading', '#error');
    throw new Error('Can\'t process data');
  }
}

export default function submit(e) {
  e.preventDefault();
  processData();
  e.target.reset();
}


