class Dustbin {
    constructor() {
        var options = {
            isStatic: true
        }
        this.body1 = Bodies.rectangle(650,630,200,0,options);
        this.body2 = Bodies.rectangle(540,590,20,150,options);
        this.body3 = Bodies.rectangle(760,590,20,150,options);

        this.w1 = 200;
        this.w1 = 20;
        this.w1 = 20;

        this.height1 = 20
        this.height1 = 100
        this.height1 = 100

        this.img = loadImage("Dustbin.png")

        World.add(world, this.body1);
        World.add(world, this.body2);
        World.add(world, this.body3);
    }
    display() {
        var pos = this.body1.position;

        rectMode(CENTER);
        imageMode(CENTER)
        fill("red");

        this.img.scale
        image(this.img,650,630-65,200,150)

        
        // rect(pos.x, pos.y, this.w, this.h);
    }
};