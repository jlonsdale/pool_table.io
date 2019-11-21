class Game {

  constructor(mainBall) {
    this.mainBall = mainBall
    this.balls = [mainBall, new Ball(300,300,'red'), new Ball(325,275,'blue'), new Ball(275,275,'blue'), new Ball(300,250,'yellow'), new Ball(350,250,'yellow'), new Ball(250,250,'yellow')]
  }

  checkCollision() {

    this.collision(this.balls[0],this.balls[1])
    this.collision(this.balls[0],this.balls[2])
    this.collision(this.balls[0],this.balls[3])
    this.collision(this.balls[0],this.balls[4])
    this.collision(this.balls[0],this.balls[5])
    this.collision(this.balls[0],this.balls[6])

    this.collision(this.balls[1],this.balls[2])
    this.collision(this.balls[1],this.balls[3])
    this.collision(this.balls[1],this.balls[4])
    this.collision(this.balls[1],this.balls[5])
    this.collision(this.balls[1],this.balls[6])

    this.collision(this.balls[2],this.balls[3])
    this.collision(this.balls[2],this.balls[4])
    this.collision(this.balls[2],this.balls[5])
    this.collision(this.balls[2],this.balls[6])

    this.collision(this.balls[3],this.balls[4])
    this.collision(this.balls[3],this.balls[5])
    this.collision(this.balls[3],this.balls[6])

    this.collision(this.balls[4],this.balls[5])
    this.collision(this.balls[4],this.balls[6])

    this.collision(this.balls[5],this.balls[6])



  }

  collision(ball1, ball2) {
    var a = 20;
    var x = ball1.xPos - ball2.xPos;
    var y = ball1.yPos - ball2.yPos;
    if (a > Math.sqrt((x * x) + (y * y))) {
      this.collisionVelocity(ball1,ball2)
      while (a > Math.sqrt((x * x) + (y * y))) {
        ball1.setPosition(ball1.xPos+ball1.xVel*0.1,ball1.yPos+ball1.yVel*0.1)
        ball2.setPosition(ball2.xPos+ball2.xVel*0.1,ball2.yPos+ball2.yVel*0.1)
        var x = ball1.xPos - ball2.xPos;
        var y = ball1.yPos - ball2.yPos;
      }
      return true
    }
    else {}
  };

  collisionVelocity(ball1,ball2) {
    var currentxVel = this.speedAfterImpact(ball1.xVel,ball2.xVel);
    var currentyVel = this.speedAfterImpact(ball1.yVel,ball2.yVel);
    ball2.giveVelocity(currentxVel['2'],currentyVel['2']);
    ball1.giveVelocity(currentxVel['1'],currentyVel['1']);
  };

  speedAfterImpact(u1,u2) {
    var v1 = ( u1 + u2 + 0.80*(u2 - u1) )/2
    var v2 = ( u1 + u2 + 0.80*(u1 - u2) )/2
    return {'1' : v1,
            '2' : v2};
  }


}
