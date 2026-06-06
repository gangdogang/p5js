function setup() {
  createCanvas(600, 400);
  colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
  let t = frameCount * 0.04;
  let bob = sin(t) * 10;
  let sway = cos(t * 0.8) * 8;
  let pandaScale = 1 + sin(t * 1.4) * 0.08;

  let bgTop = color((195 + frameCount * 0.5) % 360, 22, 96);
  let bgBottom = color((220 + frameCount * 0.5) % 360, 30, 90);
  drawGradientBackground(bgTop, bgBottom);

  let bambooA = color((110 + sin(t) * 25 + 360) % 360, 70, 65);
  let bambooB = color((140 + cos(t * 1.2) * 25 + 360) % 360, 80, 75);

  drawBamboo(100 + sway, bambooA, 40, 120);
  drawBamboo(515 - sway * 0.7, bambooB, 30, 150);

  push();
  translate(300, 215 + bob);
  scale(pandaScale);
  drawPanda();
  pop();
}

function drawGradientBackground(c1, c2) {
  noFill();
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    stroke(lerpColor(c1, c2, inter));
    line(0, y, width, y);
  }
}

function drawBamboo(x, bambooColor, w, segmentH) {
  stroke(hue(bambooColor), saturation(bambooColor), brightness(bambooColor) - 15);
  strokeWeight(3);
  fill(bambooColor);

  rect(x - w / 2, -50, w, segmentH + 30);
  rect(x - w / 2, 100, w, segmentH);
  rect(x - w / 2, 250, w, segmentH + 40);

  strokeWeight(5);
  line(x - w / 2, 105, x + w / 2, 105);
  line(x - w / 2, 255, x + w / 2, 255);

  noStroke();
  fill(hue(bambooColor), saturation(bambooColor) + 10, brightness(bambooColor) - 10);
  triangle(x + w / 2, 105, x + w / 2 + 40, 85, x + w / 2 + 30, 115);
  triangle(x - w / 2, 235, x - w / 2 - 40, 215, x - w / 2 - 30, 245);
  triangle(x + w / 2, 315, x + w / 2 + 40, 295, x + w / 2 + 30, 325);
}

function drawPanda() {
  fill(0, 0, 100);
  stroke(0, 0, 45);
  strokeWeight(1);
  ellipse(0, -35, 200, 200);

  noStroke();
  fill(0, 0, 0);
  ellipse(-70, -85, 50, 50);
  ellipse(70, -85, 50, 50);
  ellipse(-40, -35, 30, 30);
  ellipse(40, -35, 30, 30);

  fill(0, 0, 100);
  ellipse(-40, -35, 10, 10);
  ellipse(40, -35, 10, 10);

  fill(0, 0, 0);
  triangle(-10, -15, 10, -15, 0, 5);
  ellipse(0, 15, 15, 10);

  fill(0, 0, 100);
  stroke(0, 0, 45);
  strokeWeight(1);
  rect(-100, 45, 200, 100);

  noStroke();
  fill(0, 0, 0);
  ellipse(-50, 65, 60, 60);
  ellipse(50, 65, 60, 60);
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveGif('panda_bamboo_animation', 5);
  }
}

