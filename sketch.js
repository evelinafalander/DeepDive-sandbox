function setup() {
  createCanvas(1400, 800);
  noLoop();
}

function draw() {
  //calling my  funtion a specific set of times
  for (var i = 0; i < 200; i++) {
    bubble();
  }
}

function bubble() {
  //creating my bubles giving them random colors, shapes and positions
  var x = random(50, 1400);
  var y = random(50, 750);
  var size = random(50, 100);

  fill(random(["#f7c6f6", "#fff9b5", "#edc3f7", "#b1fae4"]));
  stroke("#9721ff");
  circle(x, y, size);
}

/* function mouseClicked() {
  for (var i = 0; i < 200; i++) {
    bubble();
  }
}*/
