
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var gameState = 1
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	//Ground Body
	ground = new Ground(400,650,800,20)

	//Dustbin Bodies
	dustbin = new Dustbin()
	// dustbinLeft = new Dustbin(540,590,20,100)
	// dustbinRight = new Dustbin(760,590,20,100)

	//Paper Body
	paperObject = new Paper(150,640)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
 
  //Display Bodies
  paperObject.display();

  ground.display();

  dustbin.display();
//   dustbinLeft.display();
//   dustbinRight.display();

 
if(gameState == 1){
  if(keyDown(UP_ARROW)){
	Body.applyForce(paperObject.body,paperObject.body.position,{x:50,y:-40})
	gameState = 2
		}
	}	
}

function keyPressed(){
	if(keyCode === 32 && gameState == 2){
		Matter.Body.setPosition(paperObject.body,{x:150,y:640})
		gameState = 1
	}
}




