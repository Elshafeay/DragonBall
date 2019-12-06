var gameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.context = this.canvas.getContext("2d");
        container.insertBefore(this.canvas, container.childNodes[2]);
        this.interval = setInterval(updateGameArea, 20);
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
    gameCharRight = new component("images/goku_yellow_right.png", window.innerWidth - (window.innerWidth/7), 150, 300, 250, 150)
    fireBall = new component("images/fire_ball.png", 200, 150, 450, 110, 115)
}

function updateGameArea() {
    gameArea.clear()
    fireBallHandling()
    fireBall.update()
    gameCharLeft.update()
    gameCharRight.update()
}

var container = document.getElementById("container")
var Xincreament = 15
var Yincreament = 10
var Rgoal=0
var Lgoal=0
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
    }
})
document.addEventListener("keyup", (e) => {
    if (e.keyCode in map) {
        map[e.keyCode] = false;
    }
});
