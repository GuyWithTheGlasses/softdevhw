//Get access to the canvas and get ready to change its context with 2d drawings.
var c = document.getElementById("ftb2maga");
var ctx = c.getContext("2d");

//Our goal today is to make the Illuminati symbol!

//Draw the triangle, using lines. 
ctx.beginPath(); //Reset the drawing thingy
ctx.moveTo(269,180); //Starting point
ctx.lineTo(135,360); //Draw line to 2nd vertex
ctx.lineTo(404,360); //Draw line to 3rd vertex
ctx.closePath(); //Draw line back to starting point
ctx.stroke(); //Outline the triangle

//Draw the upper eyelid and outline it
ctx.beginPath();
ctx.arc(269,350,100,3.85,5.57); 
ctx.stroke();

//Draw the lower eyelid and outline it
ctx.beginPath();
ctx.arc(269,220,100,0.7,2.45);
ctx.stroke();

//Draw the pupil eyeball and fill it in
ctx.beginPath();
ctx.arc(269,285,34,0,2*Math.PI);
ctx.fill();

ctx.font = "36px arial"; //Set the font as Arial size 36px

//Add some spooky text on top
ctx.fillText("They're always",145,120);

//Add some spooky text on bottom
ctx.fillText("watching",195,440);

