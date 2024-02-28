const windChill    = document.querySelector("#windChill");
const temperature  = document.querySelector("#temp");
const windSpeed    = document.querySelector("#speed");
const weatherIcon  = document.querySelector("#weather-icon");
const des  = document.querySelector("#descript");
const url          = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=81853bba6f0945a913868e94a307bd9c"

async function getWeather(url){
    try{
        const result  = await fetch(url)
        if (result.ok) {
            const data = await result.json();
            console.log(data)
            windChillFunct(data);
            
            
        }else{
            throw Error(await result.text());
        }
    }   
    catch(error){
        console.log(error);
    }

   
	 
   
};


function windChillFunct(data) {      
    let wChill = 35.74 + data.main.temp - 35.75 * Math.pow(data.wind.speed, 0.16) + 0.4275 * data.main.temp * Math.pow(data.wind.speed, 0.16);
    if (data.main.temp < 50 && data.wind.speed > 3.0) {
        mC = Math.round(wChill)
        const wC = `<span>${mC}<span/>&deg;F`;        
    }
    else{
        wC = "N/A"
    }
    

    windChill .innerHTML = wC;
    temperature.textContent   =  Math.round( data.main.temp);
    windSpeed.textContent       = data.wind.speed;
    const iconsrc    = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
    const desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    const arr = desc.split(" ")
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    
    }   
    const descript = arr.join(" ");  
    des.textContent = descript;
       
};
getWeather(url);

