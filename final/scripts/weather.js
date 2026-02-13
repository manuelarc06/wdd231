const apiKey = "231d9daeca3c19f898c7ef4a1f514e8f";
const city = "Bogota";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        document.getElementById("temperature").textContent = `${data.main.temp} °C`;
        document.getElementById("condition").textContent = data.weather[0].description;

        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        document.getElementById("weather-icon").src = iconUrl;
    })
    .catch(error => console.error("Error fetching weather:", error));