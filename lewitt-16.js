function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(250);
  for (var i = 0; i <= 400; i = i + 10) {
		stroke(180)
    line(i, 0, i, 400);
		line(i+200,0,i-200,400)
		line(0,i,400,i)
  }
}
