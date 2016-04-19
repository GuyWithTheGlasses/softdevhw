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
