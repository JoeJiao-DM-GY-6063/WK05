// TODO: animation across the screen
//       wrap around
//       bounce
 let x = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  x = 0;
}

function draw() {
  background(20);
  
  //draw stuff
  let xpos = 10 * frameCount;
  ellipse(x % width,height / 2, mouseX);

  //update some parameter
  x = x + 4;

  //check if need to reset x





}
