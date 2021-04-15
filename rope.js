class Rope{
    constructor(bodyA, pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.2,
            length:350
    

        }
        
        this.pointB=pointB;
        this.rope=Constraint.create(options);
        
        World.add(world, this.rope);
    }
    display(){
        
        var pointA= this.rope.bodyA.position;
        var pointB= this.pointB;
        push();
        
        strokeWeight(4);
        stroke("green");
        //fill("yellow");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
       
        pop();

    }
}