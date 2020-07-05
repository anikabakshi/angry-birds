const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var l1,l2,l3,l4;
var ob1,ob2,ob3,ob4,ob5;
var p1,p2;
var bird;

function setup(){
    var canvas = createCanvas(1100,400);
    engine = Engine.create();
    world = engine.world;

// layer 1 of the pig obstacle
    ob1 = new Box(700,320,70,70);
    ob2 = new Box(920,320,70,70);
    p1=new Pig(810,350);
    l1=new Log(810,260,300,PI/2);

// layer 2 of the pig obstacle
ob3 = new Box(700,240,70,70);
ob4 = new Box(920,240,70,70);
p2=new Pig(810,220);
l2=new Log(810,180,300,PI/2);

// last layer of obstacle without pig
ob5 = new Box(810,160,70,70);
l3=new Log(760,120,150,PI/7);
l4=new Log(870,120,150,-PI/7);

//makes the angry bird
bird=new Bird(100,100);

    ground = new Ground(600,height,1300,20)
}

function draw(){
    background("pink");
    Engine.update(engine);
    

//dislay for layer 1
    ob1.display();
    ob2.display();
    p1.display();
    l1.display();

    //dislay for layer 2
    ob3.display();
    ob4.display();
    p2.display();
    l2.display();

//display for the last layer blah, blah, blah
    ob5.display();
    l3.display();
    l4.display();

    //display for ab
    bird .display();

    ground.display();
}