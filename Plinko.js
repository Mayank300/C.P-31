class Plinko {
    constructor(x, y, radius, options) {
      var options = {
          isStatic    : true, 
          restitution : 0.5,
          friction    : 0.5,
          density     : 1.2
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
       
      World.add(world,this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);       
      fill("yellow");
      ellipse(0,0,this.radius/2,this.radius/2);
      pop();
    } 
  }