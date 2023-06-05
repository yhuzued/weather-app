import '../assets/style.css';
import updateWeather from './domController';

function requestUrl(location) {
  const key = '94c1fa00c6a040f6a5672750230106';
  const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`;
  return url;
}

async function getWeather(location) {
  try {
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

    let weather;
    if (location === '') {
      weather = await getWeather('london'); // default city
    } else {
      weather = await getWeather(location);
    }

    updateWeather(weather);
  } catch (error) {
    throw new Error('Can\'t process data');
  }
}

function submit(e) {
  e.preventDefault();
  processData();
  e.target.reset();
}

document.addEventListener('submit', (e) => submit(e));
