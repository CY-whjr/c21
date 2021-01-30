var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1=new Surface(120,550,25,10);
    surface2=new Surface(145,550,25,10);
    surface3=new Surface(170,550,25,10);
    surface4=new Surface(195,550,25,10);

    //create box sprite and give velocity
    var boxsprite=createSprite(50,390,30,30);
    boxsprite.velocityX=2
    boxsprite.velocityY=-2
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();

    boxsprite.shapeColor="white";
    surface1.shapeColor="red";
    surface2.shapeColor="yellow";
    surface3.shapeColor="green";
    surface4.shapeColor="blue";

    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(boxsprite) && box.bounceOff(surface1)){
        boxsprite.shapeColor="red";
    }
    if(surface2.isTouching(boxsprite) && box.bounceOff(surface2)){
        boxsprite.shapeColor="yellow";
    }
    if(surface3.isTouching(boxsprite) && box.bounceOff(surface3)){
        boxsprite.shapeColor="green";
    }
    if(surface4.isTouching(boxsprite) && box.bounceOff(surface4)){
        boxsprite.shapeColor="blue";
    }
}
