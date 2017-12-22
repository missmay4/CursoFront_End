var video = document.getElementById("myVideo");
var audio = document.getElementById("myAudio");

var play_audio = document.getElementById("play_audio");
var pause_audio = document.getElementById("pause_audio");
var play_video = document.getElementById("play_video");
var pause_video = document.getElementById("pause_video");
var change_video = document.getElementById("change_video");

/* function play() {video.play();}
function pause() {video.pause();}
function playAudio() {audio.play();}
function pauseAudio() {
  audio.pause();
} */

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

video.onplay = function() {
  alert("The video is now playing");
};

video.onpause = function() {
  alert("The video has been paused");
};

video.onvolumechange = function() {
  alert("The volume has been changed!");
};

// Quitamos el evento onclick() del html y hacemos el efecto aqui
play_video.addEventListener('click', function() {
  video.play();
  video.currentTime = 10;
});

pause_video.addEventListener('click', function() {
  video.pause();

});

play_audio.addEventListener('click', function() {
  audio.play();

});

pause_audio.addEventListener('click', function() {
  audio.pause();
  // Quitamos el evento onclick() del html y hacemos el efecto aqui
});

change_video.addEventListener('click', function() {
  if (video.getAttribute("src") == "media/burritochallenge.mp4") {
    video.setAttribute("src", "media/ThorRagnarok.mp4");
  } else {
    video.setAttribute("src", "media/burritochallenge.mp4");
  }
  video.load();

});