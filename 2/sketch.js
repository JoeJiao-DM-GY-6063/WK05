// TODO: mouse hover effect

function overlapRect(x, y, w, h, c) {
  let betweenX = mouseX > x && mouseX < x + w;
  let betweenY = mouseY > y && mouseY < y + h;

  push();
  if (betweenX && betweenY) {
    fill(c);
  }
  rect(x, y, w, h);
  pop();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(20);

  let rx = 100;
  let ry = 50;
  let rw = 400;
  let rh = 200;

  overlapRect(rx, ry, rw, rh, "deeppink");
  overlapRect(rx, ry, rw, rh, "dodgerblue");

  let cx = 200;
  let cy = 500;
  let cr = 150;

  let distmouse = dist(mouseX, mouseY, cx, cy);
  push();
  if (distmouse < cr) {
    fill("deeppink");
  } else {
    fill(255);
  }
  ellipse(cx, cy, 2 * cr);
  pop();
}
