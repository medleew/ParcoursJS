let inputPassword = document.getElementById('motdepasse');
let inputConfirmation = document.getElementById('confirmation');
let inputConfirmationValue = inputConfirmation.value;
let inputPasswordValue = inputPassword.value;
inputPassword.addEventListener('input', function() {
    inputPasswordValue = inputPassword.value;
    verification();
});
inputConfirmation.addEventListener('input', function() {
    inputConfirmationValue = inputConfirmation.value;
    verification();
});
function verification () {
if (inputConfirmationValue !== inputPasswordValue) {
  inputPassword.style.border = "3px solid red";
  inputConfirmation.style.border = "3px solid red";
} else {
  inputPassword.style.border = "3px solid green";
  inputConfirmation.style.border = "3px solid green";
}
}

let button = document.getElementById('button')