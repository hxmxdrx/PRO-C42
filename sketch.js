function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();

  hr = hour();
  mn = minute();
  sc = second();

  var scAngle;

  scAngle = map(sc, 0, 60, 0, 360);
  sc = p5.Vector.fromAngle(radians(sc), 60);

  push();
  translate(width / 2, height / 2);
  noFill();
  stroke(150);
  line(0, 0, 30, 0);
  stroke(0);
  pop();

  scAngle = map(mn, 0, 60, 0, 360);
  mn = p5.Vector.fromAngle(radians(mn), 60);

  push();
  translate(width / 2, height / 2);
  noFill();
  stroke(150);
  line(0, 0, 30, 0);
  stroke(0);
  pop();

  scAngle = map(hr, 0, 60, 0, 360);
  hr = p5.Vector.fromAngle(radians(hr), 60);

  push();
  translate(width / 2, height / 2);
  noFill();
  stroke(150);
  line(0, 0, 30, 0);
  stroke(0);
  pop();

}

//push();
//rotate(scAngle);
//stroke(255,0,0);
//strokeWeight(7);
//line(0,0,100,0);
//pop();

//push();
//rotate(mnAngle);
//stroke(255,0,0);
//strokeWeight(7);
//line(0,0,100,0);
//pop();

//push();
//rotate(mnAngle);
//stroke(255,0,0);
//strokeWeight(7);
//line(0,0,100,0);
//pop();