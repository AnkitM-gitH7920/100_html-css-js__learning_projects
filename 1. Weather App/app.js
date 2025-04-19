// api key
const api_key = `a39a61df78a182057584f9699c3f7033`;

// getting all the DOM elements
let input                = document.getElementById("searchBar");
let searchBtn            = document.querySelector(".searchBtn");
let cityName             = document.getElementById("cityName");
let weatherConditionIcon = document.getElementById("weatherConditionIcon");
let temperature          = document.getElementById("temperature");
let humidity             = document.getElementById("humidity");
let windspeed            = document.getElementById("windspeed");
let locationDate         = document.getElementById("l-d-date");
let weatherdDesc         = document.getElementById("description");
let forecastDiv    = document.querySelector(".forecastDiv");

const weatherIcons = {
	"Clear":"images/weatherIcons/sun.webp",
	"Rain":"images/weatherIcons/rainy-day.webp",
	"Clouds":"images/weatherIcons/cloudy.webp",
	"Drizzle":"images/weatherIcons/drizzle.webp",
	"Thunderstorm":"images/weatherIcons/storm.webp",
	"Snow":"images/weatherIcons/snow.webp",
	"Mist":"images/weatherIcons/mist.webp",
	"Smoke":"images/weatherIcons/smoke.webp",
	"Haze":"images/weatherIcons/haze.webp",
	"Dust":"images/weatherIcons/dust.webp",
	"Fog":"images/weatherIcons/fog.webp",
	"Ash":"images/weatherIcons/ash.webp",
	"Tornado":"images/weatherIcons/tornado.webp"};

async function fetchWeather(enteredLocation){
	try{
	  const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${enteredLocation}&units=metric&appid=${api_key}`);
	  const countryCodeFetchRes = await fetch("/countrycodes.json");
	  const parsedCountryCodes = await countryCodeFetchRes.json();
	  const data = await weather.json();
	  if (data.cod != 200) {
		  alert("Location not found, please enter a valid location or check the spelling of entered location");
	  }
	  else{
	  	// city name, countryName and date update
	  	let unixTimestamp = data.dt;
	  	cityName.innerText = `${data.name},`;
	  	locationDate.innerText = `${formatDate(unixTimestamp)}`;
	  	document.getElementById("country").innerText = parsedCountryCodes[data.sys.country] || data.sys.country;

	  	// icon update
	  	let weatherTaken = data.weather[0].main;
	  	let weatherIcon = weatherIcons[weatherTaken];
	  	weatherConditionIcon.src = `${weatherIcon}`;

	  	//temp and desc update
	  	temperature.innerHTML  = `${Math.round(data.main.temp)}&deg;C`;
		weatherdDesc.innerText = `${data.weather[0].description}`;


	  	//humidity and windspeed update
	  	humidity.innerText = `${data.main.humidity}%`
	  	windspeed.innerText = `${Math.round(data.wind.speed)} m/s`

		updateForecastInfo(enteredLocation);
	  }
	}catch(err){
		console.log("Error fetching details, try refreshing the page",err)
	};
};
async function updateForecastInfo(enteredLocation){
	forecastDiv.innerHTML = "";
	let forecastData = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${enteredLocation}&units=metric&appid=${api_key}`);
	let forecastResponse = await forecastData.json();
	let forecastList = forecastResponse.list;

	forecastList.forEach((listItem,index)=>{
		if (listItem.dt_txt.includes("00:00:00")) {
			let forecastTakenIcon = forecastList[index].weather[0].main;
		    let forecastIcon = weatherIcons[forecastTakenIcon];
		    forecastDiv.innerHTML += `
		       <div class="forecast-container alignC directionColumn">
			       <p id="fore-date">${formatDate(listItem.dt).split(",")[1]}</p>
			       <img loading="lazy" src="${forecastIcon}">
			       <p id="fore-temperature">${tempCheck(forecastList[index].main.temp)}&deg;C</p>
		       </div>`;
		};
	});
};
function tempCheck(tempUnit){
	return tempUnit < 0 
    ? tempUnit 
    : Math.round(tempUnit)
}

function formatDate(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    const options = { weekday: 'short', day: '2-digit', month: 'short' };
    return date.toLocaleDateString('en-GB', options);
}

input.addEventListener('keydown',(event)=>{
	let enteredLocation = input.value;
	if (event.key == "Enter") {
	   enteredLocation == ""
	   ? alert("Please enter a location first")
	   : fetchWeather(enteredLocation); input.value = ""
	};
});

searchBtn.addEventListener('click',(event)=>{
	let enteredLocation = input.value;
	enteredLocation == ""
	? alert("Please enter a location first")
	: fetchWeather(enteredLocation); input.value = ""
});