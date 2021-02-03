class Ball {

  constructor(x, y, img) {
    var options = {
      isStatic: false,
      'restitution': 0.7,
      'friction': 0.5,
      'density': 1.5,
    }

    this.body = Bodies.rectangle(x, y, 10, options);
    this.image = loadImage("images/" + img)
    this.radius = 10;

    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, 50, 50);
    pop();
  }
}

