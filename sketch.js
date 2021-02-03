const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2;

var track, car1_img, car2_img;

var engine, world;

function preload() {
  track = loadImage("images/track.jpg");
  car1_img = loadImage("images/car.PNG");
  car2_img = loadImage("images/car2o.PNG");
  ground = loadImage("images/ground.png");
  net1Img = loadImage("images/net.PNG")
  net2Img = loadImage("images/net2.PNG")
}

function setup() {
  canvas = createCanvas(displayWidth - 60, displayHeight - 170);
  engine = Engine.create();
  world = engine.world;
  database = firebase.database();

  ball1 = new Ball(20, 70, "basketball.PNG")
  ball2 = new Ball(90, 70, "basketball2.PNG")
  slingshot1 = new Slingshot(ball1.body, { x: 10, y: 70 })
  slingshot2 = new Slingshot(ball2.body, { x: 80, y: 70 })

  //net1= new Basket( 50,50,20,30)
  game = new Game();
  game.getState();
  game.start();
}


function draw() {
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    clear();
    game.play();
    slingshot1.display();
    slingshot2.display();
    
    ball2.display();
    ball2.display();
    drawSprites();
  }

  if (gameState === 2) {
    game.end();
    drawSprites();
  }
}

function keyPressed(){
	console.log("keyPressed")
	if(keyCode === UP_ARROW){
		//console.log("up")
		Matter.Body.applyForce (ball1.body,ball1.body.position,{x:155, y:-155})
		//paper.isStatic= false;
	}
}
function keyPressed(){
	console.log("keyPressed")
	if(keyCode === UP_ARROW){
		//console.log("up")
		Matter.Body.applyForce (ball2.body,ball2.body.position,{x:155, y:-155})
		//paper.isStatic= false;
	}
}