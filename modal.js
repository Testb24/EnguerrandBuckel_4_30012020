function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");
const submit = document.querySelector(".btn-submit");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
modalClose.addEventListener("click", closeModal);

// close modale form
function closeModal() {
  modalbg.style.display = "none";
}

// Prenom ===========================================================
const first = document.getElementById("first");
const first_error = document.getElementById("first_error");

first.addEventListener("keyup", error_help_first);

function error_help_first() {
  if (first.value.length > 1) {
    first_error.innerHTML = "";
    first.classList.remove("class_error");
  } else {
    first_error.innerHTML = "Veuillez choisir un prénom plus long d'au moins 2 charatères";
  }
};
// Nom ===========================================================
const last = document.getElementById("last");
const last_error = document.getElementById("last_error");

last.addEventListener('keyup', error_help_last);

function error_help_last() {
  if (last.value.length > 1) {
    last_error.innerHTML = "";
    last.classList.remove("class_error");
  } else {
    last_error.innerHTML = "Veuillez choisir un nom plus long d'au moins 2 charatères";
  }
};
// Email ===========================================================
const email = document.getElementById("email");
const email_error = document.getElementById("email_error");

email.addEventListener('keyup', error_help_email);

function error_help_email() {
  var pattern = /.+@.+\..+/;
  var adress = pattern.exec(email.value);
  if (email.value == adress && email.value != "") {
    email_error.innerHTML = "";
    email.classList.remove("class_error");
  } else {
    email_error.innerHTML = "Veuillez entrer une adresse mail valide";
  }
};
// Time ===========================================================
const birthdate = document.getElementById("birthdate");
const birthdate_error = document.getElementById("birthdate_error");

birthdate.addEventListener('input', error_help_birthdate);

function error_help_birthdate() {
  if (!isNaN(new Date(birthdate.value).getTime()) &&
    new Date(birthdate.value).getTime() < new Date().getTime()
    // && ( new Date().getTime() - new Date(birthdate.value).getTime() ) / (1000*3600*24*365.25) > 18
  ) {
    birthdate_error.innerHTML = "";
    birthdate.classList.remove("class_error");
  } else {
    birthdate_error.innerHTML = "Veuillez entrer une date valide";
  }
};
// Nbr de tournois ===========================================================
const quantity = document.getElementById("quantity");
const quantity_error = document.getElementById("quantity_error");

quantity.addEventListener('keyup', error_help_quantity);

function error_help_quantity() {
  if (!isNaN(quantity.value) && quantity.value !== "") {
    quantity_error.innerHTML = "";
    quantity.classList.remove("class_error");
  } else {
    quantity_error.innerHTML = "Veuillez entrer un chiffre valide";
  }
};
// Accepter les conditions ===========================================================
const checkbox1 = document.getElementById("checkbox1");
const checkbox1_error = document.getElementById("checkbox1_error");

checkbox1.addEventListener('change', error_help_checkbox1);

function error_help_checkbox1() {
  if (checkbox1.checked) {
    checkbox1_error.innerHTML = "";
    checkbox1_label.classList.remove("class_error");
  } else {
    checkbox1_error.innerHTML = "Cette case doit être cochée";
  }
};
//Vérifie que tous les champs soient valides ===========================================================
//If not => return form_valid = false
//ELse   => return form_valid = true

function checkMyForm() {
  var form_valid = true;

  //Check if firstname ok
  if (first.value.length < 2) { first.classList.add("class_error"); form_valid = false; };

  //Check if lastname ok
  if (last.value.length < 2) { last.classList.add("class_error"); form_valid = false; };

  //Check if email ok
  var pattern = /.+@.+\..+/;
  var adress = pattern.exec(email.value);
  if (email.value != adress || email.value == "") { email.classList.add("class_error"); form_valid = false; };

  //Check if birthdate valid
  if ((isNaN(new Date(birthdate.value).getTime()) ||
    new Date(birthdate.value).getTime() > new Date().getTime())
    // || ( new Date().getTime() - new Date(birthdate.value).getTime() ) / (1000*3600*24*365.25) < 18
  ) {
    birthdate.classList.add("class_error");
    form_valid = false;
  };

  //Check if quantity is ok
  if (isNaN(quantity.value) || quantity.value == "") { quantity.classList.add("class_error"); form_valid = false; };

  //Check if checkbox checked
  if (!checkbox1.checked) {
    checkbox1_label.classList.add("class_error_text");
    checkbox1.classList.add("class_error_checkbox");
    form_valid = false;
  };

  if (form_valid) { return true; };
  return false;

};

// Si le doc est valide, 
function validate(e) {
  e.preventDefault();

  if (checkMyForm()) {
    document.getElementById("test").innerHTML = `
  Merci `+ first.value +` !
  <br>
  Votre participation a bien été enregistrée.
`;
  };

};