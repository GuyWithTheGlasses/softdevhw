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
    "Alabama":50, 
    "Alaska":28, 
    "Arizona":0.059,
    "Arkansas":39, 
    "California":0.172,
    "Connecticut":0.028,
    "Delaware":0.016,
    "District of Columbia":19,
    "Florida":99, 
    "Georgia":72, 
    "Hawaii":19, 
    "Idaho":32, 
    "Illinois":65,
    "Indiana":0.057, 
    "Iowa":23,
    "Kansas":40, 
    "Kentucky":46, 
    "Louisiana":41, 
    "Maine":23, 
    "Maryland":0.038,
    "Massachusetts":42, 
    "Michigan":59, 
    "Minnesota":38, 
    "Mississippi":37, 
    "Missouri":30, 
    "Montana":0.027,
    "Nebraska":0.036,
    "Nevada":28, 
    "New Hampshire":20,
    "New Jersey":0.051,
    "New Mexico":0.024,
    "New York":0.095,
    "North Carolina":71, 
    "North Dakota":0.028,
    "Northern Mariana Islands":9, 
    "Ohio":66,
    "Oklahoma":40, 
    "Oregon":0.028,
    "Pennsylvania":0.071,
    "Puerto Rico":23, 
    "Rhode Island":0.019,
    "South Carolina":50,
    "South Dakota":0.029
    "Tennesee":58, 
    "Texas":155, 
    "Utah":0.040,
    "Vermont":16, 
    "Virginia":46, 
    "Washington":0.044,
    "West Virginia":0.034,
    "Wisconsin":0.042,
    "Wyoming":11, 
}
var states = Object.keys(repdata);
console.log(states);



var foo = d3.scale.linear()
    .domain([0,250])
    .range([0,1920]);

d3.select(".chart")
    .selectAll("div")
  .data(states)
    .enter().append("div").transition()
  .style("background-color", function(d){
      var dels = repdata[d];
      if(dels < 1){
	  repdata[d] = dels*1000;
	  return "#ff9999";
      }
  })
  .style("width", function(d){
      var dies = repdata[d];
      return foo(dies) + "px";
  })
  .text(function(d){
      return d + ": " + repdata[d];
  });




