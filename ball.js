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
    this.cor = 0.4;
  }

  giveVelocity(xVel,yVel) {
    if(xVel>50) {
      xVel=50
    }
    else if(xVel<-50) {
      xVel=-50
    }

    if(yVel>30) {
      yVel=30
    }
    else if(yVel<-30) {
      yVel=-30
    }
    console.log("x="+xVel+"y="+yVel  )
    this.xVel=xVel;
    this.yVel=yVel;
  }

  calculateVelocity() {
    this.xVel=this.xVel*0.99
    this.yVel=this.yVel*0.99
  }

  setPosition(x,y) {
    this.xPos = x;
    this.yPos = y;
  }

  calculatePosition() {
    this.detectCollisionWithBoarder()
    this.yPos += this.yVel*this.dt;
    this.xPos += this.xVel*this.dt;
  }

  detectCollisionWithBoarder() {
    if(this.yPos+this.radius>this.canvas.height) {
      this.yDirection = 'up';
      this.yPos = this.canvas.height-this.radius;
      this.yVel= -this.yVel*this.cor;
    }
    if(this.yPos-this.radius<0) {
      this.yDirection = 'down';
      this.yPos = this.radius;
      this.yVel= -this.yVel*this.cor;
    }
    if(this.xPos+this.radius>this.canvas.width) {
      this.xDirection = 'left';
      this.xPos = this.canvas.width-this.radius;
      this.xVel= -this.xVel*this.cor;
    }
    if(this.xPos-this.radius<0) {
      this.xDirection = 'right';
      this.xPos = this.radius;
      this.xVel= -this.xVel*this.cor;
    }
  };
};
