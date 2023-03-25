const baseUrl = "https://cataas.com"
const apiUrl = "https://cataas.com/cat?json=true";

function macska_betolt() {
    const kep = document.getElementById('kep');

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () { 
        // A szerver JSON-t ad vissza -> javascriptes objektumként leírt adat.
        const { responseText } = xhttp;
        console.log('responseText:', responseText);
        // JSON-t javascript objektummá tudjuk alakítani.
        const responseObject = JSON.parse(responseText);
        console.log('responseObject:', responseObject);
        // lekérdezem a kép url-jét az adatokból és azt beállítom az oldalon található kép forrásának.
        const imgUrl = responseObject.url;
        const imgSrc = baseUrl + imgUrl;
        kep.setAttribute("src", imgSrc);
    };
    xhttp.open("GET", apiUrl);
    xhttp.send();
}

document.addEventListener("DOMContentLoaded", () => {
    macska_betolt();
    const gomb = document.getElementById('gomb');
    gomb.addEventListener("click", macska_betolt);
});
