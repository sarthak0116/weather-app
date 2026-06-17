import './style.css';

import { getWeather } from './modules/weather.js';

getWeather('gwalior')
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
