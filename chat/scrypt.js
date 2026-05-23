let button = document.getElementById("chatButton");

let message = document.getElementById("message");

let userInput = document.getElementById("userInput");

button.addEventListener("click", function () {

  let text = userInput.value;

  if (text === "hello") {
    message.textContent = "Greetings user.";

  } else if (text === "how are you") {
    message.textContent = "Zephner Systems AI is functioning normally.";

  } else {
    message.textContent = "Command not recognized.";
  }

});
console.log("JS is alive");
