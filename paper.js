class Paper {
    constructor(x, y) {
        var options = {
            restitution: 0.3,
            friction: 0.5,
            density:0.3,
            isStatic:false
        }
        this.r = 50;
        this.body = Bodies.circle(x, y, this.r, options);
        this.image = loadImage("paper.png")
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("white");
        imageMode(CENTER);
        image(this.image,0,0,115,150);
        pop();
    }

};