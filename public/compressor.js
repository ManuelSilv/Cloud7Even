var fileInput = document.getElementById('audio-file');

var audioCtx = new (AudioContext || webkitAudioContext)();

var compress_btn = document.getElementById('compress_btn');

//Load audio file listener
compress_btn.addEventListener("click", function() {

  // check for file
  if(fileInput.files[0] == undefined) {

    // Stop the process and tell the user they need to upload a file.
    return false;
  }

  // Reader will go here

}, false);

// Reader will go here
var reader1 = new FileReader();
reader1.onload = function(ev) {
    
    // Decode audio
    audioCtx.decodeAudioData(ev.target.result).then(function(buffer) {

    var soundSource = audioCtx.createBufferSource();
    soundSource.buffer = buffer;

    // Create Compressor Node

    });
  };
  reader1.readAsArrayBuffer(fileInput.files[0]);

  // Create Compressor Node
compressor = audioCtx.createDynamicsCompressor();

compressor.threshold.setValueAtTime(-20, audioCtx.currentTime);
compressor.knee.setValueAtTime(-30, audioCtx.currentTime);
compressor.ratio.setValueAtTime(5, audioCtx.currentTime);
compressor.attack.setValueAtTime(.05, audioCtx.currentTime);
compressor.release.setValueAtTime(.25, audioCtx.currentTime);


// connect compressor

soundSource.buffer = buffer;
soundSource.buffer = buffer; 

 soundSource.connect(compressor);

 compressor.connect(audioCtx.destination);
soundSource.start(0);