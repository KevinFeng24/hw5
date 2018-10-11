function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(250);
  for (var i = 0; i <= 400; i = i + 10) {
		stroke(180)
		line(0,i,i,0)
		line(i,400,400,i)
  }
}
