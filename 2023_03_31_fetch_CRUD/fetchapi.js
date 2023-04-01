const companyInput = document.getElementById("companyName");
const productInput = document.getElementById("productName");
const darabInput = document.getElementById("darab");
const fizetendoInput = document.getElementById("fizetendo");
const idHidden = document.getElementById("id");
const kartyakDiv = document.getElementById("kartyak");

const createButton = document.getElementById("create");
createButton.addEventListener("click", createRendeles);
const readButton = document.getElementById("read");
readButton.addEventListener("click", readAllRendeles);
const updateButton = document.getElementById("update");
updateButton.addEventListener("click", updateRendeles);


function createRendeles() {
    let url = "https://retoolapi.dev/tFpb3p/data"; //-- POST
    const data = getDataJSON();

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

function getDataJSON() {
    let company = companyInput.value;
    let product = productInput.value;
    let darab = darabInput.value;
    let fizetendo = fizetendoInput.value;
    let rendeles = `{"name":"${company}","product":"${product}","darab":"${darab}","fizetendo": "${fizetendo}"}`;
    return JSON.parse(rendeles);
}

function readAllRendeles() {
    removeAllChild(kartyakDiv);
    let url = "https://retoolapi.dev/tFpb3p/data";
    fetch(url)
        .then((response) => response.json())
        .then((data) => showAllRendeles(data));

}

function showAllRendeles(data) {
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        let rendeles = document.createElement("div");
        rendeles.innerHTML = rendelesCardGetHTML(element);
        kartyakDiv.appendChild(rendeles);
    }
}
function rendelesCardGetHTML(element) {
    let text = `<div class="card m-2" style="width: 20rem; float: left;">
                    <div class="card-header">
                        <h5>${element.name}</h5>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${element.product} (${element.darab})</h5>
                        <h5>${element.fizetendo} HUF</h5>
                    </div>
                    <button class="btn btn-secondary" name="kivalaszt" id="${element.id}" onclick="betolt(this)">Kijelölés</button>
                </div>`;
    return text;
}

function betolt(params) {
    beviteli_mezok_torlese();
    let url = "https://retoolapi.dev/tFpb3p/data/" + params.id;
    fetch(url)
        .then((response) => response.json())
        .then((data) => inputMezokFeltoltese(data));

}
function inputMezokFeltoltese(data) {
    companyInput.value = data['name'];
    darabInput.value = data['darab'];
    productInput.value = data['product'];
    fizetendoInput.value = data['fizetendo'];
    idHidden.value = data['id'];
    removeAllChild(kartyakDiv);
}

function beviteli_mezok_torlese() {
    companyInput.innerHTML = "";
    darabInput.innerHTML = "";
    fizetendoInput.innerHTML = "";
}

function removeAllChild(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.lastChild);
    }
}

async function updateRendeles() {
    let url = "https://retoolapi.dev/tFpb3p/data/" + idHidden.value;
    data = getDataJSON();
    // Example POST method implementation:


    // Default options are marked with *
    const response = await fetch(url, {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        //mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: "same-origin", // include, *same-origin, omit
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

