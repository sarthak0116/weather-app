import './style.css';

import { getWeather } from './modules/weather.js';

import rainVideo from './videos/rain.mp4';


weatherDetails();


document.querySelector('video').src = rainVideo;