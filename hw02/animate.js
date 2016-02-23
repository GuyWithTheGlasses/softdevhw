console.log("animate");

//Get the canvas and prep it for 2d drawing
var c = document.getElementById("animator");
var ctx = c.getContext("2d");

//Set color
ctx.strokeStyle = "#90EFC0";
ctx.fillStyle = "#90EFC0";

//Initialize radius and expanding/shrinking variables
var radius = 0;
var expanding = true;

//Clear the canvas
var clearCanvas = function clearCanvas(){
    ctx.clearRect(0,0,c.width,c.height);
    ctx.beginPath();
}

//Draw circles with increasing/decreasing radii
var drawCircle = function drawCircle(){
    clearCanvas();
    //Increment the radius
    if(expanding){
	radius = radius + 1;
    } else {
	radius = radius - 1;
    }
    //Change the state at the extreme values
    if(radius == 0 || radius == c.height/2){
	expanding = !expanding;
    }
    //Draw and fill the circle
    ctx.beginPath();
    ctx.arc(c.width/2,c.height/2,radius,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
    //Call the function again
    window.requestAnimationFrame(drawCircle);
};

//Link clear button to canvas clearing function
var clrbtn = document.getElementById("clear");
clrbtn.addEventListener("click",clearCanvas);

//Link circle button to drawing circles function
var circlebtn = document.getElementById("circle");
circlebtn.addEventListener("click",drawCircle);
