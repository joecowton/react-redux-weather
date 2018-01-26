const apiKey = config.API_KEY;
const URL = `http://samples.openweathermap.org/data/2.5/weather?appid=${apiKey}` 

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
  return {
    type: FETCH_WEATHER
  }
}
