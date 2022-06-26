// let temp = parseInt(document.getElementById("temp").innerText);
// let windSpeed = parseInt(document.getElementById("wind-speed").innerText);

// let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windSpeed,0.16)) + (0.4275*temp*Math.pow(windSpeed,0.16)));

// document.getElementById("wind-chill").innerText = chill + "°C";

const apiURL = "https://api.openweathermap.org/data/3.0/onecall?lat=18.4861&lon=69.9312&units=imperial&exclude=hourly,daily,minutely,alerts&appid=eac45e5be5788c06137dc6edfffeacbc";
const getWeather = async () => {
    const response = await fetch(apiURL);
    jsObject = await response.json();
    console.log(jsObject);
    document.getElementById("temp").textContent = jsObject.current.temp + "°F";
    document.getElementById("status").textContent = jsObject.current.weather[0].description;
    document.getElementById("status-img").setAttribute("src", `https://openweathermap.org/img/w/${jsObject.current.weather[0].icon}.png`);
    document.getElementById("wind-speed").textContent = jsObject.current.wind_speed + "km/h";

    if(jsObject.current.temp < 50) {
        
        let chill = Math.round((35.74 + (0.6215 * jsObject.current.temp))-(35.75 * Math.pow(jsObject.current.wind_speed,0.16)) + (0.4275*jsObject.current.temp*Math.pow(jsObject.current.wind_speed,0.16)));

        document.getElementById("wind-chill").innerText = chill + "°C";
    } else {
        document.getElementById("wind-chill").innerText = "N/A";
    }

  };
getWeather();