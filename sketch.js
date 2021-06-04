var fixedRect, movingRect;
var rect1,rect2;
var edges;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(900, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(100,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1=createSprite(600,100,30,80);
  rect1.shapeColor="blue";
  rect2=createSprite(600,700,30,80);
  rect2.shapeColor="blue";
  rect1.velocityY=+5;
rect2.velocityY=-5;
  edges=createEdgeSprites();
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

rect1.bounceOff(edges);
rect2.bounceOff(edges);
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
    fixedRect.velocityX=random(-5,5);
    fixedRect.velocityY=random(-5,5);
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    fixedRect.velocityY=0;
    fixedRect.velocityX=0;

  }
  bounceOff(rect1,rect2);
  drawSprites();


  
}
