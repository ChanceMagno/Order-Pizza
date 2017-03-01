// Back End

function Player(symbol){
  this.symbol = symbol;
}

function Game(){
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
  spaceA = new Space(1,1);
  spaceB = new Space(1,2);
  spaceC = new Space(1,3);
  spaceD = new Space(2,1);
  spaceE = new Space(2,2);
  spaceF = new Space(2,3);
  spaceG = new Space(3,1);
  spaceH = new Space(3,2);
  spaceI = new Space(3,3);
}

Board.prototype.hasThreeAcross = function(){
  // add stuff here
}

Board.prototype.hasThreeUpDown = function(){
  // add stuff here
}

Board.prototype.hasThreeDiagonally = function(){
  // add stuff here
}



// Front End
$(function(){

});
