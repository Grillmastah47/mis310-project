const button=document.querySelector('navigation-button');
const navigation=document.querySelector('navigation');

button.addEventListener("click", function () {
    navigation.classList.toggle("visible");});