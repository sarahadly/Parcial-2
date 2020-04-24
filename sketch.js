var cat;
var pug;

function setup() {
  createCanvas(700, 500);
  frameRate(20); // velocidad en que muestra imagenes
  cat = new Cat();
  pug = new Pug();
}

function draw() {
  background(0);
    cat.mostrarCat();
    pug.mostrarPug();
    cat.press();
    pug.press();
  
}
