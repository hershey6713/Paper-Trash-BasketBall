
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(85,650,10);
	ground = new Ground(400,680,800,10);
	trashLeft = new Trashbin(690,625,10,100);
	trashRight = new Trashbin(770,625,10,100);
	trashBottom = new Trashbin(730,670,80,10);
	//
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper.display();
  ground.display();
  trashLeft.display();
  trashRight.display();
  trashBottom.display();
  //keyPressed();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Body.applyForce(paper.paper,paper.paper.position,{x:17,y:-16});
	}
} 