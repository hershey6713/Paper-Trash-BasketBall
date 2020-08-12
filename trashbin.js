class Trashbin {
    constructor(x,y,width,height) {
          this.bodies = Bodies.rectangle(x,y,width,height);
          this.width = width;
          this.height = height;
          Body.setStatic(this.bodies, true);
          World.add(world,this.bodies);
    }

    display() {
        rectMode(CENTER);
        fill(rgb(0, 0, 255));
        stroke(rgb(0, 0, 255));
        rect(this.bodies.position.x,this.bodies.position.y,this.width,this.height);
    }
}