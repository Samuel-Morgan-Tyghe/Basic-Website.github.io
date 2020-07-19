// Where is the circle
//let x, y;
let wiggleamount = 2;
let wiggleamount1 = 2;
let numBalls = 20;
let balls = [];
let wV = wiggleamount;
let img; let img2;
let ballx = [];
let bally = [];
let xin;
let yin;
let trailL;
let l = 0;
let wS = 1;
function preload() {
    img = loadImage('https://qph.fs.quoracdn.net/main-qimg-a5efcba589177855759b7ede17a5a330.webp');
   img2 = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_Blank.svg/320px-Flag_Blank.svg.png');
  
}

function setup() {
  
  createCanvas(720, 400);
  // Starts in the middle
  x = width / 2;
  y = height;
img2.resize( width, height);
img.resize(width,height);
  for (let i = 0; i < numBalls; i++) {
    balls[i] = new Ball(
      random(int(width)),
      random(int(height)),
      2, 2,
      (random_boolean = Math.random() >= 0.5),
      (random_boolean = Math.random() >= 0.5),
      0

    );
  }
}

function draw() {
 //image(img,0,0);
 //background(50);
  fill(15, 195, 185);
image(img2,0,0);

//erase();
  balls.forEach(ball => {
    noStroke();
    ball.display();
ball.back();
  });
  
  
  // Draw a circle
  // noStroke();
  // fill(100);
  //ellipse(x, y, 24, 24);

}

class Ball {
  constructor(xin, yin, wiggleamount, wiggleamount1, directionup, directionleft, wiggletoggle) {
    this.x = xin;
    this.y = yin;
    this.directionup = directionup;
    this.directionleft = directionleft;
    this.wiggleamount = wiggleamount;
    this.wiggleamount1 = wiggleamount1;
    this.wiggletoggle = wiggletoggle;
  }

  display() {

    ellipse(this.x, this.y, 7, 7);


    if (this.y <= 2) {
      this.y = 3;
      this.directionup = false;
     // this.wiggletoggle = 0;

    }
    if (this.y >= height) {
      this.directionup = true;
    //  this.wiggletoggle = 0;
this.y = height -1;
    }
    if (this.x <= 2) {
      this.directionleft = false;
   //   this.wiggletoggle = 0;
      this.x = 3;
    }
    if (this.x >= width) {
      this.directionleft = true;
    //  this.wiggletoggle = 0;
      this.x = width -1;
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
    
    


    if (this.wiggletoggle == 1) {
      this.wiggleamount = this.wiggleamount - wS;
    

    }
    if (this.wiggletoggle == 2) {
            this.wiggleamount = this.wiggleamount -wS;

    }
    
     if (this.wiggletoggle == 3) {
            this.wiggleamount = this.wiggleamount -wS;
    }
    
     if (this.wiggletoggle == 4) {
         this.wiggleamount = this.wiggleamount +wS;

    }
     if (this.wiggletoggle == 5) {
         this.wiggleamount = this.wiggleamount +wS;
    }
     if (this.wiggletoggle == 6) {
         this.wiggleamount = this.wiggleamount +wS;

      this.wiggletoggle = 0
    }
    
    
    
if (this.wiggletoggle == this.wiggletoggle ){
ballx[l] = this.x;
bally[l] = this.y;

l++;
  if (l == 150) { l = 0 }
  for (let i = 0 ; i < ballx.length ; i++){
    ellipse ( ballx[i], bally[i],9,9)
  }
    
}
  

    this.wiggletoggle++;
  }
  
  back() {
         img2.copy(img,int( this.x), int( this.y), 7, 7,int( this.x),int( this.y), 4, 4);

  }
  
}

