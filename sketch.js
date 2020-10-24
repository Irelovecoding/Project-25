
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj,dustbinObject2,dustbinObject3, paperObject,groundObject	
var world;
var binImage;


function preload() {
	binImage = loadImage("dustbingreen.png");

}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	//create a dustbinObj & paperObject
	groundObject=new ground(800,670,1600,20);
	// create 2 more dustbins
	dustbinObject=new dustbin(1100,625,15,45);
	dustbinObject2=new dustbin(1050,655,100,5);
	dustbinObject3=new dustbin(1000,625,15,45);
	paperObject=new paper(100,450,40);
	dustbinObj = createSprite(1050,580,100,45);
	dustbinObj.addImage(binImage)
	dustbinObj.scale = 0.5;
	Engine.run(engine);

	
 
}



function draw() {
  rectMode(CENTER);
  background("blue");

 //display the dustbin & paperobject
  groundObject.display();
  
  paperObject.display();
  dustbinObject.display();
  dustbinObject2.display();
  dustbinObject3.display();
 drawSprites();
}

/* function keyPressed() is an inbuilt function like function draw()
 function keyPressed is read by the computer over & over to keep checking if 
 anyone has pressed any key
*/
 function keyPressed() {
	if(keyCode === UP_ARROW) {
console.log("is working")
	
	//write code ,that if you press up arrow, the paper ball moves up
	//hint : use apply force code
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	
	}
	
}






/*	dustbinObj=new dustbin(1200,600,10,100);
	
	*/





	/*if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:10,y:-85});
    
	  }
	  */