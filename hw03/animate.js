console.log("animate");

/*--------------------------- Initialization -----------------------------*/

//Get the canvas and prep it for 2d drawing
var c = document.getElementById("animator");
var ctx = c.getContext("2d");

//Set color
ctx.strokeStyle = "#60CFD0";
ctx.fillStyle = "#60CFD0";

//Initialize radius and expanding/shrinking variables
var radius = 0;
var expanding = true;

var requestID; //To store the current animation frame ID

//Get the DVD logo for later
var logo = new Image();
logo.src = "logo_dvd.jpg";

/*------------------------ Drawing the Circles ---------------------------*/

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
    requestID = window.requestAnimationFrame(drawCircle);
};

//Link circle button to drawing circles function
var circlebtn = document.getElementById("circle");
circlebtn.addEventListener("click",drawCircle);

/*------------------------ Stopping the Circles ---------------------------*/

//Cancel the circle drawing 
var stopCircle = function stopCircle(){
    window.cancelAnimationFrame(requestID);
};

//Link stop button to stop drawing function
var stopbtn = document.getElementById("stop");
stopbtn.addEventListener("click",stopCircle);

/*------------------------ Random Number Generator ------------------------*/

//Found this code online
//"Returns a random integer between min (inclusive) and max (inclusive)"
//Thanks stackoverflow
var getRandomInt = function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*---------------------------- DVD Bouncing -------------------------------*/

//Set x and y velocities 
var xvel = 1;
var yvel = 1;
//Set image width and height
var imgW = 100;
var imgH = 50;
//Initialize current x and y coordinates
var xcor = getRandomInt(0,c.width-imgW);
var ycor = getRandomInt(0,c.height-imgH);

//Make DVD move and bounce around the canvas
var bounceDVD = function bounceDVD(){
    //Increment the x and y coords
    xcor = xcor + xvel;
    ycor = ycor + yvel;
    //Negate the velocities if we hit extreme values
    if(xcor <= 0 || xcor+imgW > c.width){
	xvel = -1*xvel;
    } else if (ycor <= 0 || ycor+imgH > c.height){
	yvel = -1*yvel;
    }
    //Actually draw the image
    ctx.drawImage(logo,xcor,ycor,imgW,imgH);
    //Call function again
    requestID = window.requestAnimationFrame(bounceDVD);
};

//Link DVD button to bouncing DVD function
var dvdbtn = document.getElementById("dvd");
dvdbtn.addEventListener("click",bounceDVD);
