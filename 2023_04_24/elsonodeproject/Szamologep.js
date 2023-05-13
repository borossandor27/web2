class Szamologep {
    osszeg = (a, b) => {
        return parseFloat(a) + parseFloat(b);
    }
}

/*
    Másik állományban szeretnénk beimportálni az osztályt,
    ki kell exportálnunk az osztályt, hogy az importálást tudja, hogy mit kell importálnia
*/

module.exports = Szamologep