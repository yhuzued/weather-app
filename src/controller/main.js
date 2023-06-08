import '../assets/style.css';

import processData from './weatherController'

document.addEventListener('submit', (e) => {
  e.preventDefault();
  processData();
  e.target.reset();
});