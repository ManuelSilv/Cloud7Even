//MPC
function SoundOne() {
  var myAudio1 = document.getElementById("PadOne");
  if (myAudio1.paused) {
    myAudio1.play();
   
  }

  else {
    myAudio1.pause();
  }
  
  document.onkeydown = function(event) {
  if (event.keyCode == 49) {
    myAudio1.play();
  }
  else{
    myAudio1.pause();
  }
}
}

function SoundTwo() {
  var myAudio2 = document.getElementById("PadTwo");
  if (myAudio2.paused) {
    myAudio2.play();
  } else {
    myAudio2.pause();
  }
  document.onkeydown = function(event) {
  if (event.keyCode == 50) {
    myAudio2.play();
  }
  else{
    myAudio2.pause();
  }
}
}
function SoundThree() {
  var myAudio3 = document.getElementById("PadThree");
  if (myAudio3.paused) {
    myAudio3.play();
  } else {
    myAudio3.pause();
  }
}
function SoundFour() {
  var myAudio4 = document.getElementById("PadFour");
  if (myAudio4.paused) {
    myAudio4.play();
  } else {
    myAudio4.pause();
  }
}
function SoundFive() {
  var myAudio5 = document.getElementById("PadFive");
  if (myAudio5.paused) {
    myAudio5.play();
  } else {
    myAudio5.pause();
  }
}
function SoundSix() {
  var myAudio6 = document.getElementById("PadSix");
  if (myAudio6.paused) {
    myAudio6.play();
  } else {
    myAudio6.pause();
  }
}
function SoundSeven() {
  var myAudio7 = document.getElementById("PadSeven");
  if (myAudio7.paused) {
    myAudio7.play();
  } else {
    myAudio7.pause();
  }
}
function SoundEight() {
  var myAudio8 = document.getElementById("PadEight");
  if (myAudio8.paused) {
    myAudio8.play();
  } else {
    myAudio8.pause();
  }
}
function SoundNine() {
  var myAudio9 = document.getElementById("PadNine");
  if (myAudio9.paused) {
    myAudio9.play();
  } else {
    myAudio9.pause();
  }
}

function SoundTen() {
  var myAudio10 = document.getElementById("PadTen");
  if (myAudio10.paused) {
    myAudio10.play();
  } else {
    myAudio10.pause();
  }
  document.onkeydown = function(event) {
  if (event.keyCode == 49) {
    myAudio10.play();
  }
}
}

function SoundEleven() {
  var myAudio11 = document.getElementById("PadEleven");
  if (myAudio11.paused) {
    myAudio11.play();
  } else {
    myAudio11.pause();
  }
  document.onkeydown = function(event) {
  if (event.keyCode == 49) {
    myAudio11.play();
  }
}
}

function SoundTwelve() {
  var myAudio12 = document.getElementById("PadTwelve");
  if (myAudio12.paused) {
    myAudio12.play();
  } else {
    myAudio12.pause();
  }
  document.onkeydown = function(event) {
  if (event.keyCode == 49) {
    myAudio12.play();
  }
}
}

function SoundThirteen() {
  var myAudio13 = document.getElementById("PadThirteen");
  if (myAudio13.paused) {
    myAudio13.play();
  } else {
    myAudio13.pause();
  }
  document.onkeydown = function(event) {
  if (event.keyCode == 49) {
    myAudio13.play();
  }
}
}

function SoundFourteen() {
  var myAudio14 = document.getElementById("PadFourteen");
  if (myAudio14.paused) {
    myAudio14.play();
  } else {
    myAudio14.pause();
  }
  document.onkeydown = function(event) {
  if (event.keyCode == 49) {
    myAudio14.play();
  }
}
}

function SoundFifteen() {
  var myAudio15 = document.getElementById("PadFifteen");
  if (myAudio15.paused) {
    myAudio15.play();
  } else {
    myAudio15.pause();
  }
  document.onkeydown = function(event) {
  if (event.keyCode == 49) {
    myAudio15.play();
  }
}
}

function SoundSixteen() {
  var myAudio16 = document.getElementById("PadSixteen");
  if (myAudio16.paused) {
    myAudio16.play();
  } else {
    myAudio16.pause();
  }
  document.onkeydown = function(event) {
  if (event.keyCode == 49) {
    myAudio16.play();
  }
}
}

$(window).on("load resize",function(e){
  var widthP = $(".padgrid").width(); 
  var width_diff = (widthP - 60) / 4;
  $('.pad').css({ width : width_diff + "px", height : width_diff + "px",  }); 
  console.log(width_diff);
});
