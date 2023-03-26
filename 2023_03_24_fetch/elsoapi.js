const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const dateInput = document.querySelector("#date");
const selectButton = document.querySelector("#select");
//const updateButton = document.querySelector("#update");
const insertButton = document.querySelector("#insert");
//const deleteButton = document.querySelector("#delete");
const divCards = document.querySelector("#divCards");
//const users = document.querySelectorAll("#users");
insertButton.addEventListener("click", insert);

async function insert() {
  let name = nameInput.value;
  let email = emailInput.value;
  let date = dateInput.value;
}

selectButton.addEventListener("click", select);

function select() {
  //-- a már meglévők eltávolítása
  removeAllChildNodes(divCards);

  //-- lekérdezzük a távoli helyről az adatokat
  fetch("https://api-generator.retool.com/3B5UTv/data")
    .then((response) => response.json())
    .then((data) => cards(data));
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function cards(params) {
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
            <div class="d-flex justify-content-around">
              <form>
                <button type="button" class="btn btn-outline-primary" id="update"> Update</button>
                <button type="button" class="btn btn-outline-danger" id="delete"><i class="fa-regular fa-trash-can"></i> Delete</button>
              </form>
            </div>
      </div>`;
    divCards.appendChild(newCard);
    //console.log(newCard.innerHTML);
  }
}
