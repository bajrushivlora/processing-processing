var ellipseDiameter = 90;
var ellipseRandom;
var colors;

function setup () {
    createCanvas(windowWidth, windowHeight);
    // this is a color array which is a list of things in the square brackets
    colors = [color(244, 66, 191)];
}

function draw() {
    ellipseRandom = random(1, ellipseDiameter);
    if (mouseIsPressed) {
        fill(255);
    //  otherwise fill with pink
    } else {
        fill(getRandomColor());
    }
    //   draw the circle, wherever the circle is, and 
    //   take that one number in the ellipseRandom and use it twice to create a circle 

    //   it was ellipse(mouseX, mouseY, 40, 40) which makes the diameter 40, 
    //   but since we declared it in the variable, we can erase 40, 40
    ellipse(mouseX, mouseY, ellipseDiameter, ellipseDiameter);
    
    line(30, 20, 85, 75);
    //   ellipseDiameter = ellipseDiameter + 1;
    //   every frame, add one pixel to the ellipse diameter,
    //   ellipse gets bigger and bigger with every movement
}

function getRandomColor() {
    return colors[int(random(0, colors.length))];
}









let ellipseWidth;
let ellipseHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  background(0);
  ellipseWidth = 300;
  ellipseHeight = 300;
}

function draw() {
  // keep draw() here to continue looping while waiting for keys
}

function keyPressed() {
  let keyIndex = -1;
  if (key >= 'a' && key <= 'z') {
    keyIndex = key.charCodeAt(0) - 'a'.charCodeAt(0);
  }
  if (keyIndex === -1) {
    // If it's not a letter key, clear the screen
    background(230);
  } else {
    // It's a letter key, fill a rectangle
    randFill_r = Math.floor(Math.random() * 255 + 1);
    randFill_g = Math.floor(Math.random() * 225 + 1);
    randFill_b = Math.floor(Math.random() * 225 + 1);
    fill(randFill_r, randFill_g, randFill_b);
    let x = map(keyIndex, 0, 30, 0, width - ellipseWidth);
    let y = map(keyIndex, 0, 30, 0, height - ellipseHeight);
    ellipse(x, y, ellipseWidth, ellipseHeight);
  }
}
