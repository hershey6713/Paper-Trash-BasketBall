class Paper {
    constructor(x, y, diameter) {
        var options={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.paper = Bodies.circle(x, y, diameter, options);
        this.diameter = diameter;
        World.add(world, this.paper);
    }

    display() {
        ellipseMode(RADIUS);
        fill("white");
        ellipse(this.paper.position.x,this.paper.position.y,this.diameter);
    }
}