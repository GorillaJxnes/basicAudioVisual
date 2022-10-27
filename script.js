const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
let audio1 = new Audio();
audio1.src = "creep.wav";

// Play Button.
button1.addEventListener("click", function () {
  audio1.play();
});
// Pause button
button2.addEventListener("click", function () {
  audio1.pause();
});
// Stop button
button3.addEventListener("click", function () {
  audio1.pause();
  audio1.currentTime = 0;
});
