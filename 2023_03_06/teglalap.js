class Teglalap {
    #a;
    #b;

    constructor(a, b) {
        // mivel set propety-m van így azt is használhatom a privát adattag módosításához, már a konstruktorban is.
        this.a = a;
        this.b = b;
    }

    get a() {
        return this.#a;
    }
    set a(value) {
        this.#a = value;
    }
    get b() {
        return this.#b;
    }
    set b(value) {
        this.#b = value;
    }

    get kerulet() {
        return 2 * (this.a + this.b);
    }

    get terulet() {
        return this.a * this.b;
    }

    toString() {
        return `<tr>
        <td>${this.a}</td>
        <td>${this.b}</td>
        <td>${this.kerulet}</td>
        <td>${this.terulet}</td>
        </tr>`;
    }
}