//variaveis bolinha
let xBolinha=300;
let yBolinha=200;
let diametro=22;
let raio= diametro/2;

let velocidadexBolinha = 4;
let velocidadeyBolinha = 4;


//variaveis raquete
let xRaquete= 5;
let yRaquete= 150;
let larguraRaquete = 10;
let alturaRaquete = 90;

//variaveis raquete do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;  

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
createCanvas(600, 400);
}
   
function draw() {
  background(0); 
  mostraBolinha ();
  movimentaBolinha ();
  verificaColisaoBorda ();
  mostraRaquete ();
  movimentaRaquete (xRaquete , yRaquete);
 
  verificaColisaoRaquete ();
  mostraRaqueteOponente(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaqueteOponente(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar ();
  marcaPonto ();
  

  // || significa ou

  if (xBolinha > width || xBolinha < 0) {
  velocidadexBolinha = velocidadexBolinha *(-1)
  }
    
  if (yBolinha > height || yBolinha < 0 ) {
  velocidadeyBolinha = velocidadeyBolinha *(-1)
   }
}
  function mostraBolinha () {

    circle(xBolinha, yBolinha, diametro);
    xBolinha = xBolinha +  velocidadexBolinha;
    yBolinha +=  velocidadeyBolinha;

 }

  function movimentaBolinha () {
  xBolinha = xBolinha +  velocidadexBolinha;
  yBolinha +=  velocidadeyBolinha;
}
function verificaColisaoBorda () {
  if (xBolinha + raio > width ||   xBolinha - raio < 0 ) {
  velocidadexBolinha = velocidadexBolinha * (-1)
  }
  
  if (yBolinha + raio > height || yBolinha - raio < 0 ) {
  velocidadeyBolinha = velocidadeyBolinha * (-1)
  }
}
function mostraRaquete() {
  rect(xRaquete,yRaquete,larguraRaquete,alturaRaquete);
 
  //rect(xRaquete, yRaquete, largura, altura);
}

function movimentaRaquete() {   
if  (keyIsDown (UP_ARROW)) {  
  yRaquete  -= 10;
  }
  {if (keyIsDown (DOWN_ARROW)){
    yRaquete = yRaquete + 10;
  }
    
  }
} 

function verificaColisaoRaquete (x,y) { 
  if (xBolinha - raio < xRaquete &&
    yRaquete < yBolinha && 
     yBolinha < yRaquete + alturaRaquete) {
    velocidadexBolinha *= (-1);
    
  }
}

function mostraRaqueteOponente () { 
  rect(xRaqueteOponente,yRaqueteOponente,larguraRaquete,
       alturaRaquete);
}

function movimentaRaqueteOponente () { 
  velocidadeYOponente = yBolinha - yRaqueteOponente - alturaRaquete/2;
  
  yRaqueteOponente += velocidadeYOponente;
  }

function verificaColisaoRaqueteOponente (x,y) {
  colidiu = collideRectCircle (xRaqueteOponente, yRaqueteOponente, larguraRaquete, alturaRaquete, xBolinha, yBolinha, diametro );

  if (colidiu) {
    velocidadexBolinha *= (-1);
   }
  
}

function incluiPlacar() {
  fill("yellow");
  text (meusPontos, 278, 36);
  text (pontosDoOponente, 321, 36)
}

function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
  }
  if (xBolinha < 10){
    pontosDoOponente += 1;
  }
}