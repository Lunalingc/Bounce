var x = 50;
var y = 50;
var speedX = 2;
var speedY = 5;


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);
  
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  background('blue');

  // stel vulkleur in
  fill(255, 255, 255);

  // teken een cirkel
  ellipse(x,y,80,80);

  x = speedX + x; 
  y = speedY + y;

  if (y === 680){
    speedY = speedY * -1;
  }

  if ( y === 40){
    speedY = speedY * -1;
  }

  if ( x === 40) {
    speedX = speedX * -1;
  }

  if ( x === 1240){
    speedX = speedX * -1;
  }
 
}