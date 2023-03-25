const pont = new Pont(3, 5);
/*
const x = pont.x;
const y = pont.y;
*/

/* Változó inicializálása dekonstruktor segítségével
 *      Csak akkor működik, ha az objektumnak megfelelő nevű tagja van, ellenkező esetben "undefined" lesz a változó
 */
const { x, y, z } = pont;

console.log('x:', x);
console.log('y:', y);
console.log('z:', z);