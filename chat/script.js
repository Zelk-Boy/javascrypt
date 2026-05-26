let button = document.getElementById("chatButton");
let input = document.getElementById("userInput");
let chatBox = document.getElementById("chatBox");

button.addEventListener("click", function () {

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

});
let test = 67;
