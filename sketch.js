var ex = 200;
var ey = 200;
var ed = 30; //could say it equals 0, but this is just saying it exists in global

var ts = "Get Your Score Back To Zero!";

var score = 0;
var doonce = 1;

var squarestate = 1;

var rx = 200;
var ry = 200;
var rw = 100;
var rh = 100;

var tx = 300
var ty = 250
var tw = 100
var th = 100

var speed = 10


function setup() {
  createCanvas(640, 480);

}

function draw() {
  background (150, 100); //in draw bc keeps circles from repeating

  textSize(32);
   text(score, 550, 30);

   textSize(32);
   text(ts, 10, 30);


fill(0);

  if(ex+5 > rx && ex < rx + rw + 5 && ey < ry + rh + 5 && ey+5 > ry) {
      background(255, 100, 330, 50);

      if(doonce == 1){
        score++;
        doonce = 0;
      }
      squarestate = 1;
    }
    else {
      background(100, 255, 110, 50);

      if(squarestate == 0) {
        rect(rx, ry, rw, rh);
        // score--;
      }
      doonce = 1;
    }

    if(ex+5 > tx && ex < tx + tw + 5 && ey < ty + th + 5 && ey+5 > ty) {
        background(255, 100, 330, 50);
      if(doonce == 1){
          score--;
          doonce = 0;
        }
        squarestate = 1;
      }
      else {

        if(squarestate == 0) {
          rect(ry-20, rx-20, rh-20, rw-20);
          // score--;
        }
        doonce = 1;
      }
  rect(tx, ty, tw, th);
  // rect(300, 250, 400, 60)
  rect(rx, ry, rw, rh);

  ellipse(ex, ey, ed);


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


  } //end of ifkey

} //end of functdraw
