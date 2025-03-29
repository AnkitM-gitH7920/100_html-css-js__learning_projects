// api key
const api_key = `a39a61df78a182057584f9699c3f7033`;
const api_url = `https://api.openweathermap.org/data/2.5/weather?q=city_name&units=metric`;

// getting all the DOM elements
let input = document.getElementById("searchBar");
let searchBtn = document.querySelector(".searchBtn");
let cityName = document.getElementById("cityName");
let weatherConditionIcon = document.getElementById("weatherConditionIcon");
let temperature = document.getElementById("temperature");
let humidity = document.getElementById("humidity");
let windspeed = document.getElementById("windspeed");
let locationDate = document.getElementById("l-d-date");
let weatherdDesc = document.getElementById("description");
let forecastContainer = document.querySelector(".forecastDiv");

const weatherIcons = {
	"Clear":"images/weatherIcons/sun.png",
	"Rain":"images/weatherIcons/rainy-day.png",
	"Clouds":"images/weatherIcons/cloudy.png",
	"Drizzle":"images/weatherIcons/drizzle.png",
	"Thunderstorm":"images/weatherIcons/storm.png",
	"Snow":"images/weatherIcons/snow.png",
	"Mist":"images/weatherIcons/mist.png",
	"Smoke":"images/weatherIcons/smoke.png",
	"Haze":"images/weatherIcons/haze.png",
	"Dust":"images/weatherIcons/dust.png",
	"Fog":"images/weatherIcons/fog.png",
	"Ash":"images/weatherIcons/ash.png",
	"Tornado":"images/weatherIcons/tornado.png"};

async function fetchWeather(enteredLocation){
	try{
		const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${enteredLocation}&units=metric&appid=${api_key}`);
	  const data = await weather.json();
	  if (data.cod != 200) {
		  alert("Location not found, please enter a valid location")
	  }
	  else{
	  	// city name amd date update
	  	cityName.innerText = data.name;
	  	let unixTimestamp = data.dt;
	  	locationDate.innerText = `${formatDate(unixTimestamp)}`;

	  	// icon update
	  	let weatherTaken = data.weather[0].main;
	  	let weatherIcon = weatherIcons[weatherTaken];
	  	weatherConditionIcon.src = `${weatherIcon}`;

	  	//temp and desc update
	  	if (data.main.temp < 0) {
	  		temperature.innerHTML = `${Math.round(data.main.temp)}&deg;C`;
	  	}else{
	  		temperature.innerHTML = `${Math.round(data.main.temp)}&deg;C`;
	  	}
			weatherdDesc.innerText  =  `${data.weather[0].description}`;


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
	forecastContainer.innerHTML = "";
	let forecastData = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${enteredLocation}&units=metric&appid=${api_key}`);
	let forecastResponse = await forecastData.json();
	let forecastList = forecastResponse.list;

	forecastList.forEach((listItem,index)=>{
		let forecastTakenIcon = forecastList[index].weather[0].main;
		let forecastIcon = weatherIcons[forecastTakenIcon];
		let temperatureForecast = forecastList[index].main.temp;

		//clear previous data
		function tempCheck(temperatureForecast){
		  return temperatureForecast < 0 ? temperatureForecast : Math.round(temperatureForecast)
		}
		forecastContainer.innerHTML += `
		   <div class="forecast-container alignC directionColumn">
			   <p id="fore-date">${formatDate(listItem.dt).split(", ")[1]}</p>
			   <img src="${forecastIcon}">
			   <p id="fore-temperature">${tempCheck(temperatureForecast)}&deg;C</p>
		   </div>`;
	});
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