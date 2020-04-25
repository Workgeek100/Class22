const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
var ball2;
var ground2;

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    var ball_options={
        restitution:1.4
    }
    var ball2_options={
        restitution:1.4
    }
    var ground2_options={
        isStatic:true
    }
    

    ground = Bodies.rectangle(500,390,1000,20,ground_options);
    World.add(world,ground);

    ground2=Bodies.rectangle(500,40,1000,20,ground2_options);
    World.add(world,ground2);

    console.log(ground);
    ball=Bodies.circle(600,40,30,ball_options);
    ball2=Bodies.circle(800,40,40,ball2_options);
    
    World.add(world,ball);
    World.add(world,ball2);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    fill("blue");
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,1000,20);
    fill("red");
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,30);
    fill("green");
    ellipseMode(RADIUS);
    ellipse(ball2.position.x,ball2.position.y,40);
    fill("yellow");
    rectMode(CENTER);
    rect(ground2.position.x,ground2.position.y,1000,20);
    
    
}