function setup() {
createCanvas(windowWidth, windowHeight);
background(191,209,300);
rectMode(CENTER);
}


function draw() {
  fill("black"); //hair
  rect(500, 485, 400, 500, 300, 300, 0, 0);
  
  fill(237, 208, 177); //face colour
  rect(500, 500, 300, 350, 100, 400, 300, 300);
  
  fill(255, 255, 255); //left eye whites
  circle(420, 420, 55);
  
  fill(100, 100, 100); // left eye black
  circle(420, 420, 30);
  
  fill(255, 255, 255); //right eye whites
  circle(570, 420, 55);
  
  fill(100, 100, 100); //left eye black
  circle(570, 420, 30);
  
  fill(237, 208, 177); //nose colour
  triangle(495, 420, 470, 500, 530, 500);
  
  fill("pink");
  arc(500, 550, 100, 100, TWO_PI, PI); //mouth


}
