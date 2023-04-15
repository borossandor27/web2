const companyInput = document.getElementById("companyName");
const productInput = document.getElementById("productName");
const darabInput = document.getElementById("darab");
const fizetendoInput = document.getElementById("fizetendo");
const idHidden = document.getElementById("id");
const kartyakDiv = document.getElementById("kartyak");
const lapokLista = document.getElementById("lapozas");
var maxRendelesSzam = 0;
var actPageNum = 1;

const createButton = document.getElementById("create");
createButton.addEventListener("click", createNewRendelesItem);
const readButton = document.getElementById("read");
readButton.addEventListener("click", readAllRendeles);
const updateButton = document.getElementById("update");
readButton.addEventListener("click", updateRendeles);

function createNewRendelesItem() {
  let url = "https://retoolapi.dev/tFpb3p/data"; //-- POST
  const data = getDataJSON("insert");

  fetch(url, {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data); //-- 200-299
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function getDataJSON(params) {
  let company = companyInput.value;
  let product = productInput.value;
  let darab = darabInput.value;
  let fizetendo = fizetendoInput.value;
  let id = idHidden.value;
  let rendelesItem = "";
  if (params === "insert") {
    rendelesItem = `{"name":"${company}","product":"${product}","darab":"${darab}","fizetendo": "${fizetendo}"}`;
  } else {
    rendelesItem = `{"id":"${id}","name":"${company}","product":"${product}","darab":"${darab}","fizetendo": "${fizetendo}"}`;
  }

  console.log(rendelesItem);
  return JSON.parse(rendelesItem);
}

async function readAllRendeles() {
  removeAllChild(kartyakDiv);
  let url = "https://retoolapi.dev/tFpb3p/data";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.length);
      maxRendelesSzam = data.length;
      lapozasUpdate();
      showPageRendeles(data);
    });
}

function showPageRendeles(data) {
  let tol = 10 * actPageNum - 10;
  let ig = actPageNum * 10;
  if (ig > data.length) {
    ig = data.length;
  }
  for (let index = tol; index <= ig; index++) {
    const element = data[index];
    let rendeles = document.createElement("div");
    rendeles.setAttribute("class", "card m-2 p-0");
    rendeles.innerHTML = rendelesToHTML(element);
    kartyakDiv.appendChild(rendeles);
  }
}

function rendelesToHTML(element) {
  let text = `<div class="card-header">
                        <h5>${element.name}</h5>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${element.product} <span>(${
    element.darab
  } db)</span></h5>
                        <h5>${element.fizetendo.toLocaleString(
                          "hu-HU"
                        )} HUF</h5>
                    </div>
                    <button class="btn btn-secondary m-1 mb-2" name="kivalaszt" id="${
                      element.id
                    }" onclick="rendelesAdatFromDatabase(this)">Kijelölés</button>
                    `;
  return text;
}

function rendelesAdatFromDatabase(params) {
  beviteli_mezok_kiuritese();
  let url = "https://retoolapi.dev/tFpb3p/data/" + params.id;
  fetch(url)
    .then((response) => response.json())
    .then((data) => inputMezokFeltoltese(data));
}

function inputMezokFeltoltese(data) {
  companyInput.value = data["name"];
  darabInput.value = data["darab"];
  productInput.value = data["product"];
  fizetendoInput.value = data["fizetendo"];
  idHidden.value = data["id"];
  removeAllChild(kartyakDiv);
  removeAllChild(lapokLista);
}

function beviteli_mezok_kiuritese() {
  companyInput.innerHTML = "";
  darabInput.innerHTML = "";
  fizetendoInput.innerHTML = "";
  idHidden.value = -1;
}

function removeAllChild(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.lastChild);
  }
}

async function updateRendeles() {
  let data = getDataJSON();
  let url = "https://retoolapi.dev/tFpb3p/data/" + data.id;
  // Example POST method implementation:
  putData(url, data).then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
  beviteli_mezok_kiuritese();
  readAllRendeles();
}

async function putData(url = "", data = {}) {
  // JSON data parsed by `data.json()` call
  // Default options are marked with *
  const response = await fetch(url, {
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
    //mode: "cors", // no-cors, *cors, same-origin
    //cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    //redirect: "follow", // manual, *follow, error
    //referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

function lapozasUpdate() {
  removeAllChild(lapokLista);
  for (let index = 0; index < maxRendelesSzam / 10; index++) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(index));
    li.setAttribute("class", "page-item");
    lapokLista.appendChild(li);
  }
}
