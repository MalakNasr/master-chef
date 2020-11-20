const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1, log1;
var box2, box3, pig2, log2, box4, box5, log3, log4, bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    bird = new Bird(0,0);
    log1 = new Log(810,260,PI/2 ,300);
    log3 = new Log(760,120,PI/7 ,150);
    log4 = new Log(870,120,-PI/7 ,150);
    pig1 = new Pig(810,360);
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    log2 = new Log(810,180,PI/2 ,300);
    pig2 = new Pig(810,220);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);
    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    log3.display();
    log4.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    bird.display();
}