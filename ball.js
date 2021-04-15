class Ball{
    constructor(x,y,radius){
        var options={
            
            frictionAir:0.005,
            density:3
    

        }
        this.body=Bodies.circle(x,y,radius);
        this.radius=radius;
        
        World.add(world, this.body);
    }
    display(){
        
        var pos= this.body.position;
        var angle= this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(4);
        stroke("green");
        //fill("yellow");
        ellipseMode(RADIUS);
        ellipse(0,0, this.radius, this.radius);
        pop();

    }
}