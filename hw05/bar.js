console.log("hello, it's me");
/*
var data = [4,8,15,16,23,42];
var chart = d3.select(".chart");
var bar = chart.selectAll("div");
var barUpdate = bar.data(data);
var barEnter = barUpdate.enter().append("div");
barEnter.style("width", function(d){ return d*10 + "px"; });
barEnter.text(function(d){ return d; });

d3.select(".chart")
    .selectAll("div")
    .data(data)
    .enter().append("div")
    .style("width", function(d) {
	return d*10 + "px"; })
    .text(function(d) { 
	return d; 
    });
*/

//Within each entry: data[1] = Trump, data[2] = Cruz, data[3] = Rubio, data[4] = Kasich
var repdata = [
    {state:"Iowa", data:[7,8,7,1]},
    {state:"New Hampshire", data:[11,3,2,4]}, 
    {state:"South Carolina", data:[50,0,0,0]}, 
    {state:"Nevada", data:[14,6,7,1]}, 
    {state:"Alabama", data:[36,13,1,0]}, 
    {state:"Alaska", data:[11,12,5,0]}, 
    {state:"Arkansas", data:[16,14,9,0]}, 
    {state:"Georgia", data:[40,18,14,0]}, 
    {state:"Massachusetts", data:[22,4,8,8]}, 
    {state:"Minnesota", data:[8,13,17,0]}, 
    {state:"Oklahoma", data:[13,15,12,0]}, 
    {state:"Tennesee", data:[33,16,9,0]}, 
    {state:"Texas", data:[48,104,3,0]}, 
    {state:"Vermont", data:[8,0,0,8]}, 
    {state:"Virginia", data:[17,8,16,5]}, 
    {state:"Kansas", data:[9,24,6,1]}, 
    {state:"Kentucky", data:[17,15,7,7]}, 
    {state:"Louisiana", data:[18,18,5,0]}, 
    {state:"Maine", data:[9,12,0,2]}, 
    {state:"Puerto Rico", data:[0,0,23,0]}, 
    {state:"Hawaii", data:[11,7,1,0]}, 
    {state:"Idaho", data:[12,20,0,0]}, 
    {state:"Michigan", data:[25,17,0,17]}, 
    {state:"Mississippi", data:[24,13,0,0]}, 
    {state:"District of Columbia", data:[0,0,10,9]}, 
    {state:"Wyoming", data:[1,9,1,0]}, 
    {state:"Florida", data:[99,0,0,0]}, 
    {state:"Illinois", data:[51,9,0,5]}, 
    {state:"Missouri", data:[25,5,0,0]}, 
    {state:"North Carolina", data:[29,27,6,9]}, 
    {state:"Northern Mariana Islands", data:[9,0,0,0]}, 
    {state:"Ohio", data:[0,0,0,66]}, 
    {state:"Superdelegates", data:[0,1,0,0]}
]

var chart = d3.select("chart");
var bar = chart.selectAll("div");
var barUpdate = bar.data(repdata, function(d){
    return d.state;
});
var barEnter = barUpdate.enter().append("div");

var foo = d3.scale.linear()
    .domain([0,d3.max(repdata)])
    .range([0,1920]);
barEnter.style("width",function(d){
    return foo(d) + "px";
});
console.log(barEnter);


