// const learningSection = document.querySelector(".learning");
// const phoneImage = document.querySelector(".mobile-image img");
// const beforeCircle = document.querySelector(".before-circle");

// // Apply transformation on mouse movement
// learningSection.addEventListener("mousemove", (e) => {
//   const sectionWidth = learningSection.offsetWidth;
//   const sectionHeight = learningSection.offsetHeight;

//   const mouseX = e.pageX - learningSection.offsetLeft;
//   const mouseY = e.pageY - learningSection.offsetTop;

//   const rotateX = (mouseY / sectionHeight) * 30 - 15; // Adjust for sensitivity
//   const rotateY = (mouseX / sectionWidth) * 30 - 15;

//   // Rotate the phone image
//   phoneImage.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

//   // Rotate the "before-circle" element
//   beforeCircle.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
// });

// // Reset the rotation when the mouse leaves
// learningSection.addEventListener("mouseleave", () => {
//   phoneImage.style.transform = "rotateX(0) rotateY(0)";
//   beforeCircle.style.transform = "rotateX(0) rotateY(0)";
// });

// ////////////////////////////////////////////////////////////////////

// const learningSection = document.querySelector(".learning");
// const phoneImage = document.querySelector(".mobile-image img");
// const beforeCircle = document.querySelector(".before-circle");

// // Function to handle mouse movement and create a to-and-fro effect
// learningSection.addEventListener("mousemove", (e) => {
//   const sectionWidth = learningSection.offsetWidth;
//   const sectionHeight = learningSection.offsetHeight;

//   const mouseX = e.pageX - learningSection.offsetLeft;
//   const mouseY = e.pageY - learningSection.offsetTop;

//   // Calculate small rotation based on mouse position
//   const rotateX = (mouseY / sectionHeight) * 10 - 5; // Smaller angle for to-and-fro
//   const rotateY = (mouseX / sectionWidth) * 10 - 5;

//   // Apply rotation to the phone image
//   phoneImage.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

//   // Apply rotation to the "before-circle" element
//   beforeCircle.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
// });

// // Reset the rotation when the mouse leaves
// learningSection.addEventListener("mouseleave", () => {
//   phoneImage.style.transform = "rotateX(0) rotateY(0)";
//   beforeCircle.style.transform = "rotateX(0) rotateY(0)";
// });

// ////////////////////////////////////////////////////////////////////

const learningSection = document.querySelector(".learning");
const phoneImage = document.querySelector(".mobile-image img");
const beforeCircle = document.querySelector(".before-circle");

// Function to handle mouse movement and create a translation effect
learningSection.addEventListener("mousemove", (e) => {
  const sectionWidth = learningSection.offsetWidth;
  const sectionHeight = learningSection.offsetHeight;

  const mouseX = e.pageX - learningSection.offsetLeft;
  const mouseY = e.pageY - learningSection.offsetTop;

  // Calculate translation values
  const translateX = -((mouseX / sectionWidth) * 70 - 50); // Smaller translation for subtle effect
  const translateY = -((mouseY / sectionHeight) * 70 - 50);

  // Apply translation to the phone image
  phoneImage.style.transform = `translate(${translateX}px, ${translateY}px)`;

  // Apply translation to the "before-circle" element
  beforeCircle.style.transform = `translate(${translateX}px, ${translateY}px)`;
});

// Reset the translation when the mouse leaves
learningSection.addEventListener("mouseleave", () => {
  phoneImage.style.transform = "translate(0, 0)";
  beforeCircle.style.transform = "translate(0, 0)";
});
