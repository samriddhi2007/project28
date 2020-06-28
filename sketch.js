var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
paper = new Paper(200,500,50,50);
dustbin = new Dustbin(600,600,70,);

     


	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
   dustbin.display();
paper.display();




  drawSprites();
 
}


function mouseDragged(){

	Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})
	}
	function mouseReleased(){
	paper.body.fly()
	
	}
	

