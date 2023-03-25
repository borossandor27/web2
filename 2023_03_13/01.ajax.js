/*
 * Asynchronous JavaScript And XML.
 *  JavaScriptből indítunk HTTP kérést egy webszerver felé ami válaszol a kérésünkré és visszaküld valamit.
 *      - JavaScript - a programozási nyelv ami használja
 *      - XML - régebben ezt az adatszerkezetet használták az adatok továbbítására
 *      - Aszinkron - Elindított feladat később fog befejeződni, párhuzamosan fog futni a fő folyamattal, és ha majd befejeződött a háttérfolyamat utána lesz feldolgozva az eredmény.
 */

document.addEventListener("DOMContentLoaded", () => {
    // 01_ajax.txt fájl tartalmát beírjuk a bekezdésbe.
    const xhttp = new XMLHttpRequest();
    const bekezdes = document.getElementById('bekezdes');

    xhttp.onload = function () { 
        console.log(xhttp);
        bekezdes.innerHTML = xhttp.responseText;
    };

    // AJAX kérés csak webszerverre indítható, ha nem live serverrel van megnyitva az oldal akkor hibára futunk.
    xhttp.open("GET", "01_ajax.txt");
    xhttp.send();
});