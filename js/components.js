function component(imgSrc, x, y, Ybound, height, width) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.image=new Image(this.width , this.height)
    this.image.src=imgSrc
    this.update = function(){
        ctx = gameArea.context;   
        if(this.y<0){this.y=0}
        if(this.y>Ybound){this.y=Ybound}
        ctx.drawImage(this.image, this.x, this.y , this.width , this.height);
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
