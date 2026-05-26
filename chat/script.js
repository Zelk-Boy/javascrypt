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
chatContainer.innerHTML = "<p class="neverleaveme">No! Don't leave me!</p>";
  title.textContent = input.value;
