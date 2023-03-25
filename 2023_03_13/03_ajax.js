const url = "https://retoolapi.dev/EOMMne/people";

document.addEventListener("DOMContentLoaded", () => {
    adatok_listazasa();
});

function adatok_listazasa() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        const { responseText } = xhttp;
        const peopleList = JSON.parse(responseText);
        console.log(peopleList);
        let html = "";
        for (let index = 0; index < peopleList.length; index++) {
            const element = peopleList[index];
            html += `<tr>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.email}</td>
            <td>${element.birth_date}</td>
            </tr>`;
        }
        const tablazat = document.getElementById('tablazat');
        tablazat.innerHTML = html;
    };
    xhttp.open("GET", url);
    xhttp.send();
}