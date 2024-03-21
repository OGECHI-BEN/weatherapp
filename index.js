// https://api.openweathermap.org/data/2.5/weather?q=germany&appid=891b0dbcb1d010da0ede46f4a263effd
//let ass =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`


const apiKey="891b0dbcb1d010da0ede46f4a263effd";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weatherImage =document.querySelector('.image-icon')
let searchArea = document.querySelector(".search input");
let searchButton = document.querySelector(".search button");
//async function checkWeather(city){} = const getWeather = async (city)=>{}; the first is a normal function the second is an arrow function

const getWeather = async (city) => {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();
    if(response.status === 404){
        document.querySelector('.error').style.display ='block';
        document.querySelector('.breakdown').style.display ='none';
        document.querySelector('.more').style.display ='none';
    }
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    if(data.weather[0].main =='Clouds'){
        weatherImage.src ="images/clouds.png";
    }
    else if (data.weather[0].main == 'Rain'){
        weatherImage.src = "images/rain.png";
    }
    else if(data.weather[0].main == 'Clear'){
        weatherImage.src ="images/clear.png";
    }
    else if(data.weather[0].main =='Drizzle'){
        weatherImage.src ="images/drizzle.png";
    }
    else if(data.weather[0].main == 'Humidity'){
        weatherImage.src ="images/humidity.png" ;
    }
    else if(data.weather[0].main == 'Mist'){
        weatherImage.src ="images/humidity.png";
    }
    else if(data.weather[0].main =='Snow'){
        weatherImage.src == "images/snow.png";
    }
    else if(data.weather[0].main == 'Wind'){
        weatherImage.src = "images/wind.png";
    }
    document.querySelector('.error').style.display ='none';
    document.querySelector('.breakdown').style.display ='block';
    document.querySelector('.more').style.display ='grid';
}
searchButton.addEventListener("click", () =>{
    getWeather(searchArea.value)
});

let presentDate = new Date();
    const presentDay =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const presentMonth=['January','February','March', 'April','May','June','July','August','September','October','November','December'];

 let days = presentDay[presentDate.getDay()];
 let month =presentMonth[presentDate.getMonth()];
 let date = presentDate.getDay();
 let year = presentDate.getFullYear();

 

 let currentDate = `${days}, ${month} ${date}, ${year}`;

  document.querySelector('.current-date').innerHTML = currentDate;
