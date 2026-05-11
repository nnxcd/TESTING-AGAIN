var img;
function preload(){
  img=loadImage("data/MONCHICHI.jpg");
}
/*time stamp 6.53 */

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  imageMode(CENTER);
  /* CORNER IS DEFAULTED */

}


function draw() {
  image(img, width/2, height/2);
  image(img, mouseX, mouseY, width/3.5, height/4);
  /* second one leaves a trail due to not being transparent */

}
