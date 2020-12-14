const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score = 0;
var backgroundImg;
function preload(){
polygon_img = loadImage("polygon.png")
getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform1= new Ground(400, 300, 300, 10);
    platform2 = new Ground(700,200,200,10);
    //level 1
    block1 = new Box(300,275,30,40);
    block1.score();
    block2 = new Box(330,275,30,40);
    block2.score();
    block3 = new Box(360,275,30,40);
    block3.score();
    block4 = new Box(390,275,30,40);
    block4.score();
    block5 = new Box(420,275,30,40);
    block5.score();
    block6 = new Box(450,275,30,40);
    block6.score();
    block7 = new Box(480,275,30,40);
    block7.score();
    //level2
    block8 = new Box(330,235,30,40);
    block8.score();
    block9 = new Box(360,235,30,40);
    block9.score();
    block10 = new Box(390,235,30,40);
    block10.score();
    block11= new Box(420,235,30,40);
    block11.score();
    block12 = new Box(450,235,30,40);
    block12.score();
    //level3
    block13 = new Box(360,195,30,40);
    block13.score();
    block14 = new Box(390,195,30,40);
    block14.score();
    block15 = new Box(420,195,30,40);
    block15.score();
    //toplevel
    block16 = new Box(390,155,30,40);
    block16.score();

    //set 2 for second stand
    //level one
    blocks1 = new Box(640,175,30,40);
    blocks1.score();
    blocks2 = new Box(670,175,30,40);
    blocks2.score();
    blocks3 = new Box(700,175,30,40);
    blocks3.score();
    blocks4 = new Box(730,175,30,40);
    blocks4.score();
    blocks5 = new Box(760,175,30,40);
    blocks5.score();
    //level two
    blocks6 = new Box(670,135,30,40);
    blocks6.score();
    blocks7 = new Box(700,135,30,40);
    blocks7.score();
    blocks8 = new Box(730,135,30,40);
    blocks8.score();
    //top
    blocks9 = new Box(700,95,30,40);
    blocks9.score();

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingshot = new Slingshot(polygon,{x:100,y:200});

    engine = Engine.create();
    world = engine.world;

}

 function draw(){
  if(backgroundImg)
  background(backgroundImg);  
  
  //background(170);  
    Engine.update(engine); 
    
    noStroke()
    textSize(35)
    fill("white")
    text("SCORE: " + score, width-300, 50)
    
    textSize(20);
    fill("lightyellow");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

    ground.display();
    platform1.display();
    platform2.display();
    strokeWeight(2);
    stroke(15);
    fill("skyblue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill("pink")
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill("turquoise")
    block13.display();
    block14.display();
    block15.display();
    fill("grey")
    block16.display();
    fill("skyblue");
    blocks1.display();
    blocks2.display();
    blocks3.display();
    blocks4.display();
    blocks5.display();
    fill("turquoise");
    blocks6.display();
    blocks7.display();
    blocks8.display();
    fill("pink")
    blocks9.display();
    fill("gold");
    //imageMode(CENTER)
    ellipseMode(CENTER)

    //image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
    circle(polygon.position.x,polygon.position.y,40);
    slingshot.display();
    //drawSprites();
 }  
 
 function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
    slingshot.fly();
    
  }

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(this.polygon)
  }
}

async function getBackgroundImg () {
 var response  = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
 var  responseJSON = await response.json();
 var time = responseJSON.datetime
 var hour  = time.slice(11,13);
 console.log(hour);

 if (hour>=06 && hour<=18){
      bg = "lightBg.jpg"
 }
 else{
   bg = "darkBg.jpeg"
 }
 backgroundImg = loadImage("lightBg.jpg")
}
                                                                  
/*
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON = await response.json();
    var time = responseJSON.datetime
    var hour = time.slice(11,13);
    console.log(hour);

    if(hour>=06 && hour<=19){
        bg = "sprites/bg.png"
    }
    else{
        bg = "sprites/bg2.jpg"  
    }
    backgroundImg = loadImage(bg);
}


*/