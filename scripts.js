let bg;
let y1 = 0;
let x1 = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = loadImage('images/boxes.png');
  strokeWeight(60);
  frameRate(300);
}

function draw() {
    background(bg);

    line(x1, y1, x1, y1);
    line(x1, y1, x1, y1);
    line(x1, y1, x1, y1);
    line(x1, y1, x1, y1);

    if (keyCode == UP_ARROW) {
        y1 = y1-5;  
        stroke('red');
    } 
    else if (keyCode == DOWN_ARROW) {
        y1 = y1+5;
        stroke('#42f44b');
    }
    else if (keyCode == LEFT_ARROW) {
        x1 = x1-5;
        stroke('yellow');
    }
    else if (keyCode == RIGHT_ARROW) {
        x1 = x1+5;
        stroke('blue');
    }
}  
