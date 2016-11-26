import axios from 'axios';

const API_KEY = 'd0ae2d5c82168bc2c6408f3c7a7eb974';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?q=`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}${city},HR&appid=${API_KEY}`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}



