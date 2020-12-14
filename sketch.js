const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Ground(390,150,400,40)

	bobObject1 = new Bob(250,500,75);
	bobObject2 = new Bob(300,500,75);
	bobObject3 = new Bob(350,500,75);
	bobObject4 = new Bob(400,500,75);
	bobObject5 = new Bob(450,500,75);

	rope1 = new Rope(bobObject1.body, roof.body, -35*4,0);
	rope2 = new Rope(bobObject2.body, roof.body, -35*2,0);
	rope3 = new Rope(bobObject3.body, roof.body, -35*0,0);
	rope4 = new Rope(bobObject4.body, roof.body, -35*-2,0);
	rope5 = new Rope(bobObject5.body, roof.body, -35*-4,0);

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("white");

Engine.update(engine);

  drawSprites();
 roof.display();
 bobObject1.display();
 bobObject2.display();
 bobObject3.display();
 bobObject4.display();
 bobObject5.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-500,y:500})
	}
}
