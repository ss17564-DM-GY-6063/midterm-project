let img;
let times;
let posx;
let posy;
let w, h;
let d, a;
let speed;
let NUM = 25;

let s0tem =
  "Air is not the source of life Air can neither be created nor destroyed the total amount of air in the universe remains constant and if air were all that we needed to live we would never die But in truth the source of life is a difference in air pressure the flow of air from spaces where it is thick to those where it is thin The activity of our brains the motion of our bodies the action of every machine we have ever built is driven by the movement of air the force exerted as differing pressures seek to balance each other out When the pressure everywhere in the universe is the same all air will be motionless and useless one day we will be surrounded by motionless air and unable to derive any benefit from it ";
let s0 = s0tem.concat(s0tem);
  // let s1 = "AirisnotthesourceoflifeAircanneitherbecreatednordestroyedthetotalamountofairintheuniverseremainsconstantandifairwereallthatweneededtolivewewouldneverdieButintruththesourceoflifeisadifferenceinairpressuretheflowofairfromspaceswhereitisthicktothosewhereitisthinTheactivityofourbrainsthemotionofourbodiestheactionofeverymachinewehaveeverbuiltisdrivenbythemovementofairtheforceexertedasdifferingpressuresseektobalanceeachotheroutWhenthepressureeverywhereintheuniverseisthesameallairwillbemotionlessanduselessonedaywewillbesurroundedbymotionlessairandunabletoderiveanybenefitfromit";
let words;
let gridX, gridY;
let fontSize = 20;
let wordIndex = 0;

//preload textfont
function preload() {
  tFont = loadFont("./GillSansStd-Bold.otf");
  rFont = loadFont("./GillSansStd.otf");
}

// draw the cover canvas, definite the array
function setup() {
  createCanvas(600, 900);
  background(0);

  img = loadImage("star.png");
  imageMode(CENTER);
  times = new Array(NUM);
  posx = new Array(NUM);
  posy = new Array(NUM);
  w = width / 2;
  h = height / 1.5;
  speed = 0.002;

  // words animation settings
  words = s0.split(" "); 

  for (let i = 0; i < NUM; i++) {
    times[i] = random(1000);
  }
}

function drawuniverse() {
  background(0);
  strokeWeight(1);

  // title
  fill(136, 174, 193);
  textFont(tFont);
  textAlign(CENTER);
  textSize(75);
  text("EXHALATION", width / 2, 50);

  // author text
  fill(136, 174, 193);
  textFont(rFont);
  textAlign(CENTER);
  textSize(60);
  text("T E D   C H I A N G", width / 2, 800);

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
      a = 300 - d * 2;
      stroke(180, 180, 220, a);
      line(posx[i], posy[i], posx[j], posy[j]);
    }
  }

  pop();
}

// the background words animation loop
function drawwords() {
  // background(0);
  randomSeed(100);

  textSize(fontSize);
  textAlign(LEFT, TOP);

  let wordIndex = floor(frameCount / 10) % words.length;
  let gridX = 10;
  let gridY = 10;

  for (let wi = 0; wi < wordIndex; wi++) {
    let word = words[wi].toUpperCase();
    let wordWidth = textWidth(word);

    if (gridX + wordWidth > width - 10) {
      gridX = 20;
      gridY += fontSize + 10;
    }

    fill(255, 255, 255, random(50, 150));
    text(word, gridX, gridY);
    gridX += wordWidth + 20;
  }
}

function draw() {
  drawuniverse();
  drawwords();
}
