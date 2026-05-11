function setup() {
createCanvas(windowWidth, windowHeight);
//background (0)
background(88, 57, 39);
rectMode(CENTER);
frameRate(30);
}

let generating = true; 

function draw() {
  fill("pink"); 
  if (generating) {
  square(random(width), random(height), random(80));
  // wna make the squares transparent and go away at some point
  stroke("white");
  strokeWeight(3);
  fill("white");
  circle(random(width), random(height), random(140));
  }
  
  //background(30, 10); 

line(pmouseX, pmouseY, mouseX, mouseY);
stroke("pink");
strokeWeight(10);

}

function keyPressed(){
  generating = false; //made it so that whenever a random
  // key is pressed, it'll stop generating
}
