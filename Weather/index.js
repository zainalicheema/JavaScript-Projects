APIKEY='ca8ad86f592a42f0a10103146241108';

const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');


const cityName = document.getElementById('city-name');
const country = document.getElementById('countryName');
const locTime = document.getElementById('loc-time');
const temp = document.getElementById('temp');
const windSpeed = document.getElementById('wind');
const cloud= document.getElementById('cloud');
const day= document.getElementById('day');
const humdity = document.getElementById('humdity');


async function getData(APIKEY,cityInput){
const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${cityInput}&aqi=yes`);
return await promise.json();
}

searchBtn.addEventListener('click',async () => {
  const input = cityInput.value;
  const result = await getData(APIKEY,input);
  cityName.innerText=`${result.location.name},${result.location.region}`
  country.innerText = result.location.country;
  temp.innerText = result.current.temp_c;
  locTime.innerText = result.location.localtime; 
  windSpeed.innerHTML = `<i>Speed : ${result.current.wind_kph}-Kph | </i>`;
  cloud.innerHTML = `<i>Cloud : ${result.current.cloud}% | </i>`;
  day.innerHTML = `<i>Today : ${result.current.condition.text}</i>`;
  humdity.innerHTML =`<i>Humidity : ${result.current.humidity}%</i>`;
});
