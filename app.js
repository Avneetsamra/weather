const get_btn =document.getElementById('getWeather')
const show_vlu = document.getElementById('display')
get_btn.addEventListener('click',()=> {
    const url = 'https://locationiq.org/v1/search.php?key=538f747662620d589711'
   const urlweatherdata = 'http://api.openweathermap.org/data/2.5/weather?APPID=a3765a011c5f4169caee5f1d41cb543d'
    const cityvalues = document.getElementById('n_city')
    const countryvalues= document.getElementById('n_country')
    fetch(url+'&format=json&q='+cityvalues.value+','+countryvalues.value)
   .then((function1) => function1.json())
     .then((loc) => {
     console.log('the longitude and latitude for this location are: lon ${data[0].lon} lat ${data[0].lat}')
    fetch(urlweatherdata+'&units=metric&lat='+loc[0].lat+'&lon='+loc[0].lon)
   .then((function1) => function1.json())
   .then((weather) => {
     const display = "Temperature : "+ weather.main.temp +" &deg;C <br>Weather : "+ weather.weather[0].description +"<br> wind velocity : "+ weather.wind.speed +"m/s <br> latitude : "+ weather.coord.lat +"<br> longitude : "+ weather.coord.lon +"";
     showresult.innerHTML = display;
          })
    .catch((e) => console.log(e, "wrong data"))
      })
      .catch((e) => console.log(e, "wrong data"))
})

