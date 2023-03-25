const countryInput = document.querySelector("#country");
const postalCodeInput = document.querySelector("#postalCode");
const helysegAdatok = document.querySelector("#adatok");
const buttonMegjelenit = document.querySelector("#megjelenit");

var countryCode = countryInput.options[countryInput.selectedIndex].value;

countryInput.addEventListener("change", () => {
  countryCode = countryInput.options[countryInput.selectedIndex].value;
  console.log(countryCode);
});


buttonMegjelenit.addEventListener('click', zipFetchAPI);
async function zipFetchAPI() {
  
}
//buttonMegjelenit.addEventListener('click', zipXMLHttpRequest);


function zipXMLHttpRequest() {
  let postalCode = postalCodeInput.value;
  var url = `https://api.zippopotam.us/${countryCode}/${postalCode}`;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      var myArr = JSON.parse(this.responseText);
      showZipCodeData(myArr);
      // var myArr = JSON.parse(this.responseText);
      //showZipCodeData(this.responseText);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();

}

function showZipCodeData(arr) {
  var adatok = arr;

  console.log(Object.keys(adatok));

  var out = "";
  while (helysegAdatok.lastChild) {
    helysegAdatok.removeChild(helysegAdatok.lastChild);
  }
  //console.log(adatok["post code"]);
  out += adatSor(
    "Ország",
    `${adatok["country"]} (${adatok["country abbreviation"]})`
  );
  out += adatSor("Megye", `${adatok["places"][0]["state"]}`);
  out += adatSor("Helységnév", `${adatok["places"][0]["place name"]}`);
  out += adatSor("GPS", ` ${adatok["places"][0]["latitude"]}, ${adatok["places"][0]["longitude"]}`);
  helysegAdatok.innerHTML = out;
}

function adatSor(key, value) {
  return `<p>${key}: ${value}</p>`;
}
