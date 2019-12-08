//game loading functions

var beginTimeOut;
var loadInterval;
var loadCounter = 1 ;
var loader =   document.getElementById("loader");

function loadGame() 
{
    document.getElementById("pause").setAttribute("disabled" , "disabled");
    gameArea.load();
    loadCounter=1
    loadInterval = setInterval(updateLoadText, 850);
    beginTimeOut = setTimeout(beginGame, 3600);
}

function beginGame()
{
    document.getElementById("pause").removeAttribute("disabled");
    document.getElementById("loader").style.display = "none";
    clearInterval(loadInterval);
    startGame();
}

function updateLoadText()
{
    document.getElementById("loader").style.display = "block";
    switch(loadCounter)
    {
            case 1 : loader.textContent= "3";
                break ;
            case 2 : loader.textContent= "2";
                break ;
            case 3 : loader.textContent= "1";
                break ;
            case 4 : loader.textContent= "Fight!";
                break ;
    }
    loadCounter++ ;
}