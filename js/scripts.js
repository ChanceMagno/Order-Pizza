// Back End
function Player(symbol){
  this.symbol = symbol;
}

function Game(){
  this.player1 = new Player("X");
  this.player2 = new Player("O");
  this.currentBoard = new Board();
  this.currentPlayer = this.player1;
}

Game.prototype.reportCurrentPlayer = function(){
  if (this.currentPlayer == this.player1){
    return "Player 1's turn";
  } else{
    return "Player 2's turn";
  }
}

Game.prototype.runTurn = function(desiredX, desiredY){

  // mark a desired space with current player's symbol iff that space is available
  if (this.currentBoard.find(desiredX, desiredY).isAvailable()){
    this.currentBoard.find(desiredX, desiredY).mark(this.currentPlayer.symbol);
    // assign current player to whichever player is not the current player
    if (this.currentPlayer === this.player1){
      this.currentPlayer = this.player2;
    } else{
      this.currentPlayer = this.player1;
    }
  } else{
    alert("Spot full. Please pick an available spot.");
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
  this.spaceA = new Space(1,1);
  this.spaceB = new Space(1,2);
  this.spaceC = new Space(1,3);
  this.spaceD = new Space(2,1);
  this.spaceE = new Space(2,2);
  this.spaceF = new Space(2,3);
  this.spaceG = new Space(3,1);
  this.spaceH = new Space(3,2);
  this.spaceI = new Space(3,3);
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
  if(this.spaceA.symbol === this.spaceE.symbol && this.spaceI.symbol === this.spaceE && this.spaceE.symbol !== ""){
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



// Front End
$(function(){
  var currentGame = new Game();
  $("#playForm").prepend("<h2>It is " + currentGame.reportCurrentPlayer() + "</h2>");
  $("#playForm").submit(function(){
    event.preventDefault();
    if(!currentGame.isOver()){
      var desiredXusrInput = parseInt($("#desiredXInput").val());
      var desiredYusrInput = parseInt($("#desiredYInput").val());
      currentGame.runTurn(desiredXusrInput, desiredYusrInput);
      if(currentGame.isOver()){
        $("#playForm").hide();
        $("#hiddenResults").show();
        $("#hiddenResults").append("<h2> Congratulations, " + currentGame.sayWhoWon() + "</h2>");
      } else{
        $("#playForm").find('h2').first().remove();
        $("#playForm").prepend("<h2>It is " + currentGame.reportCurrentPlayer() + "</h2>");
      }
    } else {
      $("#playForm").hide();
      $("#hiddenResults").show();
      $("#winnerDisplay").append("<h2> Congratulations!" + currentGame.sayWhoWon() + "</h2>");
    }
  });
  $("#playAgainForm").submit(function(){
    $("#hiddenResults").hide();
    $("#playForm").show();
    currentGame = new Game();
    console.log(currentGame);
  });
});
