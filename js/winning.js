var winningTimeOut
function playerOneWinning(){
 // gameArea.drawFirstWinner()
    loader.style.display = "block";
    loader.textContent= "First player Wins";
    winningTimeOut = setTimeout(endGame, 2000);
}

function playerTwoWinning(){
//  gameArea.drawSecondWinner()
    loader.style.display = "block";
    loader.textContent= "second player Wins";
    winningTimeOut = setTimeout(endGame, 2000);
}

function endGame()
{
    resetScoreBoard();
    loader.style.display = "none";
    gameArea.clear();
    winningPopup();
 //   loadGame();
}

function resetScoreBoard(){
    rPlayerScore=lPlayerScore=0
    Lgoal=Rgoal=0
    Rscore.textContent=rPlayerScore
    Lscore.textContent=lPlayerScore
}
