class Ball {

  constructor(x,y,colour) {
    this.xPos = x;
    this.yPos = y;
    this.xVel = 0;
    this.yVel = 0;
    this.dt = 0.1;

    this.colour = colour;
    this.canvas = document.getElementById("canvas");

    this.radius = 10;
    this.cor = 0.5;
    this.mass = 10
    this.adg = 9.81
  }

  giveVelocity(xVel,yVel) {
    this.xVel=xVel;
    this.yVel=yVel;
  }

  frictionalForce() {
    return (this.cof*this.mass*this.adg)
  }

  calculateVelocity() {
    this.xVel=this.xVel*0.98
    this.yVel=this.yVel*0.98
  }

  setPosition(x,y) {
    this.xPos = x;
    this.yPos = y;
  }

  calculatePosition() {
    this.detectCollisionWithBoarder()
    this.yPos += this.yVel*this.dt
    this.xPos += this.xVel*this.dt
  }

  detectCollisionWithBoarder() {
    if(this.yPos+this.radius>this.canvas.height) {
      this.yDirection = 'up'
      this.yPos = this.canvas.height-this.radius
      this.yVel= -this.yVel*this.cor
    }
    if(this.yPos-this.radius<0) {
      this.yDirection = 'down'
      this.yPos = this.radius
      this.yVel= -this.yVel*this.cor
    }
    if(this.xPos+this.radius>this.canvas.width) {
      this.xDirection = 'left'
      this.xPos = this.canvas.width-this.radius
      this.xVel= -this.xVel*this.cor
    }
    if(this.xPos-this.radius<0) {
      this.xDirection = 'right'
      this.xPos = this.radius
      this.xVel= -this.xVel*this.cor
    }
  }
}
