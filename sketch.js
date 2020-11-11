var rect1,rect2;



function setup() {

  createCanvas(800,400);
  
  rect1=createSprite(300,200,70,70);
  rect1.shapeColor="green";

  rect2=createSprite(200,200,80,80);
  rect2.shapeColor="green";
}

function draw() {
  background("black");  
  rect2.x=mouseX;
  rect2.y=mouseY;
  if(rect1.x-rect2.x<rect1.width/2+rect2.width/2
    && rect2.x-rect1.x<rect2.width/2+rect1.width/2
    && rect2.y-rect1.y<rect2.width/2+rect1.width/2
    && rect1.y-rect2.y<rect1.width/2+rect2.width/2){
      rect1.shapeColor="red";
      rect2.shapeColor="red";
    }
  else{
    rect1.shapeColor="green";
    rect2.shapeColor="green";
  }
  drawSprites();
}