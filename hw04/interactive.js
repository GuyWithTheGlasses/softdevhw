//The svg tag
var pic = document.getElementById("vimage");

//The ID of the current interval/animation frame/whatever
var intervalID;

//Stop the current interval 
var stopInterval = function stopInterval(){
    window.clearInterval(intervalID);
};

//Assign function clearInterval() to stop button
var stopbtn = document.getElementById("stop");
stopbtn.addEventListener("click",stopInterval);

//Causes the circle to grow and shrink
var grow = function grow(){
    //Current radius of the circle, will inc/dec
    var radius = 0;
    //Current state of the circle: inc or dec
    var isGrowing = true;

    //Assign the svg element
    var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
    //Initial position and fill of the circle
    c.setAttribute("cx",pic.offsetWidth/2);
    c.setAttribute("cy",pic.offsetHeight/2);
    c.setAttribute("fill","#FFFF00");
    c.setAttribute("stroke","#000000");
    
    //The function that is called recursively
    var animateCircle = function animateCircle(){
	//Increment the radius
	if(isGrowing){
	    radius = radius + 1;
	} else {
	    radius = radius - 1;
	}
	//Change state when extreme values are reached
	if(radius == 0 || radius == pic.offsetWidth/2){
	    isGrowing = !isGrowing;
	}

	//Change radius of drawn circle
	c.setAttribute("r",radius.toString());
	//Add the circle to the page
	pic.appendChild(c);
    };
    //Store intervalID for stopping and run animateCircle every 16 something
    intervalID = window.setInterval(animateCircle,16);
};

//Assign function grow() to circle button
var crclbtn = document.getElementById("circle");
crclbtn.addEventListener("click",grow);





