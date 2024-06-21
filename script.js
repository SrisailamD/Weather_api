// let key="608ab65306e2133e301f485a808b33a1"
// let api="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"

let form=document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let fetchData=async()=>{
        let key="608ab65306e2133e301f485a808b33a1"
        let place=document.querySelector("#location").value
        let data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}`)
        let finalOutPut=await data.json()
        console.log(finalOutPut)
        let tempValue=document.querySelector(".temp_value")
        let humidValue=document.querySelector(".humid_value")
        let weatherCondition=document.querySelector("#weather_condition")

        let finalTemp=Math.round(finalOutPut.main.temp-273)
        let finalHumid=(finalOutPut.main.humidity)
        let finalCondition=(finalOutPut.weather[0].main).toLowerCase()

        tempValue.innerHTML=`${finalTemp}<sup>0</sup>C`
        humidValue.innerHTML=`${finalHumid}kmph`
        weatherCondition.innerHTML=`${finalCondition}`
        let weatherImage=document.getElementById("img")
        let background=document.getElementById("main_container")
        switch(finalCondition){
        case "haze":
            weatherImage.src='./images/Haze.jpg'
            background.style.backgroundImage="url(./images/haze.gif)"
            break;
        case "dust":
            weatherImage.src='./images/dust.png'
            background.style.backgroundImage="url(./images/dust.gif)"
            break;
        case "clouds":
             weatherImage.src='./images/clouds2.jpg'
             background.style.backgroundImage="url(./images/clouds_bgcgif.gif)"
             break;   
        case "snow":
            weatherImage.src='./images/Snow.jpg'    
             background.style.backgroundImage="url(./images/snow.gif)"
            break;   
         case "rain":
            weatherImage.src='./images/rain1.jpg' 
            background.style.backgroundImage="url(./images/rain.gif)" 
            break;      
            
        }
    

    }
    fetchData()
})



// let api="https://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=608ab65306e2133e301f485a808b33a1"