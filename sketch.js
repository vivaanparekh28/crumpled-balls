
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rubbish
var ground
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	

	//Create the Bodies Here.
rubbish=new Ball()
ground=new Floor()
dustbin=new Bin(755.125,30,100)

bin1=new Bin(730,650,200,10)
bin2=new Bin(705,625,30,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
rubbish.display()
ground.display()
bin1.display()
  bin2.display()
  dustbin.display()
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Body.applyForce(rubbish.body,rubbish.body.position,{x:55,y:-65})

	}
}



