$( document ).ready(function() {

  setInterval(draw, 10);

  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  var x1
  var x2
  var y1
  var y2

  ball = new Ball(300,300)

  $( "#canvas" ).mousedown(function(canvas) {
    var offset = $(this).offset();
    x1 = canvas.clientX- offset.left;
    y1 = canvas.clientY- offset.top;

  });

  $( "#canvas").mouseup(function(canvas) {
    var offset = $(this).offset();
    x2 = canvas.clientX- offset.left;
    y2 = canvas.clientY- offset.top;
    ball.giveVelocity(x2-x1,y2-y1)
  });

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#1E721A";
    ctx.fillRect(0,0,canvas.width, canvas.height);
    ball.calculateVelocity()
    ball.calculatePosition()
    drawBall(ball.xPos,ball.yPos);
  };

  function drawBall(x,y) {
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fill();
    ctx.closePath();
  }

});
