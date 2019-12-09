var rPlayerScore = 0
var lPlayerScore = 0
var Rscore = document.querySelector("#Rscore")
var Lscore = document.querySelector("#Lscore")
Lscore.textContent=lPlayerScore
Rscore.textContent=rPlayerScore

function checkScoring(){
    if(Rgoal){       
        rPlayerScore+=1;
        Rscore.textContent=rPlayerScore
        Rgoal=0;
        if(rPlayerScore != scoreLimit)
        loadGame()
    }
    if(Lgoal){
        lPlayerScore+=1;
        Lscore.textContent=lPlayerScore
        Lgoal=0;
        if(lPlayerScore != scoreLimit)
        loadGame()
    }
    if(rPlayerScore == scoreLimit){
        playerTwoWinning();
    }
    if(lPlayerScore == scoreLimit){
        playerOneWinning();
    }
}