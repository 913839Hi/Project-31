class Plinko
{
	constructor(x,y)
	{
		var options={
            isStatic:true
        }
        this.body=Bodies.circle(x,y,10, options);
        this.radius=10;
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
        stroke (2);
            fill ("white");
			ellipseMode(RADIUS);
			ellipse(0,0,this.radius)
			//ellipse(0,0,this.r, this.r);
			pop()
			
	}

}
