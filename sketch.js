var canvas;
var rocketImg,rocket;

function preload(){
  rocketImg = loadImage("rocket.jpg");

}

function setup(){
  canvas = createCanvas(800,600);

  rocket = createSprite(400,400,20,20);
  rocket.addImage(rocketImg);
  rocket.scale = 0.3;
}

function draw(){
  background("blue");

  drawSprites();
  
}