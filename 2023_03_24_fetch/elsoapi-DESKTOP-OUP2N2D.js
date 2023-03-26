const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const dateInput = document.querySelector("#date");
const selectButton = document.querySelector("#select");
const updateButton = document.querySelector("#update");
const insertButton = document.querySelector("#insert");
const deleteButton = document.querySelector("#delete");
const cardsDiv = document.querySelector("#userCards");

insertButton.addEventListener("click", insert);

async function insert() {
  let name = nameInput.value;
  let email = emailInput.value;
  let date = dateInput.value;
}

selectButton.addEventListener("click", select);

function select() {
  //-- a már meglévők eltávolítása
  removeAllChilds(document.getElementById("userCards"));
  //-- lekérdezzük a távoli helyről az adatokat
  fetch("https://api-generator.retool.com/3B5UTv/data")
    .then((response) => response.json())
    .then((data) => cards(data));
}

function removeAllChilds(parent) {
  while (parent.firstChild) {
    // The list is LIVE so it will re-index each call
    parent.removeChild(parent.lastChild);
  }
}

function cards(params) {
  const panel = userCards;
  for (let i = 0; i < params.length; i++) {
    let date = new Date(params[i].birthdate);
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    const newCard = document.createElement("div");
    newCard.innerHTML = `<div class="card m-3" style="width: 18rem;">
        <div class="card-header">
             ${params[i].name}
        </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${params[i].email}</li>
                <li class="list-group-item">${year} - ${month} - ${day}</li>
            </ul>
            </div>`;
    panel.appendChild(newCard);
    //console.log(newCard.innerHTML);
  }
}
