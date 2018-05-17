// get the video
var video = document.getElementById("myVideo");

// get the button
var btn = document.getElementById("myBtn");

// Pause and play video, and change the button text
function controlVideo() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
