function setup() {
createCanvas(500, 500);
}

function draw() {
fill(35, 222, 199);
 //ellipse(random(500), random(250), 77, 77);
 fill(47, 188, 77);
 ellipse(300, 300, 40, 40);
 fill(44, 254, 44);
 ellipse(400,400, 22, 22);
 line(250, 250, mouseX, mouseY);
 line(250, 250, mouseY, mouseX);
}