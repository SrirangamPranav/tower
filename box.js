class Box{
    constructor(x,y,width,height){

        var options = {
            //'restitution':0.2,
            'friction':0.09,
            //'density':1.0,
            //'static':true
        }

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)

    }

    display(){
    var boxpos = this.body .position
    this.body.debug = true;
    push()
    translate(boxpos.x,boxpos.y)
    rotate(this.body.angle)
    rectMode(CENTER)
    fill(227,209,93)
    rect(0,0,this.width,this.height)
    pop()
    }
}