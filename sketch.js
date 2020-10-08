var stable, movable;


function setup() {
  createCanvas(800,400);
  stable = createSprite(400, 200, 50, 50);
  movable = createSprite(200,200,60,70);
  
  
}

function draw() {
  background("Yellow");  
  
  movable.x = World.mouseX;
  movable.y = World.mouseY;

  stable.shapeColor = "Red";
  movable.shapeColor = "Orange";
  
  if(stable.x-movable.x<movable.width/2+stable.width/2 && movable.x-stable.x<movable.width/2+stable.width/2 && stable.y-movable.y<movable.width/2+stable.width/2 && movable.y-stable.y<movable.width/2+stable.width/2){

      stable.shapeColor="turquoise";
      movable.shapeColor="green";

  }

  
  console.log(movable.width/2 + stable.width/2);
  drawSprites();
}