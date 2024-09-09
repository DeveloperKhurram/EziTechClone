// const words = ["Web Design", "Social Skills", "Marketing", "Programming"];
// let wordIndex = 0;
// let charIndex = 0;
// const textElement = document.getElementById("changing-text");
// const text1Element = document.querySelector(".text-1");

// function typeWord() {
//   const currentWord = words[wordIndex];

//   if (charIndex < currentWord.length) {
//     textElement.textContent += currentWord[charIndex];
//     charIndex++;
//     setTimeout(typeWord, 100); // Speed of typing
//   } else {
//     setTimeout(() => swipeAway(), 1000); // Hold the word for a moment
//   }
// }

// function swipeAway() {
//   textElement.style.transform = "translateX(100%)"; // Swipe away effect
//   setTimeout(() => {
//     textElement.textContent = ""; // Clear text
//     textElement.style.transform = "translateX(0)";
//     wordIndex = (wordIndex + 1) % words.length; // Move to next word
//     charIndex = 0;
//     typeWord();
//   }, 500); // Timing for the swipe animation
// }

// function fadeInOutText() {
//   text1Element.classList.add("fade-out");
//   setTimeout(() => {
//     text1Element.classList.remove("fade-out");
//     typeWord();
//   }, 1000); // 1000ms delay after fade-out
// }

// typeWord();
// setInterval(fadeInOutText, 12000); // Repeat after every 12 seconds (4 words)

// ///////////////////////////////////////////////////////

const words = ["Web Design", "Social Skills", "Marketing", "Programming"];
let wordIndex = 0;
let charIndex = 0;
const textElement = document.getElementById("changing-text");

function typeWord() {
  const currentWord = words[wordIndex];

  if (charIndex < currentWord.length) {
    textElement.textContent += currentWord[charIndex];
    charIndex++;
    setTimeout(typeWord, 100); // Speed of typing
  } else {
    setTimeout(() => swipeAway(), 1000); // Hold the word for 1 second
  }
}

function swipeAway() {
  textElement.style.transform = "translateX(0%)"; // Swipe out effect
  setTimeout(() => {
    textElement.textContent = ""; // Clear text after swipe out
    textElement.style.transform = "translateX(0)";
    wordIndex = (wordIndex + 1) % words.length; // Move to the next word
    charIndex = 0;
    typeWord(); // Start typing the next word
  }, 500); // Time for the swipe effect
}

typeWord(); // Start the typing effect
