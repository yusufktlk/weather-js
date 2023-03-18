const key = "8ff6a4ec9b80a77d3dd1a0e4318bb250"
const searchBar = document.getElementById("searchBar")
const url = "https://api.openweathermap.org/data/2.5/"



const myEvent = (e) =>{
    if (e.key === "Enter"){
        getResult(searchBar.value)
    }
}

///////////

const getResult = cityName => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    console.log(query)
    fetch(query)
    .then(weather =>{
        return weather.json()
    })
    .then(display)
} 

//////////

const display = weather =>{
    let city = document.querySelector(".city")
    city.innerText = `${weather.name}, ${weather.sys.country}`

    let temp = document.querySelector(".temp")
    temp.innerText = `${Math.round(weather.main.temp)}°C`

    let desc = document.querySelector(".desc")

    let hava = `${weather.weather[0].description}`
    desc.innerText = hava.toUpperCase()

    let minxmax = document.querySelector(".minmax")
    minxmax.innerText = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`
}

searchBar.addEventListener("keypress",myEvent)

