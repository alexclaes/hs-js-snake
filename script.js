let tileSize = 20;

let tilesX = 30;
let tilesY = 20;

let snakeX = 10;
let snakeY = 10;

let snakeXv = 0;
let snakeYv = 0;

let snakeLength = 5;
let snakeTrail = [];

let appleX = 15;
let appleY = 15;

let gameStarted = false;
let gameOver = false;
let gameLoop;

let score = 0;

let fps = 15;

let level = 0;
let levelColorsBackground = ["LightSlateGray", "SeaGreen", "Aquamarine", "Black", "Crimson"]
let levelColorsSnake = ["Lime", "DeepSkyBlue", "Purple", "White", "Magenta"]
let levelColorsApple = ["Red", "LightSalmon", "DeepPink", "White", "Yellow"]

let canvas;
let ctx;

window.onload = function() {
  canvas=document.getElementById("canvas");
  canvas.width = tilesX * tileSize;
  canvas.height = tilesY * tileSize;

  ctx = canvas.getContext("2d");

  document.addEventListener("keydown", onKeyDown);

  gameLoop = setTimeout(game, 1000/fps);
}

function game(){

  moveSnake();

  limitToPlayground();

  drawBackground();

  drawApple();

  drawSnake();

  detectEatApple();

  detectEatSnake();

  updateSnakeTrail();

  if(!gameOver){
   gameLoop = setTimeout(game, 1000/fps);
  }

}

function getLevelColor(colors){
  let index;
  if(level < colors.length) {
    index = level
  } 
  else {
    index = colors.length - 1;
  }
  return colors[index];
}

function drawBackground() {
  ctx.fillStyle = getLevelColor(levelColorsBackground);
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake(){
  for(var i = 0 ; i < snakeTrail.length; i++){
    drawTile(snakeTrail[i].x, snakeTrail[i].y, getLevelColor(levelColorsSnake))
  }
}

function drawTile(x, y, color){
  ctx.fillStyle = color;
  ctx.fillRect(x * tileSize, y * tileSize, tileSize - 2, tileSize - 2);
}

function drawApple(){
  drawTile(appleX, appleY, getLevelColor(levelColorsApple))
}

function moveSnake(){
  snakeX += snakeXv;
  snakeY += snakeYv;
}

function updateSnakeTrail(){
  snakeTrail.push({x:snakeX, y:snakeY});
  while(snakeTrail.length > snakeLength) {
    snakeTrail.shift();
  }
}

function detectEatApple(){
  if(appleX == snakeX && appleY == snakeY) {
    snakeLength++;
    score++;
    if(score % 2 == 0){
      level++;
      fps = 15 + level * 5;
    }
    newApple();
  }
}

function detectEatSnake(){
  if(gameStarted) {
    for(var i = 0 ; i < snakeTrail.length; i++){
      if(snakeTrail[i].x == snakeX && snakeTrail[i].y == snakeY) {
        gameOver = true;
      }
    }
 }
}

function newApple(){
  appleX = Math.floor(Math.random() * tilesX);
  appleY = Math.floor(Math.random() * tilesY);
}

function limitToPlayground(){
  if(snakeX < 0){
    snakeX = tilesX-1;
  }
  if(snakeX > tilesX-1){
    snakeX = 0;
  }
  if(snakeY < 0){
    snakeY = tilesY-1;
  }
  if(snakeY > tilesY-1){
    snakeY = 0;
  }
}

function onKeyDown(evt){  
  gameStarted=true;

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