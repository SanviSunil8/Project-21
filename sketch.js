
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ball2, ball3, ball4, ball5
var world, engine;
var horizontal
var groundObj
var leftSide
var rightSide
function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);
	ellipseMode(RADIUS);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball_options={
		restitution:0.4,
		friction:0,
		density: 1.3
	}
	ball = Matter.Bodies.circle(300,200,20,ball_options);
	World.add(world,ball);
	ball2 = Matter.Bodies.circle(280,200,20,ball_options);
	World.add(world,ball2);
	ball3 = Matter.Bodies.circle(260,200,20,ball_options);
	World.add(world,ball3);
	ball4 = Matter.Bodies.circle(240,200,20,ball_options);
	World.add(world,ball4);
	ball5 = Matter.Bodies.circle(220,200,20,ball_options);
	World.add(world,ball5);
	//horizontal=new Ground(400,690,400,20);
	groundObj= new Ground(width/2,windowHeight -10, width,20);
	leftSide = new Ground(windowWidth/2,windowHeight - 20,20,250);
	rightSide = new Ground(windowWidth/2 + 120,windowHeight - 20,20,250);
  
}

function keyPressed(){
	if(keyCode==49){
		console.log("1")
		Matter.Body.applyForce(ball,{x:0,y:0}, {x:9,y:-9})
	}
	if(keyCode==50){
		console.log("2")
		Matter.Body.applyForce(ball2,{x:0,y:0}, {x:9,y:-9})
	}
	if(keyCode==51){
		console.log("3")
		Matter.Body.applyForce(ball3,{x:0,y:0}, {x:9,y:-9})
	}
	if(keyCode==52){
		console.log("4")
		Matter.Body.applyForce(ball4,{x:0,y:0}, {x:9,y:-9})
	}
	if(keyCode==53){
		console.log("5")
		Matter.Body.applyForce(ball5,{x:0,y:0}, {x:9,y:-9})
	}
}

function draw() {
 
  background(0);
  ellipse(ball.position.x, ball.position.y, 20,20);
  ellipse(ball2.position.x, ball2.position.y, 20,20);
  ellipse(ball3.position.x, ball3.position.y, 20,20);
  ellipse(ball4.position.x, ball4.position.y, 20,20);
  ellipse(ball5.position.x, ball5.position.y, 20,20);
  groundObj.show();
  leftSide.show();
  rightSide.show();
  Engine.update(engine);

}



