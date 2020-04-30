var myVideo = document.getElementById("video1"); 

function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 

function makeBig() { 
    myVideo.width = 800; 
} 

function makeSmall() { 
    myVideo.width = 400; 
} 

function makeNormal() { 
    myVideo.width = 600; 
} 