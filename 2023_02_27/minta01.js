const lista = [];

document.addEventListener('DOMContentLoaded', () => {
    const input_a = document.getElementById('input_a');
    const input_b = document.getElementById('input_b');
    const hozzaad_gomb = document.getElementById('hozzaad_gomb');
    const megjelenit_gomb = document.getElementById('megjelenit_gomb');
    const megjelenites = document.getElementById('megjelenites');

    hozzaad_gomb.addEventListener('click', () => {
        const a = parseInt(input_a.value);
        const b = parseInt(input_b.value);
        const objektum = {
            a: a,
            b: b,
            osszeg() {
                return this.a + this.b;
            },
            kulonbseg() {
                return this.a - this.b;
            },
            tablazatSor() {
                return `<tr>
                <td>${this.a}</td>
                <td>${this.b}</td>
                <td>${this.osszeg()}</td>
                <td>${this.kulonbseg()}</td>
                </tr>`;
            }
        }
        lista.unshift(objektum);
    });

    megjelenit_gomb.addEventListener('click', () => {
        let html = "";
        for (let index = 0; index < lista.length; index++) {
            const element = lista[index];
            html += element.tablazatSor();
        }
        megjelenites.innerHTML = html;
    });
});