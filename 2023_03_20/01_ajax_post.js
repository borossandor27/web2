const url = "https://retoolapi.dev/a365Lb/people";

document.addEventListener("DOMContentLoaded", () => {
    emberek_listazasa();
    const uj_ember_urlap = document.getElementById('uj_ember_urlap');
    uj_ember_urlap.addEventListener("submit", (event) => {
        event.preventDefault();
        uj_ember_felvetele();
    });
});

function uj_ember_felvetele() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const birth_date = document.getElementById('birth_date').value;
    const person = {
        name: name,
        email: email,
        birth_date: birth_date
    };
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        emberek_listazasa();
    };
    xhttp.open("POST", url);

    /* Fejléc mező hozzáadása
     *  Különböző plusz adatok adhatóak hozzá a kéréshez, amit a szerver értelmezhet pl.:
     *      Content-Type: a kérésben elküldött adat típusa
     *  Az open függvény hívás után kell elhelyezni.
     */
    xhttp.setRequestHeader("Content-Type", "application/json");
    // A javascriptes objektumot küldés előtt JSON stringé kell alakítani.
    xhttp.send(JSON.stringify(person));
}

function ember_torlese(id) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {  
        emberek_listazasa();
    };
    xhttp.open("DELETE", `${url}/${id}`);
    xhttp.send();
}

function emberek_listazasa() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        const { responseText } = xhttp;
        const peopleList = JSON.parse(responseText);
        console.log(peopleList);
        let html = "";
        for (let index = 0; index < peopleList.length; index++) {
            const element = peopleList[index];
            html += `<tr>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.email}</td>
            <td>${element.birth_date}</td>
            <td><button onclick="ember_torlese(${element.id})">X</button></td>
            </tr>`;
        }
        const tablazat = document.getElementById('tablazat');
        tablazat.innerHTML = html;
    };
    xhttp.open("GET", url);
    xhttp.send();
}