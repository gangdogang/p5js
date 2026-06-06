function setup() {
  createCanvas(400, 600);
  noLoop();
}

function draw() {
  background(220, 230, 240);

  stroke(0);
  strokeWeight(2);

  // 몸통
  fill(60, 80, 160);
  rect(80, 420, 240, 200, 60, 60, 0, 0);

  // 목
  fill(255, 225, 200);
  rect(170, 380, 60, 60);

  // 얼굴
  ellipse(200, 280, 190, 230);

  // 머리카락
  fill(40);
  arc(200, 260, 200, 210, PI, TWO_PI);
  rect(105, 260, 15, 70);
  rect(280, 260, 15, 70);

  // 안경 테
  noFill();
  stroke(20);
  strokeWeight(4);
  rect(130, 270, 55, 45, 10);
  rect(215, 270, 55, 45, 10);
  line(185, 292, 215, 292);

  // 눈동자
  fill(0);
  noStroke();
  ellipse(157, 292, 12, 12);
  ellipse(242, 292, 12, 12);

  // 코
  stroke(180, 140, 120);
  strokeWeight(2);
  line(200, 305, 200, 335);

  // 입
  noFill();
  stroke(180, 70, 70);
  arc(200, 365, 50, 25, 0.3, PI - 0.3);

  // 옷깃
  fill(255);
  stroke(0);
  strokeWeight(2);

  push();
  translate(200, 420);
  rotate(0.4);
  rect(-25, 0, 40, 40);
  pop();

  push();
  translate(200, 420);
  rotate(-0.4);
  rect(-15, 0, 40, 40);
  pop();
}
