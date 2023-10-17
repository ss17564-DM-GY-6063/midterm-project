let img;
let times;
let posx;
let posy;
let w, h;
let d, a;
let speed;
let NUM = 25;

//preload textfont
function preload() {
  tFont = loadFont("./GillSansStd-Bold.otf");
  rFont = loadFont("./GillSansStd.otf");
}

// draw the cover canvas, definite the array
function setup() {
  createCanvas(600, 900);
  img = loadImage("star.png");
  imageMode(CENTER);
  times = new Array(NUM);
  posx = new Array(NUM);
  posy = new Array(NUM);
  w = width / 2;
  h = height / 1.5;
  speed = 0.002; 

  for (let i = 0; i < NUM; i++) {
    times[i] = random(1000);
  }
}


function draw() {
  background(0);
  strokeWeight(1);

  // the main animation
  push();
  translate(w / 2, h / 3);

  // draw the shining points
  for (let i = 1; i < NUM; i++) {
    times[i] += speed;
    posx[i] = noise(times[i]) * w;
    posy[i] = noise(times[i] + 1) * h;
    image(img, posx[i], posy[i]);

    // line between two points will disappear when points get farther
    for (let j = 1; j < NUM; j += 6) {
      d = dist(posx[i], posy[i], posx[j], posy[j]);
      a = 300 - (d * 2); 
      stroke(180, 180, 220, a); 
      line(posx[i], posy[i], posx[j], posy[j]);
    }
  }

  pop();

  // title
  fill(136, 174, 193);
  textFont(tFont);
  textAlign(CENTER);
  textSize(75);
  text("EXHALATION", width/2, 100);

  // author text
  fill(136, 174, 193);
  textFont(rFont);
  textAlign(CENTER);
  textSize(60);
  text("T E D   C H I A N G", width/2, 850);
}