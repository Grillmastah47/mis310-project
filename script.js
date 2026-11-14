const button = document.querySelector("#info-button");
const message = document.querySelector("#event-message");

button.addEventListener("click", function () {
    message.textContent = "Prove your barbecuing prowess this Saturdy at $:30PM!";
});