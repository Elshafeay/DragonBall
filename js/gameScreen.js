// Test pushing file to testing branch
function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.update = function(){
        ctx = myGameArea.context;   
        ctx.fillStyle = color;

        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) ||
        (mytop > otherbottom)) {
          crash = false;
        }
        return crash;
    }
}

var myGameArea = {
    canvas : document.getElementById("myCanvas"),
    start : function() {
        this.context = this.canvas.getContext("2d");
        document.body.html = this.canvas;
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function startGame() {
    myGameArea.start();
    myGamePiece = new component(15, 80, "red", 10, 120);
    myGamePiece2 = new component(15, 80, "red" , 1300 , 120);
    border1 = new component(1364 , 5 , "brown" , 0 , 0);
    border2 = new component(1364 , 5 , "brown" , 0 , 445)
}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.update();
    myGamePiece2.update();
    border1.update();
    border2.update();
}

function moveUp()
{
    if (!myGamePiece.crashWith(border1)) {
        myGamePiece.y -= 20;
    }
   
}

function moveDown()
{
    if (!myGamePiece.crashWith(border2)) {
        myGamePiece.y += 20;
    }
}

function moveUp2()
{
    if (!myGamePiece2.crashWith(border1)) {
        myGamePiece2.y -= 20;
    }
}

function moveDown2()
{
    if (!myGamePiece2.crashWith(border2)) {
        myGamePiece2.y += 20;
    }
}

startGame()
document.addEventListener("keydown", (event)=>{
    var keyName = event.key
    if(keyName=="w"){moveUp()}
    else if(keyName=="s"){moveDown()}
    if(keyName=="ArrowUp"){moveUp2()}
    else if(keyName=="ArrowDown"){moveDown2()}}
)
