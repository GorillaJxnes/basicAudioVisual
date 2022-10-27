const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
let audio1 = new Audio();
audio1.src = "creep.wav";

button1.addEventListener("click", function () {
  audio1.play();
});

button2.addEventListener("click", function (button1) {
  if (button1 === true) {
    console.log("Connected to pause button");
  } else {
    return console.log("button 1 = true button 2 fired");
  }
});
button3.addEventListener("click", function (button1, button2) {
  if (button1 === true && button2 === false) {
    console.log("button1 true, button 2 false");
  }
});
