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
        loadGame()
    }
    if(Lgoal){
        lPlayerScore+=1;
        Lscore.textContent=lPlayerScore
        Lgoal=0;
        loadGame()
    }
    if(rPlayerScore==3){
        Rscore.textContent=rPlayerScore
        ("We have a WINNER!, congrats player 2")
        rPlayerScore=lPlayerScore=0
        Rscore.textContent=rPlayerScore
        Lscore.textContent=lPlayerScore
    }
    if(lPlayerScore==3){
        Lscore.textContent=lPlayerScore
        alert("We have a WINNER!, congrats player 1")
        rPlayerScore=lPlayerScore=0
        Rscore.textContent=rPlayerScore
        Lscore.textContent=lPlayerScore
    }
}