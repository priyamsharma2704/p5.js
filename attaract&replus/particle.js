function Particle(x,y)
{
	this.pos = createVector(x,y);
	this.prev = createVector(x,y);
	this.vel = createVector();// p5.Vector.random2D();
	this.acc = createVector();
	
	this.update = function()
	{
	   	this.vel.add(this.acc);
    	//this.vel.limit(5);
    	this.pos.add(this.vel);
    	this.acc.mult(0);
	}
	
	this.show = function()
	{
	   stroke(255,255);
	   strokeWeight(4);
	   line(this.pos.x,this.pos.y,this.prev.x,this.prev.y);

	   this.prev.x = this.pos.x;
	   this.prev.y = this.pos.y;

	}
	
	this.attracted = function(target)
	{
	   var force = p5.Vector.sub(target,this.pos);
	   var dsquared = force.mag();
	   dsquared = constrain(dsquared ,1,1000);
	   var g = 2;
 	   var magnitude = g/(dsquared);
	   force.setMag(magnitude);
	   //force.mult(-1);
	   this.acc.add(force);
	}
}