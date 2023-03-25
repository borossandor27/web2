const reload = document.querySelector("#reload");
const image = document.querySelector("#kep");
const gps = document.querySelector("#gps");
const buttonGPS = document.querySelector("#buttonGPS");
const buttonIdojaras = document.querySelector("#buttonIdojaras");
const orszagkod3 = document.querySelector("#orszagkod3");
var latitude = 47.6763642;
var longitude = 21.5095764;

buttonGPS.addEventListener("click", getLocation);
buttonIdojaras.addEventListener("click", getIdojarasAdatok);
orszagkod3.addEventListener("change", getOrszagAdatok);
reload.addEventListener("click", () => {
  console.log("ok");

  postData("https://example.com/answer", { answer: 42 }).then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
});

//-- helymeghatározáshoz ----
//-- navigator.geolocation.getCurrentPosition(getLocation, location_error, options);

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};
function location_error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

function setLocation(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  gps.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
}
async function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      setLocation, //-- sikeres teljesítés után az adatokat tartalmazó objektumot kapja paraméterként
      location_error,
      options //-- részletesebben: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    );
  } else {
    gps.innerHTML = "Geolocation is not supported by this browser.";
  }
}

// Example POST method implementation:
async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

async function getIdojarasAdatok() {
  //-- a fetch() API segítségével ---------
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4e0486642dmsh7fa86fe6268c685p1d64a2jsnae3afcc8b0df",
      "X-RapidAPI-Host": "dark-sky.p.rapidapi.com",
    },
  };
  let idojarasURL = `https://dark-sky.p.rapidapi.com/${latitude},${longitude}?units=auto&lang=en`;
  fetch(idojarasURL, options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
// WARNING: For GET requests, body is set to null by browsers.

async function getOrszagAdatok() {
  //-- a hagyományos XMLHttpRequest Object-el
  let code = orszagkod3.options[orszagkod3.selectedIndex].value;
  console.log(code);
  let countriurl = `https://restcountries.com/v3.1/alpha/${code}`;
  fetch(countriurl)
    .then((res) => res.json())
    .then((data) => orszagAdatatokMegjelenitese(data))
    .catch((err) => console.log("Error:", err.message)); // (I fixed this)
  

    function orszagAdatatokMegjelenitese({
      name,
      capital,
      callingCodes,
      population,
      currencies,
      region,
    }) {
      params = JSON.stringify(params);
    
      const orszagAdatok = document.querySelector("#orszagAdatok");
      while (orszagAdatok.lastChild) {
        orszagAdatok.removeChild(orszagAdatok.lastChild);
      }
      console.log(params);
      let names = JSON.stringify(params);
      const p1 = document.createElement("p");
      p1.textContent = `Országnév: ${names["common"]}`;
      orszagAdatok.appendChild(p1);
    }
    function initialize({
    name,
    capital,
    callingCodes,
    population,
    currencies,
    region,
  }) {
    console.log({
      name,
      capital,
      callingCodes,
      population,
      currencies,
      region,
    });
  }
}


