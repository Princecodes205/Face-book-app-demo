// const monthSelect = document.getElementById("monthSelect");
const signUpBtn = document.getElementById("signUpBtn");
const inputField = document.querySelectorAll(".inputField");
const errormsg = document.querySelectorAll(".errorMsg");
const monthSelect = document.querySelectorAll(".select");
// const Radio = document.querySelectorAll(".inputRadio");
const radioButtons = document.querySelectorAll(".inputRadio");
const gender = document.querySelector(".gender");

inputField.forEach((input) => {
  input.classList.remove("is-invalid");
});

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();

  inputField.forEach((input, index) => {
    const errorMessage = errormsg[index];

    if (input.value === "") {
      input.classList.add("is-invalid");
      errorMessage.classList.remove("hidden");
    } else {
      input.classList.remove("is-invalid");
      errorMessage.classList.add("hidden");
    }
  });

  monthSelect.forEach((el) => {
    if (el.value === "") {
      el.classList.add("is-invalid");
    } else {
      el.classList.remove("is-invalid");
    }
  });

  const selectedRadio = document.querySelector('input[name="gender"]:checked');

  if (selectedRadio) {
    console.log(`Selected: ${selectedRadio.value}`);
    gender.textContent = "";
  } else {
    console.log("Please select a gender");
    gender.textContent = "Please select Your gender";
  }
});
