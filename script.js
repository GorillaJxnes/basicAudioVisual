//  pink black purple n green 💖💜🖤💚
// figure out which colors will be the core of the visualization and which colors will be the complimentary ones that make it pop.

// const button1 = document.getElementById("button1");
// const button2 = document.getElementById("button2");
// const button3 = document.getElementById("button3");
const audioCtx = new AudioContext();
let audio1 = new Audio();
audio1.src = "creep.wav";

// // Play Button.
// button1.addEventListener("click", function () {
//   audio1.play();
// });
// // Pause button
// button2.addEventListener("click", function () {
//   audio1.pause();
// });
// // Stop button
// button3.addEventListener("click", function () {
//   audio1.pause();
//   audio1.currentTime = 0;
// });

const container = document.getElementById("container");
const canvas = document.getElementById("canvas1");
canvas.width = window.innerWidth;
canvas.width = window.innerHeight;
const context = canvas.getContext("2d");
let audioSource;
let analyser;

container.addEventListener("click", function () {
  audio1.play();

  // Setting audio1 variable to our source.
  audioSource = audioCtx.createMediaElementSource(audio1);

  // creates analyser node. exposes time and frequency data. CRITICAL FOR VISUALIZER
  analyser = audioCtx.createAnalyser();

  // Can now expose timing and frequencies, giving me a data object.
  audioSource.connect(analyser);

  // Connects to default audio device.
  analyser.connect(audioCtx.destination);

  // Allowing to set the amount of audio samples
  analyser.fftSize = 64;

  // A read only property that contains a number of data values we will have in the analyser data file.
  const bufferLength = analyser.frequencyBinCount;
});
