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

let gameScreen;
let gameOverScreen;

let canvas;
let ctx;

window.onload = function() {
  canvas=document.getElementById("canvas");
  canvas.width = tilesX * tileSize;
  canvas.height = tilesY * tileSize;

  ctx = canvas.getContext("2d");

  gameScreen = document.getElementById("game-screen");
  gameOverScreen = document.getElementById("game-over-screen");
  let restartButton = document.getElementById("restart");
  restartButton.addEventListener("click", restart);

  document.addEventListener("keydown", onKeyDown);

  showGameScreen();

  startGameLoop();
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
   clearInterval(gameLoop);
   showGameOverScreen();
  }

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

function showGameOverScreen(){
  gameScreen.style.display = "none"
  gameOverScreen.style.display = "block";
}

function showGameScreen(){
  gameScreen.style.display = "block"
  gameOverScreen.style.display = "none";
}

function startGameLoop() {
  gameLoop = setInterval(game, 1000/15);
}

function restart(){
  snakeLength = 5;
  snakeTrail = [];
  
  snakeX = 10;
  snakeY = 10;

  snakeXv = 0;
  snakeYv = 0;

  appleX = 15;
  appleY = 15;

  gameStarted = false;
  gameOver = false;

  showGameScreen();

  startGameLoop();
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
