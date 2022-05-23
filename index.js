let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "uly",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
let date = now.getDate();
let year = now.getFullYear();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let city = document.querySelector("#city");
let units = "imperial";

function showCurrentDate() {
  let today = document.querySelector("#date");
  today.innerHTML = `${day}, ${month} ${date},  ${year}`;
}
function showCurrentTime() {
  let time = document.querySelector("#time");
  time.innerHTML = `${hours}:${minutes}`;
}
let inCity = document.querySelector("#search-form");
function getCity(event) {
  event.preventDefault();
  let getInCity = document.querySelector("#city-input");
  let showCity = document.querySelector("#city");
  if (getInCity.value) {
    showCity.innerHTML = `${getInCity.value}`;
  }
  let apiKey = "55cb95256feeabceca4b4518ce3ad56a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${getInCity.value}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showCityTemperature);
}
showCurrentDate();
showCurrentTime();
inCity.addEventListener("submit", getCity);

//Temperature//

function showCityTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let cityTemp = document.querySelector("#temperature");
  cityTemp.innerHTML = temperature;
}
