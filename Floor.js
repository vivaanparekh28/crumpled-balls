class Floor{
    constructor(){
        var still={
            isStatic:true
        }
        this.body=Bodies.rectangle(400,680,1600,20,still)
        World.add(world, this.body);
    }
    display(){
        push()
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,1600,20);
        pop()
    }
}