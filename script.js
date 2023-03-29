const search = document.getElementById("search"),
  submit = document.getElementById("submit"),
  result = document.getElementById("result");

function getMeteo(e) {
  e.preventDefault();

  const city = search.value;
  const apiKey = "";
  const lang = "it";
  const units = "metric";

  if (city.trim()) {
    console.log(city);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=${lang}&units=${units}`
    )
      .then((meteo) => meteo.json())
      .then(displayResult);
  } else {
  }
}

function displayResult(meteo) {
  console.log(meteo);
  let city = document.querySelector(".location .city");
  city.innerHTML = `${meteo.name}, ${meteo.sys.country}`;

  let date = new Date();
  let formated = date.toLocaleString();
  let now = document.querySelector(".location .date");
  now.innerHTML = `${formated}`;

  let temp = document.querySelector(".current .temp");
  temp.innerHTML = `${parseInt(meteo.main.temp)}<span> °C</span>`;

  let weather = document.querySelector(".current .weather");
  weather.innerHTML = `${meteo.weather[0].description}`;

  let hilow = document.querySelector(".current .hi-low");
  hilow.innerHTML = `${parseInt(meteo.main.temp_min)}
    °C /
    ${parseInt(meteo.main.temp_max)}
    °C`;
}

submit.addEventListener("submit", getMeteo);
