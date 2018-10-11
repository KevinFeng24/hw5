function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 10; i <= 200; i = i + 10) {
    line(200-i, i, 200+i, i);
	for (var x = 10; x<= 200; x=x+10 )
		line(x,200+x,400-x,200+x)
  }
}
