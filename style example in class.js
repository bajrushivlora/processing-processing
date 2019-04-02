var ellipseDiameter = 90;
var ellipseRandom;
var colors;

function setup () {
    createCanvas(windowWidth, windowHeight);
    // this is a color array which is a list of things in the square brackets
    colors = [color(244, 66, 191)];
}

function draw() {
    //  circle that is between 1 and 40, run it once)
    // ellipseRandom = random(1, ellipseDiameter);
    //  if it is pressed, fill it with yellow
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