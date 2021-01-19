class Box{
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options,angle);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
        var angle = angle;
        Matter.Body.setAngle(this.body, angle);
      }
     
      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("blue");
        rect(pos.x, pos.y, this.width, this.height);
      }
  }