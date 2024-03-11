document.addEventListener('DOMContentLoaded', function() {
    const cityInput = document.getElementById('cityInput');
    const getWeatherBtn = document.getElementById('getWeatherBtn');
    const weatherInfo = document.getElementById('weatherInfo');
    const temperature = document.getElementById('temperature');
    const humidity = document.getElementById('humidity');
    const weatherDescription = document.getElementById('weatherDescription');
    const windSpeed = document.getElementById('windSpeed');

    getWeatherBtn.addEventListener('click', function() {
        const city_name = cityInput.value;
        fetchWeather(city_name);
    });

    function fetchWeather(city_name) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=dbe55cc00ca52d77f52a8debaf07c800&units=metric`)
            .then(response => response.json())
            .then(data => {
                temperature.textContent = `Temperature: ${data.main.temp} °C`;
                humidity.textContent = `Humidity: ${data.main.humidity} %`;
                weatherDescription.textContent = `Description: ${data.weather[0].description}`;
                windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
                weatherInfo.classList.remove('hidden');
            })
            .catch(error => console.error('Error:', error));
    }
});
