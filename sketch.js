
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1,dustbin2,dustbin3;
var paperObject;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	  ground = createSprite(800,650,10000,10);
	  ground.shapeColor=color("yellow");
	  
	  box1 = createSprite(700,640,100,20);
	  box2 = createSprite(660,610,20,100);
	  box3 = createSprite(740,610,20,100);
	  

	  paperObject=createSprite(200,650,20,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  keyPressed();
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	paperObject.velocityX=45;
	paperObject.velocityY=-45;
	}
	if(paperObject.x>659){
		paperObject.velocityX=0;
		paperObject.velocityY=3;
		if(paperObject.y>640){
			paperObject.velocityY=0;
		}
	}
	
}

