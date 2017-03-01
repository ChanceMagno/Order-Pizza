// Back End

function Player(symbol){
  this.symbol = symbol;
}

function Game(){
  this.player1 = new Player("X");
  this.player2 = new Player("O");
  this.currentBoard = new Board();
}

Game.prototype.runTurn = function(){

}

Game.prototype.isTurn = function(player){

}

Game.prototype.isOver = function(){

}

Game.prototype.setupNewGame = function(){

}


function Space(xCoordinate, yCoordinate){
  this.xCoordinate = xCoordinate;
  this.yCoordinate = yCoordinate;
  this.symbol = "";
}

Space.prototype.mark = function(symbol){
  this.symbol = symbol;
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
  // add stuff here
  if(this.spaceA.symbol === this.spaceB.symbol && this.spaceA.symbol === this.spaceC.symbol && this.spaceA.symbol !== ""){
    // the top row all has the same symbol, and that symbol is not ""
    return true;
  } else if(this.spaceD.symbol === this.spaceE.symbol && this.spaceD.symbol === this.spaceF.symbol && this.spaceD.symbol !== ""){
    return true;
  } else if (this.spaceG.symbol === this.spaceH.symbol && this.spaceG.symbol === this.spaceI.symbol && this.spaceG.symbol !== ""){
    return true;
  } else{
    console.log("No three across.");
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
    console.log("chance messed up");
    return false;
  }
}

Board.prototype.hasThreeDiagonally = function(){
  if(this.spaceA.symbol === this.spaceE.symbol && this.spaceI.symbol === this.spaceE && this.spaceE.symbol !== ""){
    return true;
  } else if(this.spaceG.symbol === this.spaceE.symbol && this.spaceE.symbol === this.spaceC.symbol && this.spaceC.symbol !== ""){
    return true;
  } else{
    console.log("chance messed up diagonally");
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
  // console.log(currentGame);
  // currentGame.currentBoard.spaceF.mark("X");
  // console.log(currentGame.currentBoard.spaceA);
  // console.log(currentGame.currentBoard.find(2,3).mark("X"));
  currentGame.currentBoard.find(1,1).mark("asd");
  currentGame.currentBoard.find(2,1).mark("asdf");
  currentGame.currentBoard.find(3,1).mark("asdf");

  console.log(currentGame.currentBoard.hasThreeDiagonally());
});
