

//Button for 3 button storage 
var buttons = {
play:document.getElementById("btn-play"),
pause:document.getElementById("btn-pause"),
stop:document.getElementById("btn-stop")
};


// Instance with configuration color etc..
var Spectrum = WaveSurfer.create ({
container: '#audio-spectrum',
progressColor: "green"
});
// handle play button
buttons.play.addEventListener("click", function(){
Spectrum.play();
//enable/disable buttons
buttons.stop.disabled = false;
buttons.pause.disabled = false;
buttons.pause.disabled = true;
},false);
//handle play button
buttons.pause.addEventlistener("click", function(){
Spectrum.pause();
//enable/disable buttons
buttons.pause.disabled = true;
buttons.play.disabled = false;
},false);
//handle stop button
buttons.stop.addEventListener("click", function(){
Spectrum.stop();
//enable/diable buttons
buttons.pause.disabled = true;
buttons.play.disabled = false;
buttons.stop.disabled = true;
},false);
//add a listener to enable the play button once its ready
Spectrum.on('ready', function (){
button.play.disabled = false;
});
//for responsiveness when user resizes window.
window.EventListener("resize", function(){
//get current progress according to the curser position
var currentProgress = Spectrum.getCurrentTime() / Spectrum.getDuration();
//reset Graph
Spectrum.empty();
Spectrum.drawBuffer();
//Set original position
Spectrum.seekTo(currentProgress);
//enable/diable buttons
buttons.pause.disabled = true;
buttons.play.disabled = false;
buttons.stop.disabled = false;
},false);


//document.getElementById("btn-play").onclick = function() {
 // wavesurfer.play();
// document.getElementById("btn-pause")
//  }
