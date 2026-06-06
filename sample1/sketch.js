function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(210, 230, 240);



  stroke(34, 139, 34); 
  strokeWeight(3); 
  fill(50, 180, 50); 


  rect(80, 0, 40, 120);
  rect(80, 130, 40, 120);
  rect(80, 260, 40, 140);


  strokeWeight(5); 
  line(80, 125, 120, 125);
  line(80, 255, 120, 255);


  noStroke();
  fill(0, 100, 0); 
  triangle(120, 100, 160, 80, 150, 110);
  triangle(120, 230, 160, 210, 150, 240);
  triangle(80, 300, 40, 280, 50, 310);


  stroke(40, 150, 40);
  strokeWeight(2); 
  fill(60, 190, 60); 


  rect(500, -50, 30, 150);
  rect(500, 110, 30, 150);
  rect(500, 270, 30, 180);


  strokeWeight(4);
  line(500, 105, 530, 105);
  line(500, 265, 530, 265);


  noStroke();
  fill(0, 120, 0);
  triangle(500, 150, 460, 130, 470, 160);
  triangle(530, 320, 570, 300, 560, 330);

  fill(255);

  stroke(100); 
  strokeWeight(1);
  ellipse(300, 180, 200, 200);


  noStroke(); 
  fill(0);
  ellipse(230, 130, 50, 50);
  ellipse(370, 130, 50, 50);


  fill(0);
  ellipse(260, 180, 30, 30);
  ellipse(340, 180, 30, 30);


  fill(255);
  ellipse(260, 180, 10, 10);
  ellipse(340, 180, 10, 10);


  fill(0);
  triangle(290, 200, 310, 200, 300, 220);


  fill(0);
  ellipse(300, 230, 15, 10);

  fill(255);
  stroke(100); 
  strokeWeight(1);
  rect(200, 260, 200, 100);


  noStroke();
  fill(0);
  ellipse(250, 280, 60, 60);
  ellipse(350, 280, 60, 60);
}
