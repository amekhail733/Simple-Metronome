const clickSound = new Audio("click.mp3");
let isPlaying = false;
let timer;

document.getElementById("startStopButton").addEventListener("click", function() {
  if (!isPlaying) {
    startMetronome();
  } else {
    stopMetronome();
  }
});

function startMetronome() {
  const bpm = parseInt(document.getElementById("bpm").value);
  const subdivision = parseInt(document.getElementById("subdivision").value);
  const interval = calculateInterval(bpm, subdivision);
  timer = setInterval(function() {
    clickSound.play();
  }, interval);
  isPlaying = true;
  document.getElementById("startStopButton").innerHTML = "Stop";
}

function stopMetronome() {
  clearInterval(timer);
  isPlaying = false;
  document.getElementById("startStopButton").innerHTML = "Start";
}

function calculateInterval(bpm, subdivision) {
  const quarterNoteInterval = 60000 / bpm;
  switch(subdivision) {
    case 1:
      return quarterNoteInterval;
    case 2:
      return quarterNoteInterval / 2;
  }
}