const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const dateInput = document.querySelector("#date");
let date = new Date();
dateInput.max = date.toISOString().split("T")[0];
date.setFullYear(date.getFullYear() - 100);
dateInput.min = date.toISOString().split("T")[0];
date.setFullYear(
  date.getFullYear() + 35 + Math.random() * 60,
  Math.random() * 12 + 1
);
dateInput.value = date.toISOString().split("T")[0];
const selectButton = document.querySelector("#select");
const updateButton = document.querySelector("#update");
const insertButton = document.querySelector("#insert");
const deleteButton = document.querySelector("#delete");
const updateValaszt = document.getElementsByName("updateValszt");
const divCards = document.querySelector("#divCards");
const useridHidden = document.querySelector("#userid");

selectButton.addEventListener("click", showAllUser);
insertButton.addEventListener("click", insertUser);
deleteButton.addEventListener("click", deleteUser);
updateButton.addEventListener("click", updateUser);

function onLoad() {
  var currentdate = new Date();
  var datetime =
    "Last load: " +
    currentdate.getFullYear() +
    "-" +
    (currentdate.getMonth() + 1) +
    "-" +
    currentdate.getDate() +
    " @ " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();
  const currentTimeElement = document.querySelector("#currentTime");
  currentTimeElement.innerHTML = datetime;
}
function insertUser() {
  let insertURL = "https://api-generator.retool.com/3B5UTv/data";
  let sendingBody = getUserJSON();
  var valami = postData(insertURL, sendingBody);
  console.log(valami);
}
function getUserJSON() {
  //-- validálás?
  let name = nameInput.value;
  let email = emailInput.value;
  let date = dateInput.value;
  date = new Date(date).toISOString().split("T")[0];
  console.log(date);
  let user = `{ "name": "${name}", "email": "${email}", "birthdate": "${date}" }`;
  return JSON.parse(user);
}
// Example POST method implementation:
async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

async function showAllUser() {
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
        <div class="card-header  bg-secondary text-white">
             ${params[i].name}
        </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${params[i].email}</li>
                <li class="list-group-item">${year} - ${month} - ${day}</li>
            </ul>
            <div class="d-flex justify-content-around p-2">
              <form>
                <button type="button" class="btn btn-outline-primary" name="kivalaszt" value="${params[i].id}" onclick="Valasztas(this)"><i class="fa-solid fa-check"></i> Select</button>
              </form>
            </div>
      </div>`;
    divCards.appendChild(newCard);
    //console.log(newCard.innerHTML);
  }
}
function updateUser() {
  let url = `https://api-generator.retool.com/3B5UTv/data/${userid.value}`;
  const data = getUserJSON();

  fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      clear_input_fields();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  showAllUser();
}


function clear_input_fields(params) {
  nameInput.value = "";
  emailInput.value = "";
  useridHidden.value = "-1";
}
async function Valasztas(userid) {
  clear_input_fields();
  //-- kiválasztott user adatainak a betöltése a beviteli mezőkbe
  let url = `https://api-generator.retool.com/3B5UTv/data/${userid.value}`;
  //-- lekérdezzük a távoli helyről az adatokat
  fetch(url)
    .then((response) => response.json())
    .then((data) => filling_input_fields(data));
  removeAllChildNodes(divCards);
}

function filling_input_fields(params) {
  nameInput.value = params['name'];
  emailInput.value = params['email'];
  let date = new Date(params['birthdate']);
  date.setMonth(date.getMonth() - 1);
  date = date.toISOString().split('T')[0];
  dateInput.value = date;
  useridHidden.value = params['id'];
}

function deleteUser(userid) {

}