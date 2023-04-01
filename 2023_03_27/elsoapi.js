const url = "https://api-generator.retool.com/3B5UTv/data";
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const dateInput = document.querySelector("#date");
const submitButton = document.querySelector("#submit");
const queryButton = document.querySelector("#query");
const users = document.querySelector("#users");
submitButton.addEventListener('click', insert);
queryButton.addEventListener('click', select);
document.addEventListener("DOMContentLoaded", select);

async function insert() {
    let name = nameInput.value;
    let email = emailInput.value;
    let date = dateInput.value;
    const person = {
        name: name,
        email: email,
        birthdate: date,
    }

    /*
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(person)
    }).then(response => {
        if (response.status === 201) {
            nameInput.value = "";
            emailInput.value = "";
            dateInput.value = "";
            select();
        }
    });
    */
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(person)
    });
    /*
    const data = await response.json();
    console.log(data);
    */
    if (response.status === 201) {
        nameInput.value = "";
        emailInput.value = "";
        dateInput.value = "";
        select();
    }
}

function select() {
    //-- a már meglévők eltávolítása
    while (users.lastchild) {
        users.removeChild(users.lastchild);
    }
    users.innerHTML = '';

    //-- lekérdezzük a távoli helyről az adatokat
    fetch(url)
        .then((response) => response.json())
        .then((data) => cards(data));

}

function cards(params) {
    console.log(params);
    for (let i = 0; i < params.length; i++) {
        let date = new Date(params[i].birthdate);
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();
        console.log(date);
        const newCard = document.createElement('div');
        newCard.innerHTML = `<div class="card">
        <div class="card-header">
             ${params[i].name}
        </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${params[i].email}</li>
                <li class="list-group-item">${year} - ${month} - ${day}</li>
            </ul>
            </div>`;
        newCard.classList.add("col-md-6");
        newCard.classList.add("col-lg-4");
        users.appendChild(newCard);
        console.log(newCard.innerHTML);
    }

}