import { getCache, setCache } from './cache.js';

export async function getWeather(city = 'london') {
    const key = 'PN2DN4HGXNVTP49CSDPQ7UWNN';
    const cacheKey = `weather_${city}`;

    const cached = getCache(cacheKey);
    if (cached) return cached;

    const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${key}`;

    const response = fetch(URL);
    const data = (await response).json();
    setCache(cacheKey, data);
    return data;
}
