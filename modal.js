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

//Formulaire : sous-parties

document.getElementById('first').addEventListener('change', function(event) {
  if (event.target.validity.valid) {
      //Field contains valid data.
  } else {
      //Field contains invalid data.
  }
}, false);

first.addEventListener('keyup', function() {
  if (first.checkValidity()) {
    first_error.innerHTML = "";
  } else {
    first_error.innerHTML = "Veuillez choisir un prénom plus long d'au moins 2 charatères";
  }
});

last.addEventListener('keyup', function() {
  if (last.checkValidity()) {
    last_error.innerHTML = "";
  } else {
    last_error.innerHTML = "Veuillez choisir un nom plus long d'au moins 2 charatères";
  }
});

email.addEventListener('keyup', function() {
  if (email.checkValidity()) {
    email_error.innerHTML = "";
  } else {
    email_error.innerHTML = "Veuillez entrer une adresse mail valide";
  }
});

// birthdate.addEventListener('keyup', function() {
//   if (birthdate.checkValidity()) {
//     birthdate_error.innerHTML = "";
//   } else {
//     birthdate_error.innerHTML = "Veuillez entrer une adresse mail valide";
//   }
// });

quantity.addEventListener('keyup', function() {
  if (quantity.checkValidity()) {
    quantity_error.innerHTML = "";
  } else {
    quantity_error.innerHTML = "Veuillez entrer un chiffre valide";
  }
});

checkbox1.addEventListener('clic', function() {
  if (checkbox1.checked) {
    checkbox1_error.innerHTML = "";
  } else {
    checkbox1_error.innerHTML = "Cette case doit être cochée";
  }
});

//function validate() {

//if ( !first.validity.valid ) { first_error.innerHTML = "ERREUR_test" }


//}