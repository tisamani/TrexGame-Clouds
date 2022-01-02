var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");
  cloudImage = loadImage("cloud.png");
}

function setup() {
  createCanvas(600, 200);
  
  //create a trex sprite
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50
  
  //create ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage(groundImage)
  ground.velocityX=-2

  invisibleGround = createSprite(200,190,400,20);
  invisibleGround.visible=false
}

function draw() {
  background("black");
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  //jumping the trex on space key press
  if(keyDown("space")&& trex.y>=100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
 
 //stop trex from falling down 
  trex.collide(invisibleGround);
  spawnclouds();
  drawSprites();
}
function spawnclouds(){
  if(frameCount%60==0){
      cloud = createSprite(600,100,40,10);
      cloud.addImage(cloudImage)
      cloud.velocityX = -3
      cloud.y = Math.round(random(10,60))
    }
  
}
