var container = document.getElementById("container")
var Xincreament = 20
var Yincreament = 10

function component(imgSrc, x, y, Ybound, height, width) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.imgSrc=imgSrc
    this.update = function(){
        var image = document.createElement("img")
        ctx = gameArea.context;   
        image.src=this.imgSrc
        if(this.y<0){this.y=0}
        if(this.y>Ybound){this.y=Ybound}
        image.addEventListener('load', e => {
            ctx.drawImage(image, this.x, this.y);
            return true
        });
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
        if ((mytop < othertop) ||
        (mybottom > otherbottom) ||
        (myright < otherleft) ||
        (myleft > otherright)) {
          crash = false;
        }
        return crash;
    }
}

var gameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1530;
        this.canvas.height = 560;
        this.context = this.canvas.getContext("2d");
        container.insertBefore(this.canvas, container.childNodes[2]);
        this.interval = setInterval(updateGameArea, 40);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

function startGame() {
    gameArea.start();
    gameCharLeft = new component("images/goku_blue_left.png", 40, 150, 300, 250, 150)
    gameCharRight = new component("images/goku_yellow_right.png", 1350, 150, 300, 250, 150)
    fireBall = new component("images/fire_ball.png", 200, 150, 450, 110, 115)
}

//we put it into setInterval to be repeated the whole time
//this function would clear the screen and set the new coordinates
//of each one of the characters and draw it 
//over and over again to be like a punch of frames
function updateGameArea() {
    gameArea.clear()
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
    fireBall.x += Xincreament
    fireBall.y += Yincreament
    fireBall.update()
    gameCharLeft.update()
    gameCharRight.update()
}

function leftMoveUp() {
    gameCharLeft.y -= 20;
}
  
function leftMoveDown() {
    gameCharLeft.y += 20;
}
function rightMoveUp() {
    gameCharRight.y -= 20;
}
  
function rightMoveDown() {
    gameCharRight.y += 20;
}

startGame()
var canvas = document.getElementsByTagName('canvas')[0];

var map = {38: false, 40: false, 119: false, 115: false, 87: false, 83: false};
document.addEventListener( 'keydown' , (e) => {
    if (e.keyCode in map) {
        map[e.keyCode] = true;
        if (map[38]) {
            rightMoveUp()
        }
        if (map[40]) {
            rightMoveDown()
        }
        if (map[119] || map[87]) {
            leftMoveUp()
        }
        if (map[115] || map[83]) {
            leftMoveDown()
        }
        if (map[38] && (map[119] || map[87])) {
            rightMoveUp()
            leftMoveUp()
        }
        if (map[40] && (map[119] || map[87])) {
            rightMoveDown()
            leftMoveUp()
        }
        if (map[38] && (map[115] || map[83])) {
            rightMoveUp()
            leftMoveDown()
        }
        if (map[40] && (map[115] || map[83])) {
            rightMoveDown()
            leftMoveDown()
        }
    }
})
document.addEventListener("keyup", (e) => {
    if (e.keyCode in map) {
        map[e.keyCode] = false;
    }
});
