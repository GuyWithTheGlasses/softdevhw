var pic = document.getElementById("vimage");

var change = function change(e){
    e.preventDefault();
    this.setAttribute("fill","green");
};

var drawDot = function drawDot(x,y){
    var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
    c.setAttribute("cx",x);
    c.setAttribute("cy",y);
    c.setAttribute("r",50);
    c.setAttribute("fill","#FFFF00");
    c.setAttribute("stroke","#000000");
    c.addEventListener("click", change);
    pic.appendChild(c);
};

var clicked = function clicked(e){
    if(e.toElement == this){
	drawDot(e.offsetX,e.offsetY);
    }
};

pic.addEventListener("click", clicked);





