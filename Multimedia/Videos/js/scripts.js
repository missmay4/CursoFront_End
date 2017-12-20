var video = document.getElementById("myVideo");
var audio = document.getElementById("myAudio");

function play() {
  video.play();
}

function pause() {
  video.pause();
}

function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

function enableControls() {
  video.controls = true;
  video.load();
}

function disableControls() {
  video.controls = false;
  video.load();
}

function checkControls() {
  alert(video.controls);
}