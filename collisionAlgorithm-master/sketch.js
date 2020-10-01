var fixedRect, movingRect;
var gameObject1,gameObject2;

function setup() 
{
  createCanvas(400,400);
  fixedRect = createSprite(200, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(200,300,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  /*gameObject1=createSprite(100,100,50,50);
  gameObject1.shapeColor="green";
  gameObject2=createSprite(200,100,50,50);
  gameObject2.shapeColor="green";*/
  movingRect.velocityY=-5;
  fixedRect.velocityY=5;
 }

function draw() {
  background(0,0,0);  
  bounceOff (movingRect,fixedRect);
  /*movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if (isTouching(movingRect,fixedRect))
{
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}

  else if (isTouching(movingRect,gameObject1))
{
  movingRect.shapeColor = "yellow";
  gameObject1.shapeColor = "yellow";
}

 else if (isTouching(movingRect,gameObject2))
{
  movingRect.shapeColor = "blue";
  gameObject2.shapeColor = "blue";
}

else 
{
  movingRect.shapeColor = "green";
  gameObject2.shapeColor = "green";
  gameObject1.shapeColor = "green";
  fixedRect.shapeColor = "green";

  }
*/
 
   drawSprites();
}
