class Game {

  constructor(mainBall) {
    this.mainBall = mainBall
    this.balls = [mainBall, new Ball(200,300, 'blue'), new Ball(100,300, 'blue')]
  }

  checkCollision() {
    this.collision(this.mainBall,this.balls[1])
    this.collision(this.mainBall,this.balls[2])
    this.collision(this.balls[2],this.balls[1])
  }

  collision(ball1, ball2) {
    var a = 20;
    var x = ball1.xPos - ball2.xPos;
    var y = ball1.yPos - ball2.yPos;
    if (a > Math.sqrt((x * x) + (y * y))) {
      console.log(true);
      this.collisionVelocity(ball1,ball2)
    } else {
      console.log(false);
    }
  }

collisionVelocity(ball1,ball2) {


  ball2.giveVelocity(ball1.xVel,ball1.yVel)
  ball1.giveVelocity(1,1)

  ball2.calculatePosition()
  ball2.calculatePosition()

}

}
