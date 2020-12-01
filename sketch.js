const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
var canvas = createCanvas(1200,400);
    


ground = new Ground(600,height,1200,20);
platform = new Ground(150, 305, 300, 170);
block1 = new Box(300,275,30,40);
block2 = new Box(330,275,30,40);
block3 = new Box(360,275,30,40);
block4 = new Box(390,275,30,40);
block5 = new Box(420,275,30,40);
block6 = new Box(450,275,30,40);
block7 = new Box(480,275,30,40);
block8 = new Box(330,235,30,40);
block9 = new Box(360,235,30,40);
block10 = new Box(390,235,30,40);
block11= new Box(420,235,30,40);
block12 = new Box(450,235,30,40);
block13 = new Box(360,195,30,40);
block14 = new Box(390,195,30,40);
block15 = new Box(420,195,30,40);
block16 = new Box(390,155,30,40);

polygon = Bodies.circle(50,200,20);
World.add(world,polygon);

slingshot = new Slingshot( this.polygon,{x:100,y:200});
engine = Engine.create();
world = engine.world;
}

function draw() {
  background(170);  
  ground.display();
  platform.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}





/*

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed (){
    if (keyCode === 32){
       slingshot.attach(bird.body); 
    }
}*/