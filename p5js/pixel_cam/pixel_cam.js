let capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(320,240);
  capture.hide();//uncomment this to hide the video DOM element
}

function draw() {
  background(0);
  translate(width/2-capture.width/2, height/2-capture.height/2); // center the capture
  for(let x =0; x < capture.width; x+=10){
    for(let y=0; y < capture.height; y+=10){
      noStroke();
      fill(capture.get(x,y));
      rect(x,y,40,40);
    }
  }
}
