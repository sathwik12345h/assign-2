var sea,ship;
var seaImage,shipImage;

function preload(){
 
  shipImage = loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png");
  
  seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  sea=createSprite(400,200);
  sea.addImage(seaImage);
  sea.velocityX = -5;
  sea.scale=0.5;

  ship = createSprite(130,200,30,30);
  ship.addAnimation("moving",shipImage);
  ship.scale =0.2;
  
}

function draw() {
  background(0);
  sea.velocityX = -5;

  if(sea.x < 0){
    sea.x = sea.width/4;
  }

 
  drawSprites();
}