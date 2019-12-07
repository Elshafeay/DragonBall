var timeout=50;

var text = new component();
var team = 50;
var name1 = 100;
var name2 = 150;
var name3 = 200;
var name4 = 250;
var name5 = 300;
  

function component() {
	this.update = function() {
		var canvas = document.createElement('canvas');
		var oldCanvas = document.getElementsByTagName('canvas')[0];
		var container = document.getElementById("canvas-container");
		
		var ctx=canvas.getContext("2d");

		ctx.font="30px Comic Sans MS";
		ctx.fillStyle = "black";
		ctx.textAlign = "center";
		
		ctx.strokeText("Super Saiyans",canvas.width/2,team--);
		ctx.strokeText("Mohamed elshafeay",canvas.width/2,name1--);
		ctx.strokeText("Kareem saied",canvas.width/2,name2--);
		ctx.strokeText("Ebtsam Ali",canvas.width/2,name3--);
		ctx.strokeText("Eman Magdy",canvas.width/2,name4--);
		ctx.strokeText("Omar Abdo",canvas.width/2,name5--);
		container.replaceChild(canvas , oldCanvas);
	}
}

function start()
{
	setInterval(update,timeout);
}

function update(){
	text.update();
}

start();