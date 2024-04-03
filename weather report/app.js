//728592ecf3612692a08e7a21f5279608
//bengaluru

const lasturlpart=`&appid=728592ecf3612692a08e7a21f5279608&units=metric`;
const BaseUrl=`https://api.openweathermap.org/data/2.5/weather?q=`;

const btn=document.querySelector("#btn");
const input = document.querySelector(".search input");

btn.addEventListener("click",getit);
input.addEventListener("keypress",(eve)=>{
    if(eve.key=="Enter"){
        getit();
    }
})



async function getit(){
    const input=document.querySelector(".search input");
    
    if (input.value) {
    document.querySelector(".weather").style.display="block";
    const finalurl=`${BaseUrl}${input.value}${lasturlpart}`;
    const response=await fetch(finalurl);
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        document.querySelector(".error").style.display="none";
        const data=await response.json();
        console.log(data);
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+'°c';
        document.querySelector(".city").innerText=data.name;
        document.querySelector(".humidity").innerText=data.main.humidity+'%';
        document.querySelector(".wind").innerText=data.wind.speed+"km/h";
        const changeimg=document.querySelector(".weather-icon");
    
          if(data.weather[0].main=="Clouds"){
            changeimg.src="images/clouds.png"
          }
          else if(data.weather[0].main=="Clear"){
          changeimg.src="images/clear.png"
        }
        else if(data.weather[0].main=="Drizzle"){
          changeimg.src="images/drizzle.png"
        }
        else if(data.weather[0].main=="Mist"){
          changeimg.src="images/mist.png"
        }
        else if(data.weather[0].main=="Rain"){
            changeimg.src="images/rain.png"
          }
          else if(data.weather[0].main=="Snow"){
            changeimg.src="images/snow.png"
          }
          else if(data.weather[0].main=="Thunderstorm"){
            changeimg.src="images/Thunderstorm.png"
          }
    }

   

}

}
