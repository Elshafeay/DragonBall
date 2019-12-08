var level=""
easy=document.querySelector("button[id='easy']")
medium=document.querySelector("button[id='medium']")
hard=document.querySelector("button[id='hard']")
menu=document.querySelector("#menu")
levels=document.querySelector("#level")
help=document.querySelector("#helpPage")
helpBack=document.querySelector("button[id='helpBack']")
score=document.querySelector("#scoreLimit")
scoreBack=document.querySelector("#scoreBack")
scoreInput=document.querySelector("input")
scoreSubmit=document.querySelector("#scoreSubmit")
var scoreLimit
error=document.querySelector("p[class='error-message']")
characterSelection=document.querySelector("#characterSelection")

function levelDisplay(){
    menu.style.display="none"
    levels.style.display="block"
    helpBack.style.marginTop="100px"
    characterSelection.style.display="none"
    score.style.display="none"
    document.body.style.backgroundImage= "url('images/homePageBackground_blured.jpg')"
}

function helpDisplay(){
    menu.style.display="none"
    levels.style.display="none"
    help.style.display="block"
    characterSelection.style.display="none"
    score.style.display="none"
    document.body.style.backgroundImage= "url('images/homePageBackground_blured.jpg')"
}

function menuDisplay(){
    menu.style.display="block"
    levels.style.display="none"
    help.style.display="none"
    characterSelection.style.display="none"
    score.style.display="none"
    document.body.style.backgroundImage= "url('images/homePageBackground.jpg')"
}

function scoreLimitDisplay(){
    menu.style.display="none"
    levels.style.display="none"
    help.style.display="none"
    score.style.display="block"
    characterSelection.style.display="none"
    document.body.style.backgroundImage= "url('images/homePageBackground_blured.jpg')"
}

function characterSelectionDisplay(){
    menu.style.display="none"
    levels.style.display="none"
    help.style.display="none"
    score.style.display="none"
    characterSelection.style.display="block"
    document.body.style.backgroundImage= "url('images/characterSelectBackground.jpg')"
}
easy.addEventListener('click', function(e){
    e.preventDefault()
    level="easy"
    scoreLimitDisplay()
})
medium.addEventListener('click', function(e){
    e.preventDefault()
    level="medium"
    scoreLimitDisplay()
})  
hard.addEventListener('click', function(e){
    e.preventDefault()
    level="hard"
    scoreLimitDisplay()
})
scoreBack.addEventListener('click', function(e){
    e.preventDefault()
    levelDisplay()
})
document.querySelector("button[id='scoreSubmit']").addEventListener('click', function(e){
    e.preventDefault()
    if(parseInt(scoreInput.value, 10)>20){
        error.textContent="- the maximum score limit is 20!"
    }
    else if(parseInt(scoreInput.value, 10)<=0){
        error.textContent="- score limit needs to be 1 at least!"
    }
    else if(isNaN(parseInt(scoreInput.value, 10))){
        error.textContent="- you must enter a number!"
    }
    else{
        error.textContent=""
        scoreLimit=parseInt(scoreInput.value, 10)
        characterSelectionDisplay()
        printPlayer1Text()
    }
})

document.querySelector("#charBack").addEventListener('click', function(e){
    e.preventDefault()
    scoreLimitDisplay()
})
document.querySelector("#nextButton").addEventListener('click', function(e){
    e.preventDefault()
    console.log(lPlayerChar);
    console.log(rPlayerChar);
})
