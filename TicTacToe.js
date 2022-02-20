var move = 1;
var winner = -1;
var totalClicks = 0;
var boardCells = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1]
]

function clickCell(cell, row, col) {
   if (cell.innerHTML != "") return;
   if (winner != -1) return;
   
   totalClicks++;
   boardCells[row][col] = move;
    if (move == 1) {
       cell.innerHTML = 'X';
       document.getElementById("whos-turn").innerHTML = "It is Player 2's Turn! (O)";
       move = 2;

    } 
    else if (move == 2) {
        cell.innerHTML = 'O';
        document.getElementById("whos-turn").innerHTML = "It is Player 1's Turn! (X)";
        move = 1;
    }
  
    

    if(boardCells[0][0] == boardCells[1][0] && boardCells[1][0] == boardCells[2][0]) win = boardCells[0][0];
    if(boardCells[0][1] == boardCells[1][1] && boardCells[1][1] == boardCells[2][1]) win = boardCells[0][1];
    if(boardCells[0][2] == boardCells[1][2] && boardCells[1][2] == boardCells[2][2]) win = boardCells[2][2];
    //horizontal wins

    if(boardCells[0][0] == boardCells[0][1] && boardCells[0][1] == boardCells[0][2]) win = boardCells[0][0];
    if(boardCells[1][0] == boardCells[1][1] && boardCells[1][1] == boardCells[1][2]) win = boardCells[1][0];
    if(boardCells[2][0] == boardCells[2][1] && boardCells[2][1] == boardCells[2][2]) win = boardCells[2][0];
    // vertical wins

    if(boardCells[0][0] == boardCells[1][1] && boardCells[1][1] == boardCells[2][2]) win = boardCells[1][1];
    if(boardCells[0][2] == boardCells[1][1] && boardCells[1][1] == boardCells[2][0]) win = boardCells[1][1];
    //diagonal wins

    if(win != -1) {
        document.getElementById("whos-turn").innerHTML = `Player ${win} wins. Congratulations!`;
    }

    if (totalClicks == 9 && win == -1) {
        document.getElementById("whos-turn").innerHTML = "It's a Tie! No winner this time! Refresh to restart!"
       }
}


