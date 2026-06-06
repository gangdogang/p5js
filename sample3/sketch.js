function setup() {
  // 원본 사이즈 400x600 그대로 유지
  createCanvas(400, 600);
}

function draw() {
  // 기본 배경색
  background(220, 230, 240);

  // [KEYBOARD EVENT] 아무 키나 누르고 있으면 파티 모드!
  if (keyIsPressed) {
    // 1. 반복문(for)과 랜덤(random)을 이용한 색종이 효과
    for (let i = 0; i < 20; i++) {
      noStroke();
      fill(random(255), random(255), random(255));
      rect(random(width), random(height), 10, 10);
    }
    // 2. 파티 분위기를 위해 배경색 반전 느낌의 효과
    background(50, 50, 80, 100); 
  }

  // [움직임 부여] 캐릭터가 부드럽게 위아래로 들썩임
  let bounce = sin(frameCount * 0.1) * 15;
  
  // [MOUSE EVENT 1] 마우스 위치에 따른 캐릭터 기울기 (charTilt)
  let charTilt = map(mouseX, 0, width, -0.1, 0.1);

  push();
  // 캐릭터의 위치를 유지하며 바운스와 기울기만 적용
  translate(0, bounce);
  
  // 회전 중심을 캐릭터 중앙 부근으로 잡기 위해 이동 후 회전
  translate(200, 300);
  rotate(charTilt);
  translate(-200, -300);

  // --- 원본 코드 기반 캐릭터 그리기 시작 ---
  stroke(0);
  strokeWeight(2);
  
  // 몸통: 키보드 입력 시 색상이 랜덤하게 번쩍임
  if (keyIsPressed) {
    fill(random(255), random(255), random(255));
  } else {
    fill(60, 80, 160);
  }
  rect(80, 420, 240, 200, 60, 60, 0, 0); 

  // 목
  fill(255, 225, 200);
  rect(170, 380, 60, 60);

  // 얼굴
  ellipse(200, 280, 190, 230);

  // [추가] 키보드 입력 시 나타나는 파티 모자
  if (keyIsPressed) {
    fill(255, 255, 0);
    triangle(150, 200, 250, 200, 200, 100);
    fill(255, 0, 0);
    ellipse(200, 100, 20, 20);
  }

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
  
  // 눈동자: [MOUSE EVENT 2] 마우스를 따라 시선 이동
  fill(0);
  noStroke();
  let mx = map(mouseX, 0, width, -8, 8);
  let my = map(mouseY, 0, height, -8, 8);
  ellipse(157 + mx, 292, 12, 12);
  ellipse(242 + mx, 292, 12, 12);

  // 코
  stroke(180, 140, 120);
  strokeWeight(2);
  line(200, 305, 200, 335);
  
  // 입: [MOUSE EVENT 3] 클릭 시 입 모양 변화
  noFill();
  stroke(180, 70, 70);
  if (mouseIsPressed) {
    ellipse(200, 365, 40, 30); // 클릭 시 입을 벌림
  } else {
    arc(200, 365, 50, 25, 0.3, PI - 0.3); 
  }

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
  
  pop();
}

// [제약 사항] 'S' 키를 누르면 GIF 저장
function keyPressed() {
  if (key === 's' || key === 'S') {
    saveGif('my_400x600_char.gif', 3);
  }
}
