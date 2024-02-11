const windChill = document.getElementById("windChill");
const temperature = document.getElementById("temp").innerText;
const windSpeed = document.getElementById("speed").innerText;
console.log(temperature);
console.log(windSpeed);
// const tempValue = temperature.value;
// const speedValue = windSpeed.value;
const speeds = parseFloat(windSpeed);
const temps = parseFloat(temperature);
console.log(temps)
console.log(speeds)

function windChillFunct(speed, temp) {      
    let wChill = 35.74 + temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    wC = Math.round(wChill) 
    console.log(wC)
    windChill.innerHTML =   `${wC} &#8451; `;    
};

windChillFunct(speeds,temps);
