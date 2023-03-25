const countryInput = document.querySelector("#country");
const codeInput = document.querySelector("#code");
const submitButton = document.querySelector("#submit");
var country = countryInput.value;
var postalCode = 1146;
countryInput.addEventListener("change", () => {
	country = countryInput.value;
	console.log(country);
});

submitButton.addEventListener("click", () => {
	postalCode = codeInput.value;
	var client = new XMLHttpRequest();
	let url = `http://api.zippopotam.us/${country}/${postalCode}`;
	console.log(url);
	client.open("GET", url, true);
	client.onreadystatechange = function () {
		if (this.readyState == 4) {
			let response=this.responseText;
			megjelenit(response);
		};
	};
	client.send();
});

function megjelenit(params) {
	const kijelzoBekezdes=document.querySelector("#eredmeny");
	var adatok=JSON.parse(params).places[0];
	let valaszTxt="";
	console.log(adatok);
	valaszTxt=`place name: ${adatok["place name"]}<br>`
	valaszTxt+=`megye: ${adatok["state"]}<br>`
	valaszTxt+=`latitude: ${adatok["latitude"]}<br>`
	valaszTxt+=`longitude: ${adatok["longitude"]}<br>`
	;
	kijelzoBekezdes.innerHTML=valaszTxt;
}


