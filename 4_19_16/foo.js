console.log("foo");

var base = "this is in foo in global namespace";
var x = "x is in the global namespace";

var f2 = function(){
    console.log("this is f2");
};

//f1.x should return the value of x
//f1.f2 returns the function f2
var f1 = {
    x : "sumpn in the f1 namespace",
    f2 : f2,
    f : function(){
	console.log("this is f in f1 namespace");
	console.log("x is: " + x);
	console.log("f1.x is: " + f1.x);
	console.log("better way: " + this.x);
    }
}

function makeIncrementer(){
    var a = 0;
    function inner(){
	a++;
	return a
    };
    return inner
};

function makeAdder(n){
    var b = 0;
    function inc(){
	b += n
	return b
    };
    return inc
};

//Make a counter
var makeCounter = function makeCounter(){
    //inst var
    var i = 0;
    var x = "somebody once told me";

    var get = function(){
	return i;
    };
    var set = function(n){
	i = n;
    };
    var inc = function(){
	i++;
    };
    var dec = function(){
	i--;
    };
    var getx = function(){
	return x;
    };
    var setx = function(s){
	x = s;
    };
    
    //means of accessing members
    return {
	x : x,
	get : get,
	set : set,
	inc : inc,
	dec : dec,
	getx : getx,
	setx : setx,
    };
};

var wat = makeCounter();
