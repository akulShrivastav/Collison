var movingRect,fixedRect;
var rec1, rec2;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 100, 50);
  movingRect = createSprite(800,200,30,80);
  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "blue";
  fixedRect.debug= true;
  movingRect.debug=true;
  rec1 = createSprite(100,200,59,148)
  rec2 = createSprite (200,54,14,101)
}

function draw() {
  background(255,255,255);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
 console.log( movingRect.x - fixedRect.x);

if(isTouching(movingRect,rec1)){
movingRect.shapeColor = "Blue"
rec1.shapeColor = "Green"
}
else{
  movingRect.shapeColor = "Violet"
  rec1.shapeColor = "Coral"
}
  drawSprites();
}


function isTouching(obj1,obj2){
  if(Math.abs(obj1.x-obj2.x )<= obj1.width/2+obj2.width/2 && (Math.abs(obj1.y-obj2.y)<=obj1.height/2+obj2.height/2)){
  return true;
  }
  else{
    return false;
  }
  


}