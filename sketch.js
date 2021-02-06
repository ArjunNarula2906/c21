var fixedRect, movingRect;
var rect1, rect2, rect3, rect4,movingRectBounceOff,fixedRectBounceOff;
function setup() {
  createCanvas(1200, 800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1 = createSprite(100, 100, 50, 50);
  rect2 = createSprite(200, 100, 50, 50); rect3 = createSprite(300, 100, 50, 50);
  rect4 = createSprite(400, 100, 50, 50);
  rect1.shapeColor = "green";
  rect2.shapeColor = "green";
  rect3.shapeColor = "green";
  rect4.shapeColor = "green";
rect1.velocityY=5;
movingRect.velocityY=5;

movingRectBounceOff = createSprite(400, 800,80,30);
fixedRectBounceOff = createSprite(400, 100, 50, 80);
movingRectBounceOff.velocityY = -5; fixedRectBounceOff.velocityY = +5;
}

function draw() {
  background(0, 0, 0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  bounceOff(movingRectBounceOff,fixedRectBounceOff);
  if (isTouching(rect3, movingRect)) {
    text("Collision Success", 1100, 100)
  }
  else {
    movingRect.shapeColor = "green"; rect1.shapeColor = "green";
  }
  bounceOff(rect1,movingRect);
  drawSprites();
}
