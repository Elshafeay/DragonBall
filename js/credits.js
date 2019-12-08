var timeout=50;

var text = new component();
var team = 600;
var name1 = 700;
var name2 = 800;
var name3 = 900;
var name4 = 1000;
var name5 = 1100;
  

function component() {
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
		ctx.strokeStyle="yellow"
		ctx.fillStyle = "black";
		ctx.shadowColor = "rgb(107, 107, 245)";
		
		ctx.fillText("<Super Saiyans/>",canvas.width/2,team--);


		ctx.shadowColor = "rgba(0,0,0,0.5)";
		ctx.font = "50px Times New Roman";
		ctx.fillStyle = "white";

		ctx.fillText("Mohamed Elshafeay",canvas.width/2,name1--);
		ctx.fillText("Kareem Saied",canvas.width/2,name2--);
		ctx.fillText("Ebtsam Ali",canvas.width/2,name3--);
		ctx.fillText("Eman Magdy",canvas.width/2,name4--);
		ctx.fillText("Omar Abdo",canvas.width/2,name5--);

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