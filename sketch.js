var fixedRect , movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200,200,50,80);
  movingRect = createSprite(400,200,80,30);
  gameObject1 = createSprite(100,100,50,50);
  gameObject2 = createSprite(200,100,50,50);
  gameObject3 = createSprite(300,100,50,50);
  gameObject4 = createSprite(400,100,50,50);
}

function draw() {
  background(0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "yellow";
  gameObject1.shapeColor = "orange";
  gameObject2.shapeColor = "green";
  gameObject3.shapeColor = "white";
  gameObject4.shapeColor = "pink";
  console.log(movingRect.x-fixedRect.x);
   if(isTouching(movingRect,gameObject3) ) {

    movingRect.shapeColor = "red";
    gameObject3.shapeColor = "red";

   }

   else
   {

    movingRect.shapeColor = "blue";
 gameObject3.shapeColor = "white";
   }
  
  drawSprites();
}

