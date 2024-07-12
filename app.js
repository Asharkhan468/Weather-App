const input = document.querySelector("#default-search");
const div = document.querySelector("#div");
let submitBtn = document.querySelector("#search-btn").addEventListener('click' , (event)=>{

  event.preventDefault();

  div.innerHTML=`<h2 class='text-green'>Loading....</h2>`

  
axios(
  `https://api.weatherapi.com/v1/current.json?key=068cb42292994c9480f121502241107&q=${input.value}&aqi=no`
)
  .then((resp) => {
    div.innerHTML = ` <div class="weather-card " id="weather-card">
        <h3 id="city-name">${resp.data.location.name}, ${resp.data.location.region} , ${resp.data.location.country}</h3>
        <div class="weather-icon" id="weather-icon"><img class="center size" src="${resp.data.current.condition.icon}" alt="icon"></div>
        <div class="temperature" id="temperature">${resp.data.current.temp_c}°C</div>
        <div class="description" id="description">Wind Speed: ${resp.data.current.wind_kph} Kph</div>
    </div>`;

    


  })

  .catch((err) => {
    console.log(err);
    div.innerHTML = `<div class="weather-card " id="weather-card">
        <h3 id="city-name">${input.value} is not found....</h3>
    </div>`;
    
  });

})





