

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
 

var engine, world;
 

function setup(){
   var canvas = createCanvas(480,800);
   engine = Engine.create();
   world = engine.world;

   ground = new Ground(width/2,800,480,20);
    
}

var particles = [];
var divisions = [];
var plinko = [];
var divisionHeight = 300;

 

function draw(){
    background("lightBlue");
    Engine.update(engine);

    ground.display();

// ------------------------------------------------

// adding divisions
    for(var i = 0; i <= width; i = i+96){
        divisions.push(new Division(i, height-divisionHeight/2, 10, divisionHeight))
    }

// displaying divisions
    for(var i = 0; i < divisions.length; i++){
         divisions[i].display();
    }

// ------------------------------------------------


// adding plinko row5
    for(var j = 0; j <= width; j = j+45){
        plinko.push(new Plinko(j,350))
    }

// displaying plinko row 5
    for(var j = 0; j < plinko.length; j++){
        plinko[j].display();
    }


// ------------------------------------------------


// adding plinko row4
    for(var k = 0; k <= width; k = k+25){
        plinko.push(new Plinko(k,300))
    }

// displaying plinko row 4
    for(var k = 0; k < plinko.length; k++){
        plinko[k].display();
    }


// ------------------------------------------------


// adding plinko row3
    for(var l = 0; l <= width; l = k+45){
        plinko.push(new Plinko(l,250))
    } 
    
// displaying plinko row 3
    for(var l = 0; l < plinko.length; l++){
        plinko[l].display();
    }


// ------------------------------------------------


// adding plinko row2
    for(var m = 0; m <= width; m = m+25){
        plinko.push(new Plinko(m,200))
    } 

// displaying plinko row 2
    for(var m = 0; m < plinko.length; m++){
        plinko[m].display();
    }


// ------------------------------------------------


// adding plinko row1
    for(var n = 0; n <= width; n = n+45){
        plinko.push(new Plinko(n,150))
    }

// displaying plinko row 1
    for(var n = 0; n < plinko.length; n++){
        plinko[n].display();
    }

// ------------------------------------------------

    if(frameCouunt % 60 === 0){
        particles.push(new Particles(random(width/2-10, width/2+10), 10, 10));
    }

}

 