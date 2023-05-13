a = 10;
var b = 5;
let c = 7;
const d = 15;

console.log("a:", a);
console.log("b:", b);
console.log("c:", c);
console.log("d:", d);

// const bemutatása
    a = 20;
    b = 20;
    c = 20;
    //d = 20; // konstants értéke nem változtatható, hibára fut

    console.log("a:", a);
    console.log("b:", b);
    console.log("c:", c);
    console.log("d:", d);

    const lista = [];
    lista.push(3, 5, 7);
    console.log(lista);


// semmi vs. var vs. let
var a = 25;
var b = 25;
// var c = 25; //újra deklarálni nem lehet let-el bevezetett változót

//let a = 30;
//let b = 30;
// let nem is használható újra deklarálásra

console.log("a:",a);
console.log("b:",b);

// var és semmi használatában nincs különbség, ugyan úgy viselkedik.

if (true) {
    nemLetezo = 5;
    var elagazasbanVar = 5;
    let elagazasbanLet = 5;
}
console.log("nemletezo:", nemLetezo);
console.log("var:", elagazasbanVar);
// console.log("let:", elagazasbanLet); // a let az csak abban a blokkban létezik ahol felvettük
// var - globális bárhonnan elérhető változó

// const vagy let kulcsszót használjuk!!!