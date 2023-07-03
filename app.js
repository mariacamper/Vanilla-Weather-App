
function formatDate(timestamp) {
  //calculate the date
  let date = new Date(timestamp);

  let hours = date.getHours();
   if (hours < 10) {
   hours = `0${hours}`;
 }

  let minutes = date.getMinutes();
  if (minutes < 10) {
  minutes = `0${minutes}`;
}
  
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[date.getDay()];

  
  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {

  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;

  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.temperature.humidity;

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);

  let dateElement = document.querySelector("#date");
  dateElement.innerHTML = formatDate(response.data.time * 1000);
}


let apiKey = "77ao6ba83c370f60fbc94613061ab8t5";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=New York&key=${apiKey}`;


axios.get(apiUrl).then(displayTemperature);