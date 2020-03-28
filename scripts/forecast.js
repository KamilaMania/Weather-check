//interacting with api

const key = "1DU7sAz41eTDuUaY04pJPicUbdaOQ551";
//weather info
const getWeather = async id => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}?apikey=${key}`;
  const response = await fetch(base + query, { mode: "cors" });
  const data = await response.json();
  return data[0];
};
//city info
const getCity = async city => {
  const base = " http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;
  const response = await fetch(base + query, { mode: "cors" });
  const data = await response.json();

  return data[0];
};
