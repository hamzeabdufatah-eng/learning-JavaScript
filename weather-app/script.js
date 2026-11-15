// 1. HTML Elements

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const message = document.getElementById("message");
// 2. Weather Description Function
function getWeatherDescription(code) {
  const weatherCodes = {
    0: "Clear Sky ☀️",
    1: "Mainly Clear 🌤️",
    2: "Partly Cloudy ⛅",
    3: "Overcast ☁️",
    45: "Foggy 🌫️",
    48: "Foggy 🌫️",
    51: "Light Drizzle 🌦️",
    53: "Drizzle 🌧️",
    55: "Heavy Drizzle 🌧️",
    61: "Light Rain 🌧️",
    63: "Rain 🌧️",
    65: "Heavy Rain 🌧️",
    71: "Light Snow ❄️",
    73: "Snow ❄️",
    75: "Heavy Snow ❄️",
    80: "Rain Showers 🌦️",
    81: "Rain Showers 🌧️",
    82: "Heavy Rain Showers 🌧️",
    95: "Thunderstorm ⛈️",
  };

  return weatherCodes[code] || "Unknown Weather";
}

// 3. Main Weather Function

async function getWeather(city) {
  try {
    message.textContent = "Loading weather...";
    searchBtn.disabled = true;

    // STEP A: Get City Coordinates

    const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;

    const geoResponse = await fetch(geoUrl);

    if (!geoResponse.ok) {
      throw new Error("Could not connect to city service");
    }

    const geoData = await geoResponse.json();

    if (!geoData.results || geoData.results.length === 0) {
      throw new Error("City not found!");
    }

    const location = geoData.results[0];

    const latitude = location.latitude;
    const longitude = location.longitude;

    // STEP B: Get Weather Data

    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=auto`;

    const weatherResponse = await fetch(weatherUrl);

    if (!weatherResponse.ok) {
      throw new Error("Could not get weather data");
    }

    const weatherData = await weatherResponse.json();

    // STEP C: Extract Data

    const current = weatherData.current;

    const temp = current.temperature_2m;
    const humidityValue = current.relative_humidity_2m;
    const windValue = current.wind_speed_10m;
    const weatherCode = current.weather_code;

    // STEP D: Display Data

    cityName.textContent = `${location.name}, ${location.country}`;

    temperature.textContent = `${temp}°C`;

    description.textContent = getWeatherDescription(weatherCode);

    humidity.textContent = humidityValue;

    wind.textContent = windValue;

    message.textContent = "Weather updated successfully!";
  } catch (error) {
    message.textContent = error.message;
  } finally {
    searchBtn.disabled = false;
  }
}
// 4. Search Button Event
searchBtn.addEventListener("click", function () {
  const city = cityInput.value.trim();

  if (city === "") {
    message.textContent = "Please enter a city name.";

    return;
  }

  getWeather(city);
});

// 5. Press Enter to Search

cityInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    searchBtn.click();
  }
});
