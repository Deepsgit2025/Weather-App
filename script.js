
let cityname = document.getElementById("search-bar")
let btn = document.getElementById("searchbtn")
let temp = document.getElementById("temp")
let humidity = document.getElementById("humidity")
let speed = document.getElementById("speed")
let locationz = document.getElementById("location")

let apiurl = "https://api.openweathermap.org/data/2.5/weather?q="
let apikey = "4290363cd0903bfd35382ecf843e2f9d"

 async function weather(cito) {
    let response =  await fetch(`${apiurl}${cito}&appid=${apikey}`);
    const data = await response.json();
    temp.innerText = Math.round(data.main.temp - 273.15) + "°C";
    humidity.innerText = `💧 ${data.main.humidity}%`;
    speed.innerText = `🌪️ ${data.wind.speed} Km/h`;
    locationz.innerText = data.name;
}

btn.addEventListener("click", () => {
    weather(cityname.value);
});


    




