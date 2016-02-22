var c = document.getElementById("playground");
var ctx = c.getContext("2d");
ctx.beginPath();

var drawCircle = function drawCircle(e){
    //Creates a circle where the mouse is clicked
    ctx.arc(e.offsetX,e.offsetY,5,0,2*Math.PI)
    ctx.stroke();
};
c.addEventListener("click", function(e){
    //To pass down the event e which contains the current x,y values
    drawCircle(e);
});

var clearCanvas = function clearCanvas(e){
    //Makes the clear button clear the canvas 
    e.preventDefault();
    ctx.clearRect(0,0,c.width,c.height);
    ctx.beginPath(); //Resets the path
};
var clrbtn = document.getElementById("clear");
clrbtn.addEventListener("click", function(e){
    //Passing down the event e for e.preventDefault()
    clearCanvas(e);
});
