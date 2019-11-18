class Ball {

  constructor(x,y) {
    this.xPos = x;
    this.yPos = y;
    this.xVel = 0;
    this.yVel = 0;
    this.dt = 0.1
    this.radius = 10
    this.cor = 0.5
    this.canvas = document.getElementById("canvas");
  }

  giveVelocity(xVel,yVel) {
    this.xVel=xVel;
    this.yVel=yVel;
  }

  calculatePosition() {
    this.detectCollision()
    this.yPos += this.yVel*this.dt
    this.xPos += this.xVel*this.dt
  }

  detectCollision() {
    console.log(this.canvas.height)
    if(this.yPos+this.radius>this.canvas.height) {
      this.yPos = this.canvas.height-this.radius
      this.yVel= -this.yVel*this.cor
    }
    if(this.yPos-this.radius<0) {
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
