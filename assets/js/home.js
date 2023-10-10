"use strict";

const seeLess = document.querySelector(".seeLess");

seeLess.addEventListener("click", (e) => {
  const seeLessDivs = document.querySelectorAll(".seeLessDivs");
  const textContent = document.querySelector(".textContent");

  seeLessDivs.forEach((div) => {
    div.classList.toggle("hidden");
  });
  if (textContent.textContent === "See More") {
    textContent.textContent = "See Less";
  } else {
    textContent.textContent = "See More";
  }
});
