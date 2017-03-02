// Back End

//Canvas
window.onload = draw;
function draw(){
  var canvas = document.getElementById('board-canvas');
  var ctx = canvas.getContext('2d');
  ctx.lineWidth=5;
  ctx.strokeStyle = '#000000';
  drawCrossBars(300,300,ctx);
}

// stole this from the internet
function relMouseCoords(event){
  var totalOffsetX = 0;
  var totalOffsetY = 0;
  var canvasX = 0;
  var canvasY = 0;
  var currentElement = this;
  do{
    totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
    totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
  }
  while(currentElement = currentElement.offsetParent)
  canvasX = event.pageX - totalOffsetX;
  canvasY = event.pageY - totalOffsetY;
  return {x:canvasX, y:canvasY}
}
HTMLCanvasElement.prototype.relMouseCoords = relMouseCoords;

var getRandomInt = function (min, max) { // also stole this one shamelessly from the internet
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function adjustXYtoUpperLeftOfGridSquare (x, y, width, height){
  var potentialXs = [0, width/3, 2*width/3];
  var potentialYs = [0, height/3, 2*height/3];
  var adjustedX = Math.max.apply(Math, potentialXs.filter(function(element){return element<= x}));
  var adjustedY = Math.max.apply(Math, potentialYs.filter(function(element){return element<=y}));
  return {x: adjustedX, y: adjustedY};
}

function drawX (xCoordinate, yCoordinate, width, height, context){
  // assumes x and y coordinates passed to this function define the upper lefthand corner of a square in the tic tac toe grid
  var offset = 7;
  context.beginPath();
  context.moveTo(xCoordinate + offset, yCoordinate + offset);
  context.lineTo(xCoordinate - offset + width/3, yCoordinate - offset + height/3);
  context.moveTo(xCoordinate - offset + width/3, yCoordinate + offset);
  context.lineTo(xCoordinate + offset, yCoordinate -offset + height/3);
  context.stroke();
}

function drawO (xCoordinate, yCoordinate, width, height, context){
  var centerX = xCoordinate + width/3/2;
  var centerY = yCoordinate + height/3/2;
  var radius = width/3/2 * .87;
  context.moveTo(centerX + radius, centerY);
  startAngle = 0;
  endAngle = 2 * Math.PI;
  context.arc(centerX, centerY, radius, startAngle, endAngle);
  context.stroke();
}

function drawCrossBars (width, height, context){
  context.beginPath();
  context.moveTo(width/3, 0);
  context.lineTo(width/3, height);
  context.moveTo(2*(width/3), height);
  context.lineTo(2*(width/3),0);
  context.moveTo(0, height/3);
  context.lineTo(width, height/3);
  context.moveTo(width, 2*(height/3));
  context.lineTo(0, 2*(height/3));
  context.stroke();
}

// Game Logic



function Player(symbol){
  this.symbol = symbol;
}

function Game(playMode){
  this.player1 = new Player("X");
  this.player2 = new Player("O");
  this.currentBoard = new Board();
  this.currentPlayer = this.player1;
  this.playMode = playMode;
}

Game.prototype.reportCurrentPlayer = function(){
  if (this.currentPlayer == this.player1){
    return "Player 1's turn";
  } else{
    return "Player 2's turn";
  }
}

Game.prototype.runEasyAI = function(width, height, context){
  var availableSpaces = this.currentBoard.getAvailableSpaces();
  var currentRandomIndex = getRandomInt(0, availableSpaces.length-1);
  availableSpaces[currentRandomIndex].mark("O");
  drawO(availableSpaces[currentRandomIndex].xCoordinate, availableSpaces[currentRandomIndex].yCoordinate, width, height, context);
  this.currentPlayer = this.player1;
}

Game.prototype.runTurn = function(canvas, context, coords, width, height){

  if(this.playMode === "easy"){
    if (this.currentPlayer === this.player2){
      this.runEasyAI(width, height, context);
    } else{
      if (this.currentBoard.find(coords.x, coords.y).isAvailable()){
        this.currentBoard.find(coords.x, coords.y).mark(this.currentPlayer.symbol);
        console.log("got here");
        console.log(this.currentPlayer.symbol);
        drawShape(this.currentPlayer.symbol, coords, width, height, context);
        console.log("did this");
        // assign current player to whichever player is not the current player
        if (this.currentPlayer === this.player1){
          this.currentPlayer = this.player2;
          console.log("did this as well");
        } else{
          this.currentPlayer = this.player1;
        }
      } else{
        alert("Spot full. Please pick an available spot.");
      }
    }
  } else{
    // mark a desired space with current player's symbol iff that space is available
    if (this.currentBoard.find(coords.x, coords.y).isAvailable()){
      this.currentBoard.find(coords.x, coords.y).mark(this.currentPlayer.symbol);
      console.log("got here");

      // console.log(adjustedCoords);
      drawShape(this.currentPlayer.symbol, coords, width, height, context);
      // assign current player to whichever player is not the current player
      console.log(this.currentBoard.getAvailableSpaces());

      if (this.currentPlayer === this.player1){
        this.currentPlayer = this.player2;
      } else{
        this.currentPlayer = this.player1;
      }
    } else{
      alert("Spot full. Please pick an available spot.");
    }
  }
}



Game.prototype.isTurn = function(player){
  return (this.currentPlayer === player);
}

Game.prototype.sayWhoWon = function(){
  // if there are any winning configurations, the winner is the person who is not the current player, because runTurn swaps the player as its last task
  if(this.currentBoard.hasThreeAcross() || this.currentBoard.hasThreeUpDown() || this.currentBoard.hasThreeDiagonally()){
    if (this.currentPlayer === this.player1){
      return "Player 2 wins!"
    } else{
      return "Player 1 wins!"
    }
  }else{
    return "Game was a draw";
  }
}

Game.prototype.isOver = function(){
  if (this.currentBoard.hasThreeAcross() || this.currentBoard.hasThreeUpDown() || this.currentBoard.hasThreeDiagonally() || this.currentBoard.isFull()){
    return true;
  } else{
    return false;
  }
}

function Space(xCoordinate, yCoordinate){
  this.xCoordinate = xCoordinate;
  this.yCoordinate = yCoordinate;
  this.symbol = "";
}

Space.prototype.mark = function(symbol){
  this.symbol = symbol;
}

Space.prototype.isAvailable  = function(){
  return this.symbol == "";
}

function Board (){
  this.spaceA = new Space(0,0);
  this.spaceB = new Space(100,0);
  this.spaceC = new Space(200,0);
  this.spaceD = new Space(0,100);
  this.spaceE = new Space(100,100);
  this.spaceF = new Space(200,100);
  this.spaceG = new Space(0,200);
  this.spaceH = new Space(100,200);
  this.spaceI = new Space(200,200);
  this.spaces = [this.spaceA, this.spaceB, this.spaceC, this.spaceD, this.spaceE, this.spaceF, this.spaceG, this.spaceH, this.spaceI];
}

Board.prototype.getAvailableSpaces = function (){
  return this.spaces.filter(function(space){return space.symbol==""});
}



Board.prototype.hasThreeAcross = function(){
  if(this.spaceA.symbol === this.spaceB.symbol && this.spaceA.symbol === this.spaceC.symbol && this.spaceA.symbol !== ""){
    // the top row all has the same symbol, and that symbol is not ""
    return true;
  } else if(this.spaceD.symbol === this.spaceE.symbol && this.spaceD.symbol === this.spaceF.symbol && this.spaceD.symbol !== ""){
    return true;
  } else if (this.spaceG.symbol === this.spaceH.symbol && this.spaceG.symbol === this.spaceI.symbol && this.spaceG.symbol !== ""){
    return true;
  } else{
    return false;
  }
}

Board.prototype.hasThreeUpDown = function(){
  if(this.spaceA.symbol === this.spaceD.symbol && this.spaceA.symbol === this.spaceG.symbol && this.spaceG.symbol !== ""){
    return true;
  } else if (this.spaceB.symbol === this.spaceH.symbol && this.spaceB.symbol === this.spaceE.symbol && this.spaceE.symbol !== ""){
    return true;
  } else if (this.spaceC.symbol === this.spaceI.symbol && this.spaceF.symbol === this.spaceC.symbol && this.spaceF.symbol !== ""){
    return true;
  } else {
    return false;
  }
}

Board.prototype.hasThreeDiagonally = function(){
  if(this.spaceA.symbol === this.spaceE.symbol && this.spaceI.symbol === this.spaceE.symbol && this.spaceE.symbol !== ""){
    return true;
  } else if(this.spaceG.symbol === this.spaceE.symbol && this.spaceE.symbol === this.spaceC.symbol && this.spaceC.symbol !== ""){
    return true;
  } else{
    return false;
  }
}

Board.prototype.isFull = function(){
  // refactor this for an array later
  if(this.spaceA.symbol !== "" && this.spaceB.symbol !== "" && this.spaceC.symbol !== "" && this.spaceD.symbol !== "" && this.spaceE.symbol !== "" && this.spaceF.symbol !== "" && this.spaceG.symbol !== "" && this.spaceH.symbol !== "" && this.spaceI.symbol !== ""){
    return true;
  } else{
    return false;
  }
}

Board.prototype.find = function (xCoordinate, yCoordinate){
  if (this.spaceA.xCoordinate === xCoordinate && this.spaceA.yCoordinate === yCoordinate){
    return this.spaceA;
  } else if(this.spaceB.xCoordinate === xCoordinate && this.spaceB.yCoordinate === yCoordinate){
    return this.spaceB;
  } else if(this.spaceC.xCoordinate === xCoordinate && this.spaceC.yCoordinate === yCoordinate){
    return this.spaceC;
  } else if(this.spaceD.xCoordinate === xCoordinate && this.spaceD.yCoordinate === yCoordinate){
    return this.spaceD;
  } else if(this.spaceE.xCoordinate === xCoordinate && this.spaceE.yCoordinate === yCoordinate){
    return this.spaceE;
  } else if(this.spaceF.xCoordinate === xCoordinate && this.spaceF.yCoordinate === yCoordinate){
    return this.spaceF;
  } else if(this.spaceG.xCoordinate === xCoordinate && this.spaceG.yCoordinate === yCoordinate){
    return this.spaceG;
  } else if(this.spaceH.xCoordinate === xCoordinate && this.spaceH.yCoordinate === yCoordinate){
    return this.spaceH;
  } else if(this.spaceI.xCoordinate === xCoordinate && this.spaceI.yCoordinate === yCoordinate){
    return this.spaceI;
  } else{
    console.log("something went wrong!");
  }
}

function drawShape(symbol, coords, width, height, context){
  if(symbol === "X"){
    drawX(coords.x, coords.y, width, height, context);
  } else{
    drawO(coords.x, coords.y, width, height, context);
  }
}

// Front End
$(function(){
  var mode = "asdf";
  var currentGame = new Game(mode);
  var width = 300;
  var height = 300;
  $("#playDiv").prepend("<h2>It is " + currentGame.reportCurrentPlayer() + "</h2>");
  $("#board-canvas").click(function(){
    event.preventDefault();
    if(!currentGame.isOver()){
      var canvas = document.getElementById('board-canvas');
      var ctx = canvas.getContext('2d');
      coords = canvas.relMouseCoords(event);
      var adjustedCoords = adjustXYtoUpperLeftOfGridSquare(coords.x, coords.y, width, height);
      currentGame.runTurn(canvas, ctx, adjustedCoords, width, height);
      if(currentGame.isOver()){
        $("#playDiv").hide();
        $("#hiddenResults h2").remove();
        $("#hiddenResults").show();
        $("#hiddenResults").prepend("<h2> Congratulations! " + currentGame.sayWhoWon() + "</h2>");
      } else{
        $("#playDiv").find('h2').first().remove();
        $("#playDiv").prepend("<h2>It is " + currentGame.reportCurrentPlayer() + "</h2>");
      }
    } else {
      $("#playDiv").hide();
      $("#hiddenResults h2").remove();
      $("#hiddenResults").show();
      $("#hiddenResults").prepend("<h2> Congratulations! " + currentGame.sayWhoWon() + "</h2>");
    }
  });
  $("#playAgainForm").submit(function(){
    $("#hiddenResults").hide();
    $("#playDiv").show();
    currentGame = new Game();
    console.log(currentGame);
  });
});
