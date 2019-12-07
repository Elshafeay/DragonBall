var level=""
easy=document.querySelector("button[id='easy']")
medium=document.querySelector("button[id='medium']")
hard=document.querySelector("button[id='hard']")
menu=document.querySelector("#menu")
levels=document.querySelector("#level")

function levelDisplay(){
    menu.style.display="none"
    levels.style.display="block"
    document.body.style.backgroundImage= "url('../images/homePageBackground_blured.jpg')"
}

easy.addEventListener('click', function(e){
    e.preventDefault()
    level="easy"
})
medium.addEventListener('click', function(e){
    e.preventDefault()
    level="medium"
})  
hard.addEventListener('click', function(e){
    e.preventDefault()
    level="hard"
})
