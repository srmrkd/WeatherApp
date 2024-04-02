const tempratue = document.querySelector('.temprature');



/* To run it all after the window loads */
window.addEventListener('load', ()=>{
    /* Define the cordinates to find the geo of my current location */
    let longitude;
    let latitude;

    /* navigator.geolocation is a built-in JavaScript object that provides access to the device's geolocation information, such as latitude and longitude coordinates. */
    if (navigator.geolocation) { /* Checks if the browser supports the Geolocalization */
        navigator.geolocation.getCurrentPosition(position =>{
            longitude = position.coords.longitude;
            latitude = position.coords.latitude;
            console.log(longitude, latitude);
        });
    } else {
        tempratue.style.display = 'block';
        tempratue.innerHTML = `<p> Browser does not support Geolocalization`;
    } 
    
    // API Key
    const key = `84112e343d54954aac2caa417aa9d8ae`;

    // Get Weather from API Provider
    let api =`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

    fetch(api)
        .then(response =>{
            return response.json();
        })
        .then(data => {
            console.log(data);  
        })
})