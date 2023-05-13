const regisztraciok = [];

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("regisztracio_gomb").addEventListener('click', regisztracio);
});

function regisztracio() {
    const regisztracios_urlap = document.forms["regisztracios_urlap"];
    const nev = regisztracios_urlap["nev"].value;
    const email = regisztracios_urlap["email"].value;
    const nem = regisztracios_urlap["nem"].value;
    const vegzettseg = regisztracios_urlap["vegzettseg"].value;
    const honnan_hallott_inputok = regisztracios_urlap["honnan_hallott[]"];
    const honnan_hallott = [];
    for (let index = 0; index < honnan_hallott_inputok.length; index++) {
        const element = honnan_hallott_inputok[index];
        if (element.checked) {
            honnan_hallott.push(element.value);
        }
    }

    let mindent_megadott = true;
    if (nev.length == 0) {
        window.alert("A név megadása kötelező");
        mindent_megadott = false;
    }

    if (email.length == 0) {
        window.alert("Az e-mail megadása kötelező");
        mindent_megadott = false;
    }

    if (nem.length == 0) {
        window.alert("A nem kiválasztása kötelező");
        mindent_megadott = false;
    }

    if (vegzettseg.length == 0) {
        window.alert("Az iskolai végzettség kiválasztása kötelező");
        mindent_megadott = false;
    }

    if (honnan_hallott.length == 0) {
        window.alert("Adjon meg legalább egy helyet ahonnan halott rólunk");
        mindent_megadott = false;
    }

    if (mindent_megadott) {
        const regisztracios_adatok = {
            nev: nev,
            email: email,
            nem: nem,
            vegzettseg: vegzettseg,
            honnan_hallott: honnan_hallott
        };
        regisztraciok.push(regisztracios_adatok);
        console.log(regisztraciok);
    }
}
