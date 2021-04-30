var fixed,moving;
var ball;
function setup() {
createCanvas(800,800);
fixed=  createSprite(400, 200, 80, 70);
moving=  createSprite(600, 300, 70, 80);
ball= createSprite(50,200,15,15);
ball.velocityX=2;
}

function draw() {
  background(0);  
  moving.x=World.mouseX;
  moving.y=World.mouseY;

  if(moving.x-fixed.x<=moving.width/2+fixed.width/2
    &&fixed.x-moving.x<=moving.width/2+fixed.width/2
    &&moving.y-fixed.y<=moving.height/2+fixed.height/2
    &&fixed.y-moving.y<=moving.height/2+fixed.height/2){
    moving.shapeColor="red";
    fixed.shapeColor="red";
    textSize(30);
    text("collision is happening",400,400);
  }
  else{
    moving.shapeColor="green";
    fixed.shapeColor="green";
    textSize(30);
    text("collision is not happening",400,400);
  }

  if(ball.x-moving.x<=ball.width/2+moving.width/2
    &&moving.x-ball.x<=ball.width/2+moving.width/2){
    ball.velocityX=ball.velocityX*(-1);
  }

  if(ball.y-moving.y<=ball.height/2+moving.heiht/2
    &&moving.y-ball.y<=ball.height/2+moving.height/2){
    ball.velocityY=ball.velocityY*(-1);
  }

  drawSprites();
}