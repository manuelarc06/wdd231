const menuButton = document.getElementById("menu-button");
const nav = document.querySelector(".header-nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
    menuButton.innerHTML = nav.classList.contains("open") ? "&#215;" : "&#9776;";
});

const apiKey = "231d9daeca3c19f898c7ef4a1f514e8f";
const lat = 4.7110;   
const lon = -74.0721;

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

fetch(url)
    .then(response => response.json())
    .then(data => {

        const current = data.list[0];

        document.getElementById("current-temp").textContent =
            Math.round(current.main.temp);

        document.getElementById("weather-desc").textContent =
            current.weather[0].description;

        document.getElementById("high-temp").textContent =
            Math.round(current.main.temp_max);

        document.getElementById("low-temp").textContent =
            Math.round(current.main.temp_min);

        document.getElementById("humidity").textContent =
            current.main.humidity;

        const icon = current.weather[0].icon;
        document.getElementById("weather-icon").src =
            `https://openweathermap.org/img/wn/${icon}@2x.png`;

        document.getElementById("weather-icon").alt =
            current.weather[0].description;

        const sunrise = new Date(data.city.sunrise * 1000);
        const sunset = new Date(data.city.sunset * 1000);

        document.getElementById("sunrise").textContent =
            sunrise.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });

        document.getElementById("sunset").textContent =
            sunset.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });

        // FORECAST
        document.getElementById("day1").textContent =
            Math.round(data.list[0].main.temp);

        document.getElementById("day2").textContent =
            Math.round(data.list[8].main.temp);

        document.getElementById("day3").textContent =
            Math.round(data.list[16].main.temp);
    })
    .catch(error => console.error("Weather error:", error))