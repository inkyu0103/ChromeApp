const weather = document.querySelector(".weather");
const API_KEY ="170e621e114028fd16c3c552864bd4b2";
const COORDS ="coords";


const getWeather = (latitude,longitude) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json()
    }).then(function(json){
        const temparature = json.main.temp;
        const place = json.name;
        weather.innerText = `🌡 ${temparature} 🌏 ${place}`;
    })

}



const saveCoords = (coordsObj) => {
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}


const handleGeoSuccess = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

const handleGeoError = () =>{
    console.log('Can not access');
}
const askForCoords = () =>{
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}




const loadCoords = () =>{
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null){
        askForCoords();
    } else{
        //getweather;
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

const initWeather = () => {
    loadCoords();
}

initWeather();