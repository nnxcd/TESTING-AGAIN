p5.disableFriendlyErrors = true;

const title = 'geometry';
let palette = [];
let motif;
let backgroundColor = '#0f0f0f';

function setup() {
  createCanvas(1000, 1000, WEBGL);
  setAttributes('antialias', true);
  setAttributes('depth', true);
  setAttributes('alpha', true);
  angleMode(RADIANS);
  rectMode(CENTER);
  ellipseMode(CENTER);
  textAlign(CENTER, CENTER);
  pixelDensity(1);
  smooth();
  frameRate(30);
  noStroke();
  init();
}

function initCamera() {
  ortho(-width, width, -height, height, -10000, 10000);
  const d = 1000;
  camera(0, 0, d , 0, 0, 0, 0, 1, 0);
}

function init() {
  initCamera();
  const orgPalette = getColorScheme('Giftcard'); 
  palette = repeatPalette(orgPalette, 3);
  motif = new Motif({
    originX: 0,
    originY: 0,
    originZ: 0,
  });
}

function draw() {
  background(palette.colors[2]);
  ambientLight(255);
  motif.run();
}