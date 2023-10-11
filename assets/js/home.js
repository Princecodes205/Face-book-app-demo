"use strict";

const seeLess = document.querySelector(".seeLess");
const stories = document.querySelectorAll(".other-story");
const fullStoriesSec = document.querySelector(".fullStoriesSec");
const imageElement = fullStoriesSec.querySelector(".image");
const leftScrollButton = document.getElementById("left-scroll-stories");
const rightScrollButton = document.getElementById("right-scroll-stories");
const scrollContainer = document.querySelectorAll(".scroll-container");
const leftScrollButtonStories = document.getElementById("left-scrollOpen");
const rightScrollButtonStories = document.getElementById("right-scrollOpen");
const rightScrollButtonReels = document.getElementById("right-scroll-reels");
const leftScrollButtonReels = document.getElementById("left-scroll-reels");

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

const stepSize = 100;

// Add event listener to the left scroll button
const scrollLeft = () => {
  // Scroll the container to the left
  scrollContainer.forEach((container) => {
    container.scrollBy({
      left: -stepSize, // Scroll one container width to the left
      behavior: "smooth", // Smooth scrolling animation
    });
    console.log("Clicked");
  });
};

// Add event listener to the right scroll button
const scrolRight = () => {
  // Scroll the container to the right
  scrollContainer.forEach((container) => {
    container.scrollBy({
      left: stepSize, // Scroll one container width to the right
      behavior: "smooth", // Smooth scrolling animation
    });
    console.log("I don show");
  });
};

// function updateScrollButtonsVisibility() {
//   scrollContainer.forEach((container) => {
//     // const leftScrollButtonStories = container.querySelector(".left-scroll");
//     // const rightScrollButtonStories = container.querySelector(".right-scroll");

//     leftScrollButtonStories.style.opacity = container.scrollLeft > 0 ? 0 : 1;

//     // The following condition checks if there is room to scroll to the right
//     // but also ensures the right button is always visible, as we can scroll in the left direction
//     rightScrollButtonStories.style.opacity = 1;
//   });
// }

// Check if there's room to scroll and hide/show buttons accordingly
// function updateScrollButtonsVisibility() {
//   scrollContainer.forEach((container) => {
//     // const leftScrollButton = container.querySelector(".left-scroll");
//     container.offsetWidth;
//     leftScrollButtonStories.style.opacity = container.scrollLeft > 0 ? 1 : 0;

//     rightScrollButtonStories.style.opacity =
//       container.scrollLeft < container.scrollWidth - container.clientWidth
//         ? 1
//         : 0;
//   });
//   // leftScrollButtonStories.style.opacity = scrollContainer.forEach(
//   //   (container) => {
//   //     container.scrollLeft > 0 ? 1 : 0;
//   //   },
//   //   console.error("an error")
//   // );
//   // rightScrollButtonStories.style.display =
//   //   scrollContainer.scrollLeft <
//   //   scrollContainer.scrollWidth - scrollContainer.clientWidth
//   //     ? 1
//   //     : 0;
// }

// Add a scroll event listener to the container
// scrollContainer.forEach((container) => {
//   container.addEventListener("scroll", updateScrollButtonsVisibility());
// });
leftScrollButtonStories.addEventListener("click", scrollLeft);
leftScrollButtonReels.addEventListener("click", scrollLeft);

rightScrollButtonStories.addEventListener("click", scrolRight);
rightScrollButtonReels.addEventListener("click", scrolRight);

// Initially, check the visibility of the scroll buttons
updateScrollButtonsVisibility();
