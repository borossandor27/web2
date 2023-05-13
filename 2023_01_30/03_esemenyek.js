function esemenykezelokFelvetele() {
    // DOM: https://www.w3schools.com/js/js_htmldom.asp
    const nevInput = document.getElementById("nev");
    const elkuldGomb = document.getElementById("nevElkuld");
    const koszontoFelirat = document.getElementById("koszontes");
    elkuldGomb.addEventListener("click", nevKiirasa);

    function nevKiirasa() {
        const nev = nevInput.value;
        if (nev.length == 0) {
            koszontoFelirat.innerHTML = "";
        } else {
            koszontoFelirat.innerHTML = "Hello " + nev;
        }
    }



    const villanykorte = document.getElementById("villanykorte");
    /*
    villanykorte.addEventListener("click", () => {
        if (villanykorte.src.includes("pic_bulboff.gif")) {
            villanykorte.src = "pic_bulbon.gif"
        } else {
            villanykorte.src = "pic_bulboff.gif"
        }
    });
    */
    // mouseover - rajta tartom az egeret | mouseenter - belép az egér
    villanykorte.addEventListener("mouseenter", () => {
        villanykorte.src = "pic_bulbon.gif"
    });
    villanykorte.addEventListener("mouseleave", () => {
        villanykorte.src = "pic_bulboff.gif"
    });



    var konzolosUtasitasok = document.getElementById("konzolosUtasitasok");
}

function kiirKonzolra() {
    const konzolosInput = document.getElementById("konzolosInput");
    console.log("Beviteli mező tartalma:", konzolosInput.value);
}

function konzolosFocus() {
    konzolosUtasitasok.innerHTML = "Írj be valamit"
}

function konzolosBlur() {
    konzolosUtasitasok.innerHTML = "Nézd meg a konzolt"
}