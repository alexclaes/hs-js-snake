let tileSize = 20;

let tilesX = 30;
let tilesY = 20;

let snakeX = 10;
let snakeY = 10;

let snakeXv = 0;
let snakeYv = 0 ;

let appleX = 15;
let appleY = 15;

let gameLoop;

let canvas;
let ctx;

window.onload = function() {
  canvas=document.getElementById("canvas");
  canvas.width = tilesX * tileSize;
  canvas.height = tilesY * tileSize;

  ctx = canvas.getContext("2d");

  snakeXv = 1;

  gameLoop = setInterval(game, 1000/15);
}

function game(){

  moveSnake();

  drawBackground();

  drawApple();

  drawSnake();

}

function drawBackground() {
  ctx.fillStyle = "LightSlateGray";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake(){
  drawTile(snakeX, snakeY, "Lime");
}

function drawTile(x, y, color){
  ctx.fillStyle = color;
  ctx.fillRect(x * tileSize, y * tileSize, tileSize - 2, tileSize - 2);
}

function drawApple(){
  drawTile(appleX, appleY, "Red")
}

function moveSnake(){
  snakeX += snakeXv;
  snakeY += snakeYv;
}