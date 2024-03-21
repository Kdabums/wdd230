const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=1d3ce09edcc15f7b2e16291cba4b9600'

/*const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captiondesc = document.querySelector('figcaption');
const url         = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=81853bba6f0945a913868e94a307bd9c"
*/
async function getWeather(url){
    try{
        const result  = await fetch(url)
        if (result.ok) {
            const data = await result.json();
            console.log(data)
            displayResult(data)
            
        }else{
            throw Error(await result.text());
        }
    }   
    catch(error){
        console.log(error);
    }

   
	 
   
};


function displayResult(weatherData){
    currentTemp.innerHTML = `<strong>${ Math.round(weatherData.main.temp)} <strong/>`
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

    const arr = desc.split(" ")

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    
    }    
    
    const descript = arr.join(" ");    
  
    captiondesc.textContent = descript;
    
};
const data = getWeather(url);
