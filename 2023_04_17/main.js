// DOMContentLoaded esemény
/*
document.addEventListener("DOMContentLoaded", function () {

});
$(document).ready(function () {
    
});
*/
// Rövidített szintakszis
$(function() {
    /*
    document.getElementById("koszonto.gomb").addEventListener("click", function(e) {
        e.preventDefault();
        const nev = document.getElementById("nev_input").value;
        document.getElementById("koszonto_szoveg").innerHTML = "Hello "+ nev;
    })
    */

    // Köszöntő --------------------------
    $("#koszonto_gomb").click(function(e) {
        e.preventDefault();
        const nev = $("#nev_input").val();
        $("#koszonto_szoveg").html("Hello " + nev);
    });

    // Villanykörte -----------------------
    $("img[alt='Villanykörte']").mouseenter(function() {
        $("img[alt='Villanykörte']").attr("src", "pic_bulbon.gif");
    });
    $("img[alt='Villanykörte']").mouseleave(function() {
        $("img[alt='Villanykörte']").attr("src", "pic_bulboff.gif");
    });

    // Téglalap --------------------------
    $("#hozzaad").click(function(e) {
        e.preventDefault();
        const a = parseInt($("#a_input").val());
        const b = parseInt($("#b_input").val());
        const teglalap = {
            a: a,
            b: b,
            kerulet: function() {
                return 2 * (this.a + this.b);
            },
            terulet: function() {
                return this.a * this.b;
            },
            toString: function() {
                return `<tr>
                     <td>${this.a}</td>
                     <td>${this.b}</td>
                     <td>${this.kerulet()}</td>
                     <td>${this.terulet()}</td>
                </tr>`
            }
        }
        $("#teglalap_tablazat").html(
            $("#teglalap_tablazat").html() + teglalap.toString()
        );
    });
});