class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        this.bodyA = bodyA
        this.launcher = Constraint.create(options);

        this.pointB=pointB;
        World.add(world, this.launcher);

    }
    attach (body) {
        this.launcher.bodyA = body
    }

    fly(){
        this.launcher.bodyA =null;
        
    }
    display(){
        pointA = this.launcher.bodyA.position
        pointB = this.bodyB
        strokeWeight(4);
        stroke("turquoise");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    
}
