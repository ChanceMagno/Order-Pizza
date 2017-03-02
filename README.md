
# A web application to play tic tac toe

#### 1 Mar., 2017, v.1.0.0

#### By Chance Magno and Mark Fisher

## Description

A web application to play tic tac toe...

### Specifications

|Behavior|Input|Output|
|:---:|:---:|:---:|
|First player is assigned an X symbol|player 1|"X"|
|Second player is assigned an O symbol|player 2|"O"|
|Ensure that there are no more than two players|player 3|No|
|Assign coordinates to a space|space1|1,1|
|Mark a selected space with a player's symbol|space1 X|1,1 --> "X" |
|Populate a board with nine spaces|space1 - space9|board|
|Determine whether any symbol occurs three times across|1,1-->"X"; 1,2-->"X"; 1,3-->"X"|true|
|Determine whether any symbol occurs three times up-and-down|1,1-->"X"; 2,1-->"X"; 3,1-->"X"|true|
|Determine whether any symbol occurs three times diagonally|1,1-->"X"; 2,2-->"X"; 3,3-->"X"|true|
|Populate a game with a board and two players|player1, player2, board|game|
|Determine whose turn in the game it is|player1|Go!|
|Execute the next turn of the game|player2: (2,1)-->"O"|marks space with coordinates 2,1 with symbol "O" and end player2 turn|
|Determine whether someone won the game in the turn they just played|player2: (2,1)--->"O"|player2 wins!|
|End the game if someone has won|player2 wins!|Game over. Player2 wins!|
|Determine whether the board is full|O,X,O;X,X,O;O,O,X|True|
|End game if nobody won but the board is full|O,X,O;X,X,O;O,O,X|Game over. Draw.|
|If game is over, find out whether a new game is desired|Play again?|Yes|
|If a new game is desired, create a fresh game|Yes|new game initialized with empty board|
|create visual display of tic tac toe board|na|board displayed|
|divide board into 3x3 grid of squares|none|tic tac toe squares are visually identifiable|
|user click identifies square clicked|clicked "upper left square"|area clicked "upper left"|
|determine which player clicked|click|recognizes player1|
|draw "x" into given square|upper left|"x" drawn in upper left square|
|draw "o" into given square|upper left|"o" drawn in upper left square|
|draw "x" or "o" dependant on player identity|player2|"o"|
|integrate game logic w/visual logic|play game|visuals working in sync with game|
|Determine whether one-player mode is selected|1 Player?|True|
|Determine which difficulty level the single player has selected|hard|hard|
|If easy mode was selected, make the program act as player2|Player2 turn|Algorithm selects and executes a move, then sets the turn back to player1|
|If easy mode was selected and it's the computer's turn, the computer selects an available space at random|Easy mode + computer's turn| returns SpaceB|
|If easy mode was selected and an available space has been selected, mark it and draw an O there|Available space selected|Marks it and draws O there|
|Implement the behavior of the computer in hard mode if player selected hard|hard|computer is player2 and chooses the optimal non-marked space to mark|

## Setup/Installation Requirements

* This repository is meant to be viewed. It can be viewed [here](https://Atticus29.github.io/ticTacToe).

### Or if you're feeling bold, you can clone OR download a local instance of the site:

* Clone
  * Open your terminal program
    * On a Mac, this would be in the Applications/Utilities directory, and is called, "Terminal"
    * Windows uses a Terminal program as well, but a Terminal with all the capabilities we'll require is not installed by default. Thankfully, we can easily download and install a Terminal program that does fit our needs.
There are many options available, but we recommend using a terminal program called git bash. You can download this free program at [msysgit.github.io](https://git-for-windows.github.io/).
  * Clone this track survey repository by typing, `git clone https://github.com/Atticus29/ticTacToe.git`
* Download
  * Click [here](https://github.com/Atticus29/ticTacToe/archive/master.zip) to download the repo
  * Unzip the zipped repository
* Open the ticTacToe folder and double-click on index.html.
* Make your selections and click submit as instructed on the site.


## Known Bugs

There are no known bugs. I'd be interested to know if you find any.

## Support and contact details

Please feel free to contact mark.aaron.fisher@gmail.com for questions

## Technologies Used

* git v. 2.11.1
* html5
* bootstrap v. 3.3.7
* CSS
* javaScript
* jQuery v. 3.1.1

### License

This software is licensed under the MIT license.

Copyright (c) 2017 Chance Magno and Mark Fisher

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
