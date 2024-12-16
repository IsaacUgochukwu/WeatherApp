// Me testing the API I got
const cityName = 'London, uk';
const apiKey = '2c0e23ba4cbd454f2808416ebfbf8ece';
let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

fetch(url)
.then(response => {
  return response.json();
})
.then(data => {
  let weatherData = data;
  document.body.innerHTML = JSON.stringify(weatherData);
})