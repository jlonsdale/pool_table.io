$( document ).ready(function() {

  setInterval(draw, 10);

  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  function draw() {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#1E721A";
    ctx.fillRect(0,0,canvas.width, canvas.height);
    drawBall(300,200);
  };

  function drawBall(x,y) {
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fill();
    ctx.closePath();
  }

});
