document.getElementById("btn").addEventListener("click", getWeather);

async function getWeather() {
    const city = document.getElementById("city").value;
    const result = document.getElementById("result");

    if (city === "") {
        result.innerText = "Please enter a city name";
        return;
    }

    const apiKey = " add your api-key";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            result.innerText = "City not found";
            return;
        }

        result.innerHTML = `
            <p>🌡 Temperature: ${data.main.temp} °C</p>
            <p>☁ Weather: ${data.weather[0].description}</p>
        `;
    } catch (error) {
        result.innerText = "Error fetching weather data";
    }
}


