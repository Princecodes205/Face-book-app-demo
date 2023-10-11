"use strict";
const formEl = document.getElementById("formEL");
const allInputs = formEl.querySelectorAll(".input");
const formButton = document.getElementById("button");

formButton.addEventListener("click", (e) => {
  e.preventDefault();
  allInputs.forEach((input) => {
    if (input.value === "") {
      input.classList.add("is-invalid");
    } else {
      input.classList.remove("is-invalid");
    }
  });
});
