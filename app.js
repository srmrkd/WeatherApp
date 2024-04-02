/* To run it all after the window loads */
window.addEventListener('load', ()=>{
    /* Define the cordinates to find the geo of my current location */
    let latitude;
    let longitude;

    /* navigator.geolocation is a built-in JavaScript object that provides access to the device's geolocation information, such as latitude and longitude coordinates. */
    if (navigator.geolocation) { /* Checks if the browser supports the Geolocalization */
        navigator.geolocation.getCurrentPosition(position =>{
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            console.log(latitude, longitude);
            // API Key
            const key = `84112e343d54954aac2caa417aa9d8ae`;
            // Get Weather from API Provider
            let api = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`;
            async function checkWeather() {
                fetch(api)
                .then(response =>{
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    document.querySelector('.location-timezone').innerHTML = data.city.name;
                    document.querySelector('.location img');
                    document.querySelector('.temprature h2').innerHTML = data.list[0].main.temp;
                    document.querySelector('.feelslike').innerHTML = data.list[0].main.feels_like;
                    document.querySelector('.humidity').innerHTML = data.list[0].main.humidity;
                    document.querySelector('.wind').innerHTML = data.list[0].wind.speed;
                })
            }
            checkWeather();
        });
    } else {
        tempratue.style.display = 'block';
        tempratue.innerHTML = `<p> Browser does not support Geolocalization`;
    } 

})