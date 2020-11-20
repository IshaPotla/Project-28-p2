
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;
var launchingForce=100;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	
mango1 = new mango (1100,100,30);
mango2 = new mango (1150,130,30);
mango3 = new mango (1170,220,30);
mango4 = new mango (1000,230,30);
mango5 = new mango (990,150,30);
mango6 = new mango (1200,200,30);
mango7 = new mango (1100,220,30);
mango8 = new mango (1059,175,30);
mango9 = new mango (1009,80,30);
mango10 = new mango (880,220,30);
mango11 = new mango (940,210,30);
mango12 = new mango (1060,76,30);

treeObj = new tree (1050,580);

stoneObj = new stone (235, 420, 30);

launcherObject = new launcher (stoneObj.body, {x:235, y:420});
  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1300,
      height: 600,
      wireframes: false
    }
  });
	
	Engine.run(engine);
 // Render.run(render);
}

function draw() {

  background(230);
  //frameRate(2)
 // Engine.update(engine)
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);

  image(boy, 200, 340, 200, 300);
 
  //Engine.update(engine)
  


  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  stoneObj.display();
  launcherObject.display();
}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY})
}

function mouseReleased()
{
	
    // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}

function keyPressed() {
	if (keyCode === 32) {
   
	}
  }

  function detectollision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }