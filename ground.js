class ground{
    constructor(x,y,w,h){
        var options = {
            isStatic : true
        }
        this.ground = Bodies.rectangle(450,390,900,20,options)
        
        World.add(world,this.ground);

    }
    display(){
        var pos = this.ground.position;
    
        rectMode(CENTER);
        rect(pos.x ,pos.y,900,20)
    }
}