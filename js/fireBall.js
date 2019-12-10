function fireBallHandling(){
    if(crashFlag==1){
        if(400 < fireBall.x < 600){
            crashFlag=0
        }
    }
    else if(crashFlag==0){
        if(fireBall.crashWith(gameCharRight) && (fireBall.x < gameCharRight.x+15)){
            crashFlag=1
            Xincreament *= -1
            fireBall.x=gameCharRight.x-levelD
        }
        else if(fireBall.crashWith(gameCharLeft) && fireBall.x > gameCharLeft.x-15){
            crashFlag=1
            Xincreament *= -1
            fireBall.x=gameCharLeft.x + levelD + 30
        }
    }
    if(fireBall.y <= 0){
        Yincreament *= -1
        fireBall.y = 0
    }
    else if(fireBall.y >= 450){
        Yincreament *= -1
        fireBall.y = 450
    }
    if(fireBall.x < -115){
        Rgoal=1
        gameArea.stop()
        Xincreament=Math.abs(Xincreament)
        checkScoring()
    }
    else if(fireBall.x > window.innerWidth + 115){
        Lgoal=1
        gameArea.stop()
        Xincreament=Math.abs(Xincreament)
        checkScoring()
    }
    fireBall.x += Xincreament
    fireBall.y += Yincreament
}