let button = document.getElementById("chatButton");

let message = document.getElementById("message");

let userInput = document.getElementById("userInput");

button.addEventListener("click", function () {

  let text = userInput.value;

  message.textContent = text;

});
