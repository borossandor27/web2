const nev = document.querySelector("#name");
const pass1 = document.querySelector("#password1");
const pass2 = document.querySelector("#password2");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
let maiDatum = new Date();
birthdate.max = maiDatum.toISOString().split("T")[0];
birthdate.value = maiDatum.toISOString().split("T")[0];
const submitButton = document.querySelector("#submit");
const likertList = document.querySelectorAll(".likert-list li");
submitButton.addEventListener("click", validalas);
Array.prototype.forEach.call(likertList, function (item) {
  item.addEventListener("click", rating);
});

function validalas() {
  nevellenorzes();
  jelszoEllenorzes();
  let nevText = nev.value;
  let passText = pass1.value;
  let emailText = email.value;
  let birthdateDate = new Date(birthdate.value);
  let birthdateText = birthdateDate.toISOString().split("T")[0];
  let user = `{name: ${nevText}, password: ${passText}, email: ${emailText}, birthdate: ${birthdateText}}`;
  let csakszoveg = JSON.stringify(user);
  let ujraobjektum = JSON.parse(csakszoveg);

  alert(user.name);
}

function nevellenorzes() {
  let text = nev.value;
  if (nev.length < 5) {
    alert("A felhasználónév lehet kevesebb 5 karakternél!");
  } else if (nev.length > 16) {
    alert("A felhasználónév lehet hosszabb 16 karakternél!");
  }
}

function jelszoEllenorzes() {
  let text1 = pass1.value;
  let text2 = pass2.value;
  if (text1 != text2) alert("A két jelszó nem egyezik!");
}

function rating() {
  let rating = this.value;
  Array.prototype.forEach.call(likertList, function (item) {
    if (item.value > 0 && item.value <= rating) {
      item.innerHTML = '<i class="fa-solid fa-star" ></i>';
    } else if (item.value > 0 && item.value > rating) {
      item.innerHTML = '<i class="fa-regular fa-star" ></i>';
    }
  });
}
