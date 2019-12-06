var rPlayerScore = 0
var lPlayerScore = 0
function checkScoring(){
    if(Rgoal){
        rPlayerScore+=1;
        Rgoal=0;
        startGame()
    }
    if(Lgoal){
        lPlayerScore+=1;
        Lgoal=0;
        startGame()
    }

    if(rPlayerScore==3){
        alert("We have a WINNER!, congrats player 2")
        rPlayerScore=lPlayerScore=0
    }
    if(lPlayerScore==3){
        alert("We have a WINNER!, congrats player 1")
        rPlayerScore=lPlayerScore=0
    }
}