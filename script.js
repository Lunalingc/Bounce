bal = new Bal(50, 100);

var x = 50;
var y = 50;
var speedX = [2, 4, 5, 6];
var speedY = [5, 4, 3, 1];
var positionX = [50,40,30,10];
var positionY = [50,40,30,10];


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

bal.show();
bal.update();

}