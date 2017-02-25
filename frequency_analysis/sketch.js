var mic;
var song;
var button;
var fft;
var w;
var volhistory = [];
function toggleSong(){
   if(song.isPlaying()) {
      song.pause();
   }
   else{
      song.play();
   
   }
}
function preload(){
   song = loadSound('Tupac Back.mp3');
}
function setup() {
   createCanvas(256,256);
   colorMode(HSB);
   angleMode(DEGREES);
   button = createButton('Toggle');
   button.mousePressed(toggleSong);
   song.play();
   fft = new p5.FFT(.9,64);
   w = width/64;

  
}

function draw() {
   background(0);
  var spectrum = fft.analyze ();
  stroke(255);
  noStroke();
  for(var  i =0;i<spectrum.length;i++){
     var amp = spectrum[i];
     var y = map(amp,0,256,height,0);
     fill(i,255,255)
     rect(i*w,y,w-2,height-y);    
  }
  stroke(255);
  noFill();
  
}