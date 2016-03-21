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

//Within each entry: data[0] = Trump, data[1] = Cruz, data[2] = Rubio, data[3] = Kasich
var repdata = {
    "Iowa":[7,8,7,1],
    "New Hampshire":[11,3,2,4],
    "South Carolina":[50,0,0,0], 
    "Nevada":[14,6,7,1], 
    "Alabama":[36,13,1,0], 
    "Alaska":[11,12,5,0], 
    "Arkansas":[16,14,9,0], 
    "Georgia":[40,18,14,0], 
    "Massachusetts":[22,4,8,8], 
    "Minnesota":[8,13,17,0], 
    "Oklahoma":[13,15,12,0], 
    "Tennesee":[33,16,9,0], 
    "Texas":[48,104,3,0], 
    "Vermont":[8,0,0,8], 
    "Virginia":[17,8,16,5], 
    "Kansas":[9,24,6,1], 
    "Kentucky":[17,15,7,7], 
    "Louisiana":[18,18,5,0], 
    "Maine":[9,12,0,2], 
    "Puerto Rico":[0,0,23,0], 
    "Hawaii":[11,7,1,0], 
    "Idaho":[12,20,0,0], 
    "Michigan":[25,17,0,17], 
    "Mississippi":[24,13,0,0], 
    "District of Columbia":[0,0,10,9], 
    "Wyoming":[1,9,1,0], 
    "Florida":[99,0,0,0], 
    "Illinois":[51,9,0,5], 
    "Missouri":[25,5,0,0], 
    "North Carolina":[29,27,6,9], 
    "Northern Mariana Islands":[9,0,0,0], 
    "Ohio":[0,0,0,66]
}
var states = Object.keys(repdata);
console.log(states);

var foo = d3.scale.linear()
    .domain([0,200])
    .range([0,1920]);

d3.select(".chart")
    .selectAll("div")
  .data(states)
    .enter().append("div")
  .style("width", function(d){
      var dies = repdata[d][0] + repdata[d][1] + repdata[d][2] + repdata[d][3];
      return foo(dies) + "px";
  })
  .text(function(d){
      return d;
  });



