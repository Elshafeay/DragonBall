//game loading functions

var beginTimeOut;
var loadInterval;
var loadCounter = 1 ;

function loadGame() 
{
    gameArea.load();
    loadCounter=1
    loadInterval = setInterval(updateLoadText, 750);
    beginTimeOut = setTimeout(beginGame, 3000);
}

function beginGame()
{
    document.getElementById("loader").style.display = "none";
    clearInterval(loadInterval);
    gameArea.clear()
    startGame();
}

function updateLoadText()
{
    document.getElementById("loader").style.display = "block";
    var loader =   document.getElementById("loader");
    switch(loadCounter)
    {
            case 1 : loader.textContent= "Ready";
                 break ;
            case 2 : loader.textContent= "Steady";
                 break ;
            case 3 : loader.textContent= "Fight!";
                 break ;
    }
    loadCounter++ ;
}