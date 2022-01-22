
var iron, ironImage, bg, backgroundImg, rightWall;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironImage = loadImage("images/iron.png");
 
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.scale = 2;
  bg.velocityY = 6;

  iron = createSprite(200,500,20,50);
  iron.addImage(ironImage);
  iron.scale = 0.3;

  rightWall = createSprite(1000,600,20,1200);
  rightWall.visible = false;
 
}

function draw() {
  if (bg.y<40){
    bg.y=bg.width/2;
  }
  if(iron.y<20){
    iron.y=20;
  }

  if(iron.x<5){
    iron.x=5;
  }


  if (keyDown("up")) {
    iron.velocityY = -10;
  }
  
  if (keyDown("left")) {
    iron.x = iron.x - 5;
  }
  if (keyDown("right")) {
    iron.x = iron.x + 5;
  }
  iron.velocityY = iron.velocityY + 0.5;
  iron.collide(rightWall)

    drawSprites();
   
}

