var webcam;
function setup() {
  createCanvas(windowWidth, windowHeight);
  //background(255,255,0);
  webcam = createCapture(VIDEO);
  webcam.hide();
  webcam.size(360, 200);
  imageMode(CENTER);
}


function draw() {
  background("blue");
  image(webcam, width/2, height/2);
  fill(frameCount % 255, 100, 200, 100);
  rect(0, 0, windowWidth, windowHeight);
  filter(POSTERIZE, 12);
}

// filter makes the whole thing go diff colors 
//let myCam;
//let bttn;
//function setup() {
  //createCanvas(windowWidth, windowHeight);
  //myCam = createCapture(VIDEO);
  //myCam.hide();
//}

//function draw() {
  //background(220);
  //image(myCam, 0, 0, width, height);
  //fill(frameCount % 255, 100, 200, 100);
  //rect(0, 0, width, height);
  //filter(POSTERIZE, 12);
//}

//function mousePressed() {
  //saveCanvas("myPhoto", "jpg");
//}
