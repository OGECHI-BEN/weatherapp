// https://api.openweathermap.org/data/2.5/weather?q=germany&appid=891b0dbcb1d010da0ede46f4a263effd
//let ass =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
//const apiUrlOrigin ="https://api.openweathermap.org/data/2.5/weather?units=imperial&q="; always take note of the ?units=metric or units = imperial(us style)

const apiKey = "891b0dbcb1d010da0ede46f4a263effd";
const apiUrlOrigin ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchButton = document.querySelector(".search Button");
const searchInput  = document.querySelector(".search input");
const weatherImage = document.querySelector(".image-icon");

const getWeatherData = (city) =>{
    const apiUrl =`${apiUrlOrigin}${city}&appid=${apiKey}`;
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange',() =>{
       
        if(request.readyState === 4 && request.status === 200){
           // console.log(request.responseText)
            const data = JSON.parse(request.responseText)  
            displayWeatherData(data);
            document.querySelector(".error").style.display ="none";
            document.querySelector(".breakdown").style.display = "block";
            document.querySelector(".more").style.display = "grid";
        }
        else if(request.status == 404){
            document.querySelector(".error").style.display ="block";
            document.querySelector(".breakdown").style.display = "none";
            document.querySelector(".more").style.display = "none";

        }
    }) 

    request.open('GET',apiUrl)
    request.send();  
}  

  function displayWeatherData(data){
    console.log(data)
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    if(data.weather[0].main == 'Clouds'){
        weatherImage.src  = "images/clouds.png";
    } 
    else if (data.weather[0].main == 'Rain'){
        weatherImage.src  = "images/rain.png"
    } 
    else if (data.weather[0].main == 'Clear'){
        weatherImage.src  = "images/clear.png"
    } 
    else if (data.weather[0].main == 'Drizzle'){
        weatherImage.src  = "images/drizzle.png"
    }
    else if (data.weather[0].main == 'Mist'){
        weatherImage.src  = "images/mist.png"
    }
    else if (data.weather[0].main == 'Clear'){
        weatherImage.src  = "images/clear.png"
    }
    else if (data.weather[0].main == 'Wind'){
        weatherImage.src  = "images/wind.png"
    }
    else if (data.weather[0].main == 'Snow'){
        weatherImage.src  = "images/snow.png"
    }
  }

searchButton.addEventListener ("click", () =>{
    getWeatherData(searchInput.value)
});

// function displayGreeting(){
//     let name = document.getElementById('name').value;
//     if(name.trim()=== ""){
//         alert('please enter your name')
//     };

//     let greetings = alert("Hello" + " "+ name +" " + "welcome to my website");
//     document.getElementById('greetingMessage').innerText = greetings;
// }


