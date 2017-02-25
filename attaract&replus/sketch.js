var attractors = [];
var particles = [];
function setup() {
	createCanvas(320,240);
	for(var i = 0; i < 5; i++)
	{
	   particles.push(new Particle(random(width),random(height)));
	}
/*	for(var j = 0; j < 10; j++)
	{
	   attractors.push(createVector(random(width),random(height)));
	}*/
	
}

function mouseMoved()
{
	attractors.push(createVector(mouseX,mouseY));
}

function draw() {
	background(51);
	stroke(255);
	strokeWeight(4);
	for(var i = 0; i < attractors.length; i++)
	{
	   stroke(0,255,0);
	   //point(attractors[i].x,attractors[i].y);
	}
	
	for(var j = 0; j < particles.length; j++)
	{
	   var particle = particles[j];
	   for(var i = 0; i < attractors.length; i++)
	{
		particle.attracted(attractors[i]);
	}
	   	particle.update();
	   	particle.show();
	}
}
	