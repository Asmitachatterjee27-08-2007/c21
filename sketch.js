var movingRect,fixedRect;
var ob1,ob2;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(800, 200, 50, 50);
  fixedRect.shapeColor="white";

  movingRect=createSprite(0,200,20,50);
  movingRect.shapeColor="white";
  fixedRect.velocityX=-3;
  movingRect.velocityX=3;

  ob1=createSprite(100,50,70,90);
  ob2=createSprite(600,50,20,60);
  ob1.shapeColor="orange";
  ob2.shapeColor="yellow";
  
}

function draw() {
  background(0); 
  ob2.x=mouseX;
  ob2.y=mouseY;

  if(isTouching(ob1,ob2)){
    ob1.shapeColor="red";
    ob2.shapeColor="pink";
  }
  else{
    ob1.shapeColor="orange";
  ob2.shapeColor="yellow";
  }

  
 
bounceOff(movingRect,fixedRect);
  drawSprites();
}

