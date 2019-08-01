function SoundOne() {
  var myAudio1 = document.getElementById("PadOne");
  if (myAudio1.onclick) {
    input type="file" id="PadOne" visibility="hidden" accept="audio/mpeg, audio/ogg, audio/*")
    myAudio1.play();
   
  }

  else {
    myAudio1.pause();
  }