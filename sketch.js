var astro;
var bg, bgimg;
var brush;
var gym;
var bath;
var eat;
var move;
var invisible1, invisible2, invisible3, invisible4

function preload(){

  //To pre load the images/animation.
  bgimg=loadImage("iss.png");
  sleep=loadImage("sleep.png");
  brush=loadAnimation("brush.png");
  gym=loadAnimation("gym1.png", "gym2.png");
  bath=loadAnimation("bath1.png", "bath2.png");
  move=loadAnimation("move1.png", "move.png");
  eat=loadAnimation("eat1.png", "eat2.png");
 
  
}

function setup() {
  
  //To create the canvas 
  createCanvas(450, 300);
  
  //To create the sea do the following commands
  bg = createSprite(225, 150, 500, 300);
  bg.addImage("image", bgimg);
  bg.scale = 0.090;
  
  astro = createSprite(225, 150);
  astro.addImage("sleeping", sleep);
  astro.scale = 0.070;
  
  invisible1 = createSprite(1, 150, 5, 300);
  invisible1.visible = false;

  invisible2 = createSprite(450, 150, 5, 300);
  invisible2.visible = false;

  invisible3 = createSprite(225, 1, 450, 1);
  invisible3.visible = false;

  invisible4 = createSprite(225, 300, 450, 1);
  invisible4.visible = false;  
}

function draw(){
  background(220);
  edges = createEdgeSprites();
  if (keyDown("UP_ARROW")){
    
    astro.addAnimation("brushing", brush);
    astro.changeAnimation("brushing");
    astro.x = 350;
    astro.y = 275;
    astro.velocityX = 0;
    astro.velocityY = 0;
    
  }
  if (keyDown("DOWN_ARROW")){
    
    astro.addAnimation("gymming", gym);
    astro.changeAnimation("gymming");
    astro.x = 225;
    astro.y = 275;
    astro.velocityX = 0;
    astro.velocityY = 0;
    
  }
  if (keyDown("LEFT_ARROW")){  
    astro.addAnimation("bathing", bath);
    astro.changeAnimation("bathing");
    astro.x = 225;
    astro.y = 275;
    astro.velocityX = 0;
    astro.velocityY = 0;
    
  }
  
  if (keyDown("RIGHT_ARROW")){
    
    astro.addAnimation("eating", eat);
    astro.changeAnimation("eating");
    astro.velocityX =  1;
    astro.velocityY = -1;
    
  }
  
  if (keyDown("M")){
    
    astro.addAnimation("moveing", move);
    astro.changeAnimation(move);
    astro.velocityX = -1;
    astro.velocityY =  1;
    
  }
  
  astro.bounceOff(invisible1);
  astro.bounceOff(invisible2);
  astro.bounceOff(invisible3);
  astro.bounceOff(invisible4);
  
  drawSprites();
  
  fill("red");
  textSize(15);
  text("Instructions:", 5, 15);
  text("Up Arrow is for Brushing", 5, 30);
  text("Down Arrow is for Gymming", 5, 45);
  text("Left Arrow is for Bathing", 5, 60);
  text("Right Arrow is for Eating", 5, 75);
  text("M Key is for Moving:", 5, 90);
  
}