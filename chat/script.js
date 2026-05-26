let button = document.getElementById("chatButton");

let input = document.getElementById("userInput");

let chatBox = document.getElementById("chatBox");

function sendMessage() {

  let userText = input.value;

  chatBox.innerHTML += "<p><b>You:</b> " + userText + "</p>";

  let response = "";

  if (userText === "hello") {
    response = "Hello. I am Zephner Systems AI.";
  }
  else if (userText === "how are you") {
    response = "Systems operational.";
  }
  else {
    response = "Command not recognized.";
  }

  chatBox.innerHTML += "<p><b>AI:</b> " + response + "</p>";

  input.value = "";
}

button.addEventListener("click", sendMessage);

input.addEventListener("keydown", function(event) {

  if (event.key === "Enter") {
    sendMessage();
  }

});
