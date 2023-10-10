"use strict";

const seeLess = document.querySelector(".seeLess");
const stories = document.querySelectorAll(".other-story");
const fullStoriesSec = document.querySelector(".fullStoriesSec");
const imageElement = fullStoriesSec.querySelector(".image");
const leftScrollButton = fullStoriesSec.querySelector(".left-scroll");
const rightScrollButton = fullStoriesSec.querySelector(".right-scroll");

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

// Create an array to store the image sources
const imageSources = Array.from(stories).map((story) =>
  story.querySelector(".other-img").getAttribute("src")
);

// Function to navigate to the next image
let currentImageIndex = 0;
function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % imageSources.length;
  imageElement.src = imageSources[currentImageIndex];
}

// Function to navigate to the previous image
function showPreviousImage() {
  currentImageIndex =
    (currentImageIndex - 1 + imageSources.length) % imageSources.length;
  imageElement.src = imageSources[currentImageIndex];
}

// Add click event listeners to the scroll buttons
rightScrollButton.addEventListener("click", showNextImage);
leftScrollButton.addEventListener("click", showPreviousImage);

stories.forEach((story) => {
  story.addEventListener("click", (e) => {
    e.preventDefault();

    const imageSrc = story.querySelector(".other-img").getAttribute("src");

    // Set the image source in the "fullStoriesSec" section
    imageElement.src = imageSrc;

    // Show the "fullStoriesSec" section
    fullStoriesSec.classList.remove("hidden");
  });
});

// Add event listener to cancel button
const cancelButton = document.querySelector(".cancleBtnNew");
cancelButton.addEventListener("click", () => {
  // Hide the "fullStoriesSec" section
  fullStoriesSec.classList.add("hidden");
});

const scrollContainer = document.querySelector(".scroll-container");
const leftScrollButtonStories = document.getElementById("left-scroll");
const rightScrollButtonStories = document.getElementById("right-scroll");
const stepSize = 100;

// Add event listener to the left scroll button
leftScrollButtonStories.addEventListener("click", () => {
  // Scroll the container to the left
  scrollContainer.scrollBy({
    left: -stepSize, // Scroll one container width to the left
    behavior: "smooth", // Smooth scrolling animation
  });
  console.log("Clicked");
});

// Add event listener to the right scroll button
rightScrollButtonStories.addEventListener("click", () => {
  // Scroll the container to the right
  scrollContainer.scrollBy({
    left: stepSize, // Scroll one container width to the right
    behavior: "smooth", // Smooth scrolling animation
  });
});

// Check if there's room to scroll and hide/show buttons accordingly
function updateScrollButtonsVisibility() {
  leftScrollButtonStories.style.opacity =
    scrollContainer.scrollLeft > 0 ? 1 : 0;
  rightScrollButtonStories.style.display =
    scrollContainer.scrollLeft <
    scrollContainer.scrollWidth - scrollContainer.clientWidth
      ? 1
      : 0;
}

// Add a scroll event listener to the container
scrollContainer.addEventListener("scroll", updateScrollButtonsVisibility);

// Initially, check the visibility of the scroll buttons
updateScrollButtonsVisibility();
