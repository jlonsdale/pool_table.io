class Ball {

  constructor(x,y) {
    this.xPos = x;
    this.yPos = y;
    this.xVel = 0;
    this.yVel = 0;
    this.dt = 0.1
  }

  giveVelocity(xVel,yVel) {
    this.xVel=xVel;
    this.yVel=yVel;
  }

  calculatePosition() {
    this.yPos += this.yVel*this.dt
    this.xPos += this.xVel*this.dt
  }




}
