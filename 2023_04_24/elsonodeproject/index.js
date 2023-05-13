console.log("Hello World!");
/*
    Parancssorból futtatunk javascriptet:
    Előnyök:
        - Nem kell böngésző, hogy tesztelhető legyen a kód.
        - Kibővül a használati terület
            - fájlműveletek végrehajthatóak
            - konzolalkalmazás készíthető
            - webszerver létrehozása
            - javascript kód előállítása
                - Megírt javascript kód méretét csökkentjük, hogy kevesebb adatforgalommal járjon a letöltése
                - typescript átalakítása javascriptre
                - Modern frontend keretrendszerek kódjának átfordítása javascriptre
                - új javascript eszközök használata régi böngészőkben
*/

//console.log(document);
//window.alert("Hello")

/*
    Ha parancssorból futtatjuk a javascriptet akkor:
        - Nincs HTML dokumentumunk így a "document" változó nem érhető el
        - Nem böngésző nyitja meg a kódot, így a "window" változó sem érhető el.
*/

/*
    Ha másik JS állományt szeretnénk használni akkor előtte be kell importálni.
        - Amennyiben saját js állományt szeretnénk importálni akkor mindig ./-el kell kezdeni az útvonalat, amúgy a node saját moduljai között fog keresni, vagy a letöltött külső modulok között.
*/
const Szamologep = require('./Szamologep');
const szamologep = new Szamologep();

const a = 10;
const b = 23;
const osszeg = szamologep.osszeg(a, b);
console.log(osszeg);
