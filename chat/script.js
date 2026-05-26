let input = document.getElementById("userInput");
console.log("Hello from Zephner Systems!")
let company = "Zephner Systems";
console.log(company);
let aiStatus = "offline";

aiStatus = "online";
function greet() {
  console.log("Welcome to Zephner Systems");
}
let button = document.getElementById("chatButton");

button.addEventListener("click", function() {
  console.log("Zephner AI activated");
});
title.style.color = "green";
button.addEventListener("mouseleave", function() {
  const chatContainer = document.getElementById('chat');

// This will render as a bold heading
chatContainer.innerHTML = '<p class="neverleaveme">No! Do not leave me!</p>';
  title.textContent = input.value;
let button = document.getElementById("chatButton");
let title = document.getElementById("title");

button.addEventListener("mouseenter", function () {
  title.textContent = "👀 Zephner AI is watching...";
  title.style.color = "orange";
});

button.addEventListener("mouseleave", function () {
  title.textContent = "Zephner Systems AI";
  title.style.color = "black";
});
  
let button = document.getElementById("chaosButton");

document.addEventListener("mousemove", function (event) {

  let x = event.clientX;
  let y = event.clientY;

  let offsetX = Math.random() * 80 - 40;
  let offsetY = Math.random() * 80 - 40;

  button.style.left = (x + offsetX) + "px";
  button.style.top = (y + offsetY) + "px";

});
