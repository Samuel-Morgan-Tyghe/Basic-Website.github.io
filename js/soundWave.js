// Where is the circle
//let x, y;
let wiggleamount = 3;
let wiggleamountb = wiggleamount;
let wiggleamount1;
let wiggleamount1b;
let numBalls = 200;
let balls = [];
let wV = wiggleamount;
let img;
let img2;
let ballx = [];
let bally = [];
let xin;
let yin;
let trailL;
let l = 0;
let wS = 1;
let sineW = false;
let triangleW = false;
let toothW = false;
let squareW = false;
let typen;


function setup() {
  wiggleamount = random(1, 5);
  wiggleamount1 = random(1, 5);
  wiggleamount1b = wiggleamount1;
 typen = int (random(1,5));
  print (typen);
  if (typen==1) {sineW = true;}  
  if (typen==2) {triangleW = true;}  
  if (typen==3) {toothW = true;}  
  if (typen==4) {squareW = true;}  


  createCanvas(displayWidth, displayHeight);
  // Starts in the middle
  x = width / 2;
  y = height;

  for (let i = 0; i < numBalls; i++) {
    balls[i] = new Ball(
      random(int(width)),
      random(int(height)),
      wiggleamount, wiggleamount, wiggleamount1, wiggleamount1b,
      (random_boolean = Math.random() >= 0.5),
      (random_boolean = Math.random() >= 0.5),
      0

    );
  }
}

function draw() {
  //image(img,0,0);
  //background(0);

  //erase();
  balls.forEach(ball => {
    noStroke();
    ball.display();
  });


  // Draw a circle
  // noStroke();
  // fill(100);
  //ellipse(x, y, 24, 24);
text 
}

class Ball {

  constructor(xin, yin, wiggleamount, wiggleamountb, wiggleamount1, wiggleamount1b, directionup, directionleft, wiggletoggle, ) {
    this.x = xin;
    this.y = yin;
    this.directionup = directionup;
    this.directionleft = directionleft;
    this.wiggleamount = wiggleamount;
    this.wiggleamount1 = wiggleamount1;
    this.wiggletoggle = wiggletoggle;
  }

  display() {


    if (this.y <= 2) {
      this.y = 3;
      this.directionup = false;
      // this.wiggletoggle = 0;

    }
    if (this.y >= height) {
      this.directionup = true;
      //  this.wiggletoggle = 0;
      this.y = height - 1;
    }
    if (this.x <= 2) {
      this.directionleft = false;
      //   this.wiggletoggle = 0;
      this.x = 3;
    }
    if (this.x >= width) {
      this.directionleft = true;
      //  this.wiggletoggle = 0;
      this.x = width - 1;
    }


    if (this.directionup) {
      this.y = this.y - this.wiggleamount - (wiggleamount1 / 2);
    } else {
      this.y = this.y + this.wiggleamount + (wiggleamount1 / 2);
    }


    if (this.directionleft) {
      this.x = this.x - wiggleamount1 + (this.wiggleamount / 2);
    } else {
      this.x = this.x + wiggleamount1 - (this.wiggleamount / 2);
    }


    if (sineW) {

      if (this.wiggletoggle == 1) {
        this.wiggleamount = this.wiggleamount - wS;


      }
      if (this.wiggletoggle == 2) {
        this.wiggleamount = this.wiggleamount - wS;

      }

      if (this.wiggletoggle == 3) {
        this.wiggleamount = this.wiggleamount - wS;
      }

      if (this.wiggletoggle == 4) {
        this.wiggleamount = this.wiggleamount + wS;

      }
      if (this.wiggletoggle == 5) {
        this.wiggleamount = this.wiggleamount + wS;
      }
      if (this.wiggletoggle == 6) {
        this.wiggleamount = this.wiggleamount + wS;

        this.wiggletoggle = 0
      }
    }
    if (triangleW == true) {



      if (this.wiggletoggle == 3) {
        this.wiggleamount = this.wiggleamount * -wS;
      }


      if (this.wiggletoggle == 6) {
        this.wiggleamount = this.wiggleamount * -wS;

        this.wiggletoggle = 0
      }
    }

    if (squareW == true) {



      if (this.wiggletoggle == 0) {
          this.wiggleamount = 8;

      }
      if (this.wiggletoggle == 2) {
          this.wiggleamount = 0;


      }
      if (this.wiggletoggle == 12) {
         this.wiggleamount = -8;

      }

      if (this.wiggletoggle == 14) {
         this.wiggleamount = 0;
      }
      
      if (this.wiggletoggle == 24) {
          this.wiggleamount = 8;
        this.wiggletoggle = 0;
      }
    }


    if (toothW == true) {

      if (this.wiggletoggle == 1) {

          this.wiggleamount = 8 ;

      }

      if (this.wiggletoggle == 2) {
          this.wiggleamount = 0;

      }
    

      if (this.wiggletoggle == 8) {
        this.wiggletoggle = 0;
      }
    }


    if (this.wiggletoggle == this.wiggletoggle) {
      ballx[l] = this.x;
      bally[l] = this.y;

      l++;
      fill(0);

      if (l == 1) {
        l = 0;
      }
      for (let i = 0; i < ballx.length; i++) {
        ellipse(ballx[i], bally[i], 4, 4)
      }


      // fill(10);
      //   ellipse(this.x, this.y, 7, 7);
    }


    this.wiggletoggle++;
  }



}
