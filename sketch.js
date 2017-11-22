var canvas;

function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  colorMode(RGB,255,255,255,1);
}
function keyPressed() {
  clear();
}
function draw() {
  if (mouseIsPressed) {
    stroke(255, 255, 255,0.2)
    strokeWeight(7);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}
