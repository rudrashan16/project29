const World= Matter.World;
const Bodies= Matter.Bodies;
const Engine= Matter.Engine;
const Constraint = Matter.Constraint;

var engine,world;

var blockObject1,blockObject2,blockObject3,blockObject4,blockObject5,blockObject6,blockObject7,blockObject8,ground1;
var blockObject9,blockObject10,blockObject11,blockObject12,blockObject13,blockObject14,blockObject15;
var blockObject16;
function preload()
{
  polygon_img=loadImage("polygon.png");
}

function setup() {
  createCanvas(900, 400);
  
  engine= Engine.create();
  world=engine.world;
  Engine.run(engine);
	//Create the Bodies Here.
 blockObject1 = new Block(340,235,30,40);
 blockObject2 = new Block(370,235,30,40);
 blockObject3 = new Block(400,235,30,40);
 blockObject4 = new Block(430,235,30,40);
 blockObject5 = new Block(460,235,30,40);
 blockObject6 = new Block(490,235,30,40);
 blockObject7 = new Block(520,235,30,40);
blockObject8 = new Block(370,195,30,40);
blockObject9 = new Block(400,195,30,40);
blockObject10 = new Block(430,195,30,40);
blockObject11 = new Block(460,195,30,40);
blockObject12 = new Block(490,195,30,40);
blockObject13 = new Block(400,155,30,40);
blockObject14 = new Block(430,155,30,40);
blockObject15 = new Block(460,155,30,40);
blockObject16 = new Block(430,105,30,40);

ground1 =new ground();

stand1 = new Stand(410,300,270,10);


ball = Bodies.circle(50,200,20);
World.add(world,ball);

bouncer1 = new bouncer(this.ball,{x:100,y:200});
  
}


function draw() {
 
  background(0);
 
  rectMode(CENTER);
  fill("lightblue");
  blockObject1.display();
  blockObject2.display();
  blockObject3.display();
  blockObject4.display();
  blockObject5.display();
  blockObject6.display();
  blockObject7.display();

fill("brown");
 ground1.display();

fill("lightpink");
blockObject8.display();
blockObject9.display();
blockObject10.display();
blockObject11.display();
blockObject12.display();

fill("green");
blockObject13.display();
blockObject14.display();
blockObject15.display();

fill ("yellow");
blockObject16.display();

imageMode(CENTER)
image(polygon_img ,ball.position.x,ball.position.y,40,40);

 bouncer1.display();
 stand1.display();

 
  

}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  bouncer1.fly();
}