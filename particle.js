class Particle
{
	constructor(x,y)
	{
		var options={
			restitution:0.4
			}
        this.body=Bodies.circle(x,y, 10, options);
		this.radius=10;
		this.color=fill(random(0,255),random(0,255),random(0,255));
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		
var angle=this.body.angle;
			push()
			translate(paperpos.x, paperpos.y);
            rotate (angle);
            rectMode(CENTER)
			noStroke();
			ellipseMode(RADIUS);
			ellipse(0,0,this.radius)
			//ellipse(0,0,this.r, this.r);
			pop()
			
	}

}