window.addEventListener('load',()=>{
    let long;
    let lat;
    let temperatureDescription=document.querySelector('.temp-description');
    let locationTtimezone=document.querySelector('.location-timezone');
    let temperatureDegree=document.querySelector('.temp-degree');
    let weathericons=document.querySelector('.icon');
    let windSpeed=document.querySelector('.windspeed');
    let humidity=document.querySelector('.humidity');
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long=position.coords.longitude;
            lat=position.coords.latitude;
            const proxy=`https://cors-anywhere.herokuapp.com/`;
            const key="1a6454710b6900f8b2c6531c45b22eea ";
            const api=`${proxy}http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`;
            
            fetch(api)
            .then(response =>{
                return response.json();
            })
            .then(data =>{
             
                temperatureDegree.textContent=data.main.temp;
                temperatureDescription.textContent=data.weather[0].description;
                locationTtimezone.textContent=data.name;
                weathericons.textContent=data.sys.country;
                windSpeed.textContent=data.wind.speed;
                humidity.textContent=data.main.humidity;
            });
        });
    }
});