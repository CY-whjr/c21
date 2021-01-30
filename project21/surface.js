class Surface{
    constructor(x, y, width, height){
        var options ={
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,25,10,options);
        this.width = 25;
        this.height = 10;
        World.add(world, this.body);
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
    }
}