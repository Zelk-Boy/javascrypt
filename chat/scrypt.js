let button = document.getElementById("chatButton");

let message = document.getElementById("message");

let responses = [
  "Greetings user.",
  "Zephner Systems AI online.",
  "How may I assist you?",
  "Systems functioning normally."
];

button.addEventListener("click", function () {

  let randomNumber = Math.floor(Math.random() * 4);

  message.textContent = responses[randomNumber];

});
