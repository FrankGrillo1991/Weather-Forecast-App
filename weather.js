const apiKey = 'YOUR_API_KEY'; // Replace with your API key
const weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather';

async function fetchWeather(city, country) {
    const queryParams = new URLSearchParams({
        q : `${city},${country}`,
        appid: apiKey,
        units: 'metric' // Or 'imperial' for Fahrenheit
    });

    try {
        const response = await fetch(`${weatherApiUrl}?${queryParams}`);
        if (!response.ok) throw new Error(`Weather data fetch failed: ${response.statusText}`);
        const weatherData = await response.json();
        updateWeatherUI(weatherData)
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
}