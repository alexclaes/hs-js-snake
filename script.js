let tileSize = 20;

let tilesX = 30;
let tilesY = 20;

let snakeX = 10;
let snakeY = 10;

let snakeXv = 0;
let snakeYv = 0;

let snakeTrail = [];

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

  document.addEventListener("keydown", onKeyDown);

  gameLoop = setInterval(game, 1000/15);
}

function game(){

  moveSnake();

  drawBackground();

  drawApple();

  drawSnake();

  updateSnakeTrail();

}

function drawBackground() {
  ctx.fillStyle = "LightSlateGray";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake(){
  for(var i = 0 ; i < snakeTrail.length; i++){
    drawTile(snakeTrail[i].x, snakeTrail[i].y, "lime")
  }
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

function updateSnakeTrail(){
  snakeTrail.push({x:snakeX, y:snakeY});
}

function onKeyDown(evt){  
  if(evt.code === "ArrowLeft") {
    snakeXv=-1;
    snakeYv=0;
  }
  if(evt.code === "ArrowUp") {
    snakeXv=0;
    snakeYv=-1;
  }
  if(evt.code === "ArrowRight") {
    snakeXv=1;
    snakeYv=0;
  }
  if(evt.code === "ArrowDown") {
    snakeXv=0;
    snakeYv=1;
  }
}