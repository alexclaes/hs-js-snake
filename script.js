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

  limitToPlayground();

  drawBackground();

  drawApple();

  drawSnake();

  detectEatApple();

  detectEatSnake();

  updateSnakeTrail();

  if(gameOver){
   clearInterval(gameLoop) 
  }

}

function drawBackground() {
  ctx.fillStyle = "LightSlateGray";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake(){
  for(var i = 0 ; i < snakeTrail.length; i++){
    if(i == snakeTrail.length-1) {
      drawStripedTile(snakeTrail[i].x, snakeTrail[i].y, "lime", "yellow")
    }
    else {
      if(i % 2 == 0) {
        drawRandomColorTile(snakeTrail[i].x, snakeTrail[i].y)
      }
      else {
        drawPatternTile(snakeTrail[i].x, snakeTrail[i].y, "Magenta", "Cyan")
      }
    }
  }
}

function drawTile(x, y, color){
  ctx.fillStyle = color;
  ctx.fillRect(x * tileSize, y * tileSize, tileSize - 2, tileSize - 2);
}

function drawRandomColorTile(x, y){
  let colors = ["GreenYellow", "DarkOrchid", "DarkOrange", "DeepPink", "Crimson", "Gold", "DodgerBlue"]
  let randomIndex = Math.floor(Math.random() * colors.length);
  let color = colors[randomIndex];
  ctx.fillStyle = color;
  ctx.fillRect(x * tileSize, y * tileSize, tileSize - 2, tileSize - 2);
}

function drawPatternTile(x, y, color1, color2){
  let patternSize = (tileSize - 2) / 2;

  ctx.fillStyle = color1;
  // top left
  ctx.fillRect(x * tileSize , y * tileSize, patternSize, patternSize);
  // bottom right
  ctx.fillRect(x * tileSize + patternSize , y * tileSize + patternSize, patternSize, patternSize);

  ctx.fillStyle = color2;
  // top right
  ctx.fillRect(x * tileSize + patternSize, y * tileSize, patternSize, patternSize);
  // bottom left
  ctx.fillRect(x * tileSize , y * tileSize + patternSize, patternSize, patternSize);
}

function drawStripedTile(x, y, color1, color2){
  let stripeWidth = 3;
  for(let i = 0; i < tileSize - stripeWidth - 1 ; i += stripeWidth){
    if( i == 0 || i == 6 || i == 12 ){
      ctx.fillStyle = color1;
    }
    else {
      ctx.fillStyle = color2;
    }
    ctx.fillRect(x * tileSize + i , y * tileSize, stripeWidth, tileSize - 2);
  }
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
  while(snakeTrail.length > snakeLength) {
    snakeTrail.shift();
  }
}

function detectEatApple(){
  if(appleX == snakeX && appleY == snakeY) {
    snakeLength++;
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