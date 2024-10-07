// TODO: global state variables

let cc;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  cc = 0;
}

function draw() {
  if (cc > 50) {
    fill(200, 0, 200);
  }
  ellipse(width / 2, height / 2, 5*cc);
}

function mouseReleased() {
  cc += 1;
}
