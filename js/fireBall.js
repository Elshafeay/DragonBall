function fireBallHandling(){
    if(fireBall.crashWith(gameCharLeft)||fireBall.crashWith(gameCharRight)){
        Xincreament *= -1
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
        checkScoring()
    }
    else if(fireBall.x > window.innerWidth + 115){
        Lgoal=1
        gameArea.stop()
        checkScoring()
    }
    fireBall.x += Xincreament
    fireBall.y += Yincreament
}