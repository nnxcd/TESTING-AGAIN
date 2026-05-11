// Define global variables: font and fontSize.
let font;
let fontsize = 50;

async function setup() {
  describe(
    'Three columns of the words “ichi,” “ni,” “san,” and “shi” on a white background. The first column is right aligned, the middle column is center aligned, and the left column is left aligned.'
  );

  createCanvas(windowWidth, windowHeight);
  background(250);

  // Preload the font's file in the canvas's assets directory.
  // loadFont() accepts .ttf or .otf files.
  font = await loadFont('/assets/SourceSansPro-Regular.otf');

  // Set the text styling to the predefined font and font size.
  textFont(font);
  textSize(fontsize);

  // Align the text to the right and run the drawWords() function
  // to generate the left column of text.
  textAlign(RIGHT, CENTER);
  drawWords(width * 0.25);

  // Align the text to the center and run the drawWords() function
  // to generate the middle column of text.
  textAlign(CENTER, CENTER);
  drawWords(width * 0.5);

  // Align the text to the left and run the drawWords() function
  // to generate the left column of text.
  textAlign(LEFT, CENTER);
  drawWords(width * 0.75);
}

function drawWords(x) {
  // The drawWords() function creates four text() instances,
  // using the x coordinate supplied by each column created
  // in setup().
  fill(80);

  text('do', x, 80);

  text('you', x, 150);

  text('have', x, 220);

  text('any', x, 290);
  
  text('idea', x, 360);
}
