var bg_img,f1_img,f1,f2,f2_img;
var gameState = 0;
var playerCount;
var allPlayers;
var f;
var database;

var form, player, game;

function preload(){
    bg_img = loadImage("bg.jpg");
    f1_stand = loadAnimation("c 2.png");
    f2_stand = loadAnimation("p2.png");
    f1_img = loadAnimation("c 2.png","c 3.png","c 4.png");
    f2_img = loadAnimation("p4.png","p2.png","p3.png","p4.png");
   
}

function setup(){
  canvas = createCanvas(680, 500);
  database = firebase.database();
 // f1_img.looping = false;
  //f2_img.looping = false;
  game = new Game();
  game.getState();
  game.start();
   
}

function draw(){
  // background(bg_img);
   if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  /*if(gameState === 2){
    game.end();
  }*/
   drawSprites();
}



