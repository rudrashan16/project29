class bouncer{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        this.bounce = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.bounce);

    }
    fly(){
        this.bounce.bodyA =null;
    }
    display(){
        if(this.bounce.bodyA){
        var pointA = this.bounce.bodyA.position;
        var pointB = this.pointB;
        
        strokeWeight(4);
        stroke("turquoise");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        }
    
} 

    
    
