var Square1,Square2;


function setup() {
  createCanvas(800,400);
  Square1=createSprite(400, 200, 50, 50);
  Square2=createSprite(200, 400, 50, 50);
}

function draw() {
  background("pink");  
 Square2.x=mouseX;
 Square2.y=mouseY;
 if(Square1.x-Square2.x<Square1.width/2+Square2.width/2 && Square2.x-Square1.x<Square1.width/2+Square2.width/2 && Square1.y-Square2.y<Square1.height/2+Square2.height/2 && Square2.y-Square1.y<Square1.height/2+Square2.height/2 ){
Square1.shapeColor="red";
Square2.shapeColor="blue";

 }
else {
  Square1.shapeColor="grey";
  Square2.shapeColor="grey";
}
  drawSprites();
}