var ed = 100;
var ex = 150;
var ey = 200; //could say it equals 0, but this is just saying it exists in global

var rx = 300;
var ry = ey;
var rw = ed;
var rh = ed;

function setup() {
  createCanvas(640, 480);
  // var v = 100;
  // createCanvas(640, 480);
  // noCursor();
  // smooth();
  // stroke(255);
  // // noStroke();
  // background('red');
}

function draw() {
  background (#) //in draw bc keeps circles from repeating


  // var mdist = dist(mouseX, mouseY, ex, ey);

  // if(mdist < ed/2) {
  //   fill(0);
  // } else {
  //   fill(255);
  // }


  ellipse(ex, ey, ed);
 var speed = 15
  if(keyIsPressed) {
    if(key == "w"){
      println("forward");
    ey-=speed;
    }

    if(key == "a"){
      println("left");
      ex-=speed
    }

    if(key == "d"){
      println("right");
      ex+=speed
    }

    if(key == "s"){
      println("down");
      ey+=speed
    }

  }

  // if(mouseX > rx && mouseY < rh + ry && mouseX < rx + rw && mouseY > ry) {
  //   fill(255, 0, 0);
  // } else {
  //   fill(255);
  // }
  // rect(rx, ry, rw, rh);
  // println("mx: ", mouseX, "my: ", mouseY, rx, ry);
  // rectMode(CORNER);
  // if(mouseX < width/2){
  //   fill(255, 45, 32);
  //   ellipse(width/2, height/2, 100);
  // }
  // if (mouseX > width/2) {
  //   fill(10, 45, 32);
  //   ellipse(width/2, height/2, 100);
  // }
  //
  // if(mouseIsPressed){
  //
  //   background(255, 0, 0);
  //   fill(mouseX, mouseY, pmouseX, pmouseY);
  //   noStroke();
  //   ellipse(mouseX, mouseY, 200);
  // }
  // var mouseDist = dist(mouseX, mouseY, pmouseX, pmouseY)
  // strokeWeight(10); //a number, mouseX, mouseDist
  // background(255, map(mouseDist, 0, 200, 0, 255), 0, 5); //mouseDist
  // // ellipse(mouseX, mouseY, 20);
  // line(mouseX, mouseY, pmouseX, pmouseY);
  // println(dist()); //"x: ", mouseX, "y: ", mouseY
}

// function mousePressed() {
//   background(255, 0, 0);
//
// }
//
// function mouseReleased() {
//
//   background(0, 255, 0);
//
// }
