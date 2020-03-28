//dom manipulation

const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");

const updateUI = data => {
  //distructering properties
  const { cityDetails, weather } = data;

  //update details
  details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
          <div class="my-3">${weather.WeatherText}</div>
          <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <spam>&deg;C</spam>
          </div>`;
  //remove the d-none class if present
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};
const udpateCity = async city => {
  const cityDetails = await getCity(city);
  const weather = await getWeather(cityDetails.Key);
  return {
    cityDetails,
    weather
  };
};

cityForm.addEventListener("submit", e => {
  e.preventDefault();

  //getting city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  //update the ui with new city
  udpateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));
});
