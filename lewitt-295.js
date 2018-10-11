function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
	noFill();
	stroke(255)
  rect(10,10,380,380)
	ellipse(200,200,380)
	line(10,390,200,10)
	line(200,10,390,390)
	line(105,10,105,390)
	line(295,10,295,390)
	line(105,10,10,390)
	line(390,390,295,10)
	line(295,390,390,10)
}
