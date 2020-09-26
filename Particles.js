class Particles {
  constructor(x, y, radius, options) {
    var options = {
        isStatic    : false, 
        restitution : 0.5,
        friction    : 0.5,
        density     : 1.2
    }

    this.body = Bodies.circle(x, y, this.radius, options);
    this.radius = radius;
    this.color = color(random("blue"), random("pink"), random("red"), random("yellow"))
    World.add(world,this.body);

  }

display(){
    var pos =this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    noStroke();
    fill(this.color);
    ellipseMode(RADIUS);       
    ellipse(0, 0, this.radius, this.radius);
    pop();

  } 
}