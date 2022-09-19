const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var box1,box2,box3,box4;
var ground, ground2, ground3, ground4, obstacle, obstacle2, obstacles;
var c1, c2, c3;


var engine, world, body;
var canJump;

var charges;

var score = 0;

var flag1 = false, flag2 = false, flag3 =  false, flag4 = false;

function setup() {
  //create the canvas
  createCanvas(1200,400);
  
  //setup
  engine = Engine.create();
  world = engine.world;
 


  //create boxes
  wall1 = new Ground(600, 390, 1200,20);
  wall2 = new Ground(600, 10, 1200,20);
  wall3 = new Ground(10, 200, 20,400);
  wall4 = new Ground(1190, 200, 20,400);

  wall5 = new Ground(1000, 250, 200, 10);

  wall6 = new Ground(900, 200, 10, 100);
  wall7 = new Ground(1100, 200, 10, 100);
 
  wall8 = new Ground(600, 300, 200, 10);

  wall9 = new Ground(500, 250, 10, 100);
  wall10 = new Ground(700, 250, 10, 100);

  wall11 = new Ground(200, 250, 200, 10);

  wall12 = new Ground(100, 200, 10, 100);
  wall13 = new Ground(300, 200, 10, 100);
 
  wall14 = new Ground(50, 350, 50, 100)

box1=new Box(50,50,20,20)
  

  }


function draw() {
  //set the background
  background(50,50,55);
  textSize(25)
  fill('red');
  text('score:'+ score, 1000, 50)

  //update the engine
  Engine.update(engine);
  
  //display ground
wall1.display()
wall2.display()
wall3.display()
wall4.display()
box1.display()
wall5.display()
wall6.display()
wall7.display()
wall8.display()
wall9.display()
wall10.display()
wall11.display()
wall12.display()
wall13.display()
wall14.display()

var collision = Matter.SAT.collides(box1.body, wall5.body)

if (collision.collided && !flag1){
  score+=1
  flag1 = true;
  flag4 = false;
  flag2 = false;
  flag3 = false;
}


var collision = Matter.SAT.collides(box1.body, wall8.body)

if (collision.collided && !flag2){
  score+=1
  flag2 = true
  flag4 = false;
  flag1 = false;
  flag3 = false;
}


var collision = Matter.SAT.collides(box1.body, wall11.body)

if (collision.collided && !flag3){
  score+=1
  flag3 = true
  flag4 = false;
  flag1 = false;
  flag2 = false;
}


var collision = Matter.SAT.collides(box1.body, wall1.body)

if (collision.collided && !flag4){
  score-=1
  flag4 = true
}


















}

function keyPressed(){
 if(keyCode === 39 ){
  box1.flingright();
 
 }
 if(keyCode === 38 ){
  box1.flingUp();
 
 }
 if(keyCode === 37 ){
  box1.flingleft();
 
 }
}
