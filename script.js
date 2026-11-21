const button = document.querySelector("#info-button");
const message = document.querySelector("#event-message");
console.log("Script loaded successfully.");
button.addEventListener("click", function () {
    message.textContent = "Prove your barbecuing prowess this Saturday at 4:30PM!";
});
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});