function setup() {
createCanvas(windowWidth, windowHeight);
background(88, 57, 39);
rectMode(CENTER);
frameRate(30);
}

let generating = true; 

function draw() {
  fill("pink");
  if (generating) {
    square(random(width), random(height), random(80));
    stroke("white");
    fill("white");
    circle(random(width), random(height), random(140));
    }
line(pmouseX, pmouseY, mouseX, mouseY);
stroke("pink");
strokeWeight(3);

}
