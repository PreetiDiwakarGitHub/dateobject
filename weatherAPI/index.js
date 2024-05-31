
let key = "31d186173b05bfba8d292afd1fcae2ac";
let url = "https://api.openweathermap.org/data/2.5/weather?";

async function checkWeather() {
    let city = document.getElementById("city-input").value;
    const response = await fetch(`${url}q=${city}&appid=${key}`);
    if (response) {
        const data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp - 273.15) + "°C"; // Convert Kelvin to Celsius
    } else {
        console.error("City not found");
    }
    if(data.weather[0].main=="Clouds");
}
