var level=""
var easy=document.querySelector("button[id='easy']")
var medium=document.querySelector("button[id='medium']")
var hard=document.querySelector("button[id='hard']")
var menu=document.querySelector("#menu")
var levels=document.querySelector("#level")
var help=document.querySelector("#helpPage")
var helpBack=document.querySelector("button[id='helpBack']")
var score=document.querySelector("#scoreLimit")
var scoreBack=document.querySelector("#scoreBack")
var scoreInput=document.querySelector("input")
var scoreSubmit=document.querySelector("#scoreSubmit")
var scoreLimit
var error=document.querySelector("p[class='error-message']")
var characterSelection=document.querySelector("#characterSelection")
var creditsPage=document.querySelector("#creditsPage")
var timeout=30;
var names=["Mohamed Elshafeay", "Kareem Saied", "Ebtsam Ali", "Eman Magdy", "Omar Abdo"]
var team=650
var namesX=[750, 850, 950, 1050, 1150]
var textCredit = new creditComponent();

function levelDisplay(){
    menu.style.display="none"
    levels.style.display="block"
    helpBack.style.marginTop="100px"
    characterSelection.style.display="none"
    creditsPage.style.display="none"
    score.style.display="none"
    document.body.style.backgroundImage= "url('images/homePageBackground_blured.jpg')"
}

function helpDisplay(){
    menu.style.display="none"
    levels.style.display="none"
    help.style.display="block"
    characterSelection.style.display="none"
    creditsPage.style.display="none"
    score.style.display="none"
    document.body.style.backgroundImage= "url('images/homePageBackground_blured.jpg')"
}

function menuDisplay(){
    menu.style.display="block"
    levels.style.display="none"
    help.style.display="none"
    characterSelection.style.display="none"
    creditsPage.style.display="none"
    score.style.display="none"
    document.body.style.backgroundImage= "url('images/homePageBackground.jpg')"
}

function scoreLimitDisplay(){
    menu.style.display="none"
    levels.style.display="none"
    help.style.display="none"
    score.style.display="block"
    creditsPage.style.display="none"
    characterSelection.style.display="none"
    document.body.style.backgroundImage= "url('images/homePageBackground_blured.jpg')"
}

function characterSelectionDisplay(){
    menu.style.display="none"
    levels.style.display="none"
    help.style.display="none"
    score.style.display="none"
    creditsPage.style.display="none"
    characterSelection.style.display="block"
    document.body.style.backgroundImage= "url('images/characterSelectBackground.jpg')"
}

function creditComponent() {
    this.update = function() {
        var canvas = document.createElement('canvas');
        var oldCanvas = document.getElementsByTagName('canvas')[0];
        var container = document.getElementById("canvas-container");
        canvas.width= window.innerWidth;
        canvas.height= window.innerHeight;
        var ctx=canvas.getContext("2d");
        ctx.textAlign = "center";
        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 3;
        ctx.shadowBlur = 2;		
        ctx.font = "70px Times New Roman";
        ctx.fillStyle = "black";
        ctx.shadowColor = "rgb(107, 107, 245)";		
        ctx.fillText("<Super Saiyans/>",canvas.width/2,team--);
        ctx.shadowColor = "rgba(0,0,0,0.5)";
        ctx.font = "50px Times New Roman";
        ctx.fillStyle = "white";
        for (let index = 0; index < names.length; index++) {
            ctx.fillText(names[index],canvas.width/2,namesX[index]--);			
        }
    container.replaceChild(canvas , oldCanvas);
    }
}
function creditsDisplay(){
    menu.style.display="none"
    levels.style.display="none"
    help.style.display="none"
    score.style.display="none"
    characterSelection.style.display="none"
    creditsPage.style.display="block"
    document.body.style.backgroundImage= "url('images/homePageBackground_blured.jpg')"
    team=650
    timeout=30
    namesX=[750, 850, 950, 1050, 1150]
    start();
    var creditInterval
    function start()
    {
        creditInterval=setInterval(update,timeout);
    }
    function update(){
        textCredit.update();
        if(namesX[names.length-1] < -15){
            clearInterval(creditInterval)
            menuDisplay();
        }
    }
    document.querySelector("#creditsBack").addEventListener("click", function(e){
        clearInterval(creditInterval)
        menuDisplay()
    })
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
    localStorage.setItem("rPlayerChar", rPlayerChar);
    localStorage.setItem("lPlayerChar", lPlayerChar);
    localStorage.setItem("scoreLimit", scoreLimit);
    localStorage.setItem("level", level);
    location.href="gameScreen.html";
})