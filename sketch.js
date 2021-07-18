const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {
  backgroundImage = loadImage("background.jpg");

}

function setup() {
  createCanvas(1200, 400);
  
  engine = Engine.create();
  world = engine.world;


  ground = new Ground(200,400,600,5);
  hero = new Hero(400,5,100,100);
  monster = new Monster(900,100,200,200);
  attach = new Throw(hero.body,{x:100,y:460});
  block1 = new Block(270,350,30,40);
  block2 = new Block(310,350,30,40);
  block3 = new Block(340,350,30,40);
  block4 = new Block(370,350,30,40);
  block5 = new Block(400,350,30,40);
  block6 = new Block(430,350,30,40);
  block7 = new Block(460,350,30,40);
  block8 = new Block(490,350,30,40);
  block9 = new Block(310,320,30,40);
  block10 = new Block(340,320,30,40);
  block11 = new Block(370,320,30,40);
  block12 = new Block(400,320,30,40);
  block13 = new Block(430,320,30,40);
  block14 = new Block(460,320,30,40);
  block15 = new Block(490,320,30,40);
  

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(backgroundImage);


  hero.display();
  ground.display();
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
  monster.display();
 

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}

