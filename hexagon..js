class Hexagon {
    constructor(x, y, r) {
        var options = {
            isStatic: false,
            //restitution: 1,
            density: 1
        }
        this.body = Bodies.circle(x, y, r, options);
        this.x = x
        this.y = y
        this.r = r;
        World.add(world, this.body);
        this.image = loadImage("hexagon img.png");
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle)
        strokeWeight(4);
        imageMode(CENTER);
        image(this.image, 0,0,this.r, this.r)
        pop();
    }
}