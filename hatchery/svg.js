var pic = document.getElementById("vimage");

var c = document.createElementNS("http://www.w3.org/2000/svg","circle");

c.setAttribute("cx",0);
c.setAttribute("cy",0);
c.setAttribute("r",100);
c.setAttribute("fill","#FF0000");
c.setAttribute("stroke","#000000");

pic.appendChild(c);

var cENS = function cENS(element,tag){
    var a = document.createElementNS("http://www.w3.org/2000/svg",element);
    tag.append(a);
};

cENS("circle",pic);


