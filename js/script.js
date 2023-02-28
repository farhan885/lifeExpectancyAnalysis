function main()
{
     // set the dimensions and margins of the graph
     var margin = {top: 10, right: 30, bottom: 40, left: 50},
     width = 800 - margin.left - margin.right,
     height = 620 - margin.top - margin.bottom;
 
 // append the svg object to the body of the page
 var svg = d3.select("#my_dataviz")
   .append("svg")
     .attr("width", width + margin.left + margin.right)
     .attr("height", height + margin.top + margin.bottom)
   .append("g")
     .attr("transform",
           "translate(" + margin.left + "," + margin.top + ")")
 
 // Add the grey background that makes ggplot2 famous
 svg
   .append("rect")
     .attr("x",0)
     .attr("y",0)
     .attr("height", height)
     .attr("width", height)
     .attr("fill", "white");
     //.style("fill", "")
 
 //Read the data
 d3.csv("./data/ScatterPlot_2015.csv", function(data) {
 
  data.forEach(function(d) {
    debugger;
    d.LifeExp=parseInt(d.LifeExp);
    d.GDP=parseInt(d.GDP);
    
   
  });
  // Step 3
  var svg = d3.select("svg"),
  margin = 200,
  width = svg.attr("width") - margin, //300
  height = svg.attr("height") - margin //200

// Step 4 
var xScale = d3.scaleLinear().domain([0, 90]).range([0, width]),
  yScale = d3.scaleLinear().domain([0, 66347]).range([height, 0]);
  
var g = svg.append("g")
  .attr("transform", "translate(" + 100 + "," + 100 + ")");

// Step 5
// Title
svg.append('text')
.attr('x', width/2 + 100)
.attr('y', 100)
.attr('text-anchor', 'middle')
.style('font-family', 'Helvetica')
.style('font-size', 20)
.text('Scatter Plot');

// X label
svg.append('text')
.attr('x', width/2 + 100)
.attr('y', height - 15 + 150)
.attr('text-anchor', 'middle')
.style('font-family', 'Helvetica')
.style('font-size', 12)
.text('LIFE EXPECTANCY');

// Y label
svg.append('text')
.attr('text-anchor', 'middle')
.attr('transform', 'translate(60,' + height + ')rotate(-90)')
.style('font-family', 'Helvetica')
.style('font-size', 12)
.text('GDP');

// Step 6
g.append("g")
.attr("transform", "translate(0," + height + ")")
.call(d3.axisBottom(xScale));

g.append("g")
.call(d3.axisLeft(yScale));

// Step 7
svg.append('g')
.selectAll("dot")
.data(data)
.enter()
.append("circle")
.attr("cx", function (d) { return xScale(d.LifeExp); } )
.attr("cy", function (d) { return yScale(d.GDP); } )
.attr("r", 2)
.attr("transform", "translate(" + 100 + "," + 100 + ")")
.style("fill", "#CC0000")
.on("mouseover", showCountry );

    

 }
//   //  // Add X axis
//   //  var x = d3.scaleLinear()
//   //    .domain([0, 90])
//   //    .range([ 0, width ])
//   //  svg.append("g")
//   //    .attr("transform", "translate(0," + height + ")")
//   //    .call(d3.axisBottom(x).tickSize(-height*1.3).ticks(10))
//   //    .select(".domain").remove()
 
//   //  // Add Y axis
//   //  var y = d3.scaleLinear()
//   //    .domain([0, 66347])
//   //    .range([ height, 0])
//   //    .attr("color", "red")
     
//   var xScale = d3.scaleLinear().domain([0, 90]).range([0, width]),
//   yScale = d3.scaleLinear().domain([0, 66347]).range([height, 0]);
  
//   g.append("g")
//   .attr("transform", "translate(0," + height + ")")
//   .call(d3.axisBottom(xScale));
 
//  g.append("g")
//   .call(d3.axisLeft(yScale));


//    //svg.append("g")
//     // .call(d3.axisLeft(y).tickSize(-width*1.3).ticks(7))
//      //.select(".domain").remove()
 
//    // Customization
//    //svg.selectAll(".tick line").attr("stroke", "white")
 
//    // Add X axis label:
//    svg.append("text")
//        .attr("text-anchor", "end")
//        .attr("x", width/2 + margin.left)
//        .attr("y", height + margin.top + 20)
//        .text("Life Expentency");
 
//    // Y axis label:
//    svg.append("text")
//        .attr("text-anchor", "end")
//        .attr("transform", "rotate(-90)")
//        .attr("y", -margin.left + 20)
//        .attr("x", -margin.top - height/2 + 20)
//        .text("GDP")
 
 
 
//    // Add dots
//   //  svg.append('g')
//   //    .selectAll("dot")
//   //    .data(data)
//   //    .enter()
//   //    .append("circle")
//   //      .attr("cx", function (d) { return x(d.LifeExp); } )
//   //      .attr("cy", function (d) { return y(d.GDP); } )
//   //      .attr("r", 5)
//   //     .style("fill", "#69b3a2")
//   //     .on("mouseover", showCountry )

//       svg.append('g')
//       .selectAll("dot")
//       .data(dataset1)
//       .enter()
//       .append("circle")
//       .attr("cx", function (d) { return x(d.LifeExp); } )
//       .attr("cy", function (d) { return y(d.GDP); } )
//       .attr("r", 5)
//      .style("fill", "#69b3a2")
     
//       .attr("transform", "translate(" + 100 + "," + 100 + ")")
//       .on("mouseover", showCountry )
    
 
//  })
   
 



// function main(){
//     // d3.select('body').insert('p').text('I am from paragraph p');
//     // d3.select("p").attr("class", "error");
//     // d3.select("#abc").style("color", "red")

//     // var dataa = ['A1', 'A2', 'A3', 'A4']
    
//     // d3.select('body')
//     //     .selectAll('p')
//     //     .data(dataa)
//     //     .text(function(d, i){
//     //         console.log("d: " + d);
//     //         console.log("i: " + i);
//     //         return "Data point: "+i+" is "+d;
//     //     });

//     // d3.csv("../Life_Expectancy_Data.csv", d3.autoType).then(
//     //     function (d){
//     //         for(let index = 0; index < d.length; index++){
//     //             const element = d[index];
//     //             d3.select('body').selectAll('p')
//     //                 .data(d)
//     //                 .enter()
//     //                 .append('p')
//     //                 .text(function(d){
//     //                     return d.Country + ", " + d.Year + ", " + d.Status;
//     //                 });
//     //             console.log(element.Year);
//     //             console.log(element.Status);
//     //         }
//     //     }
//     // )

    
// // set the dimensions and margins of the graph
// var margin = {top: 10, right: 30, bottom: 30, left: 60},
// width = 560 - margin.left - margin.right,
// height = 400 - margin.top - margin.bottom;

// // append the svg object to the body of the page
// var svg = d3.select("#my_dataviz")
// .append("svg")
// .attr("width", width + margin.left + margin.right)
// .attr("height", height + margin.top + margin.bottom)
// .append("g")
// .attr("transform",
//       "translate(" + margin.left + "," + margin.top + ")");

// //Read the data
// d3.csv("./ScatterPlot_2015.csv", d3.autoType, function(dataArr) {
//   debugger;
// var gdp = dataArr.GDP
// var countries = dataArr.Country
// var lifeExpt = dataArr.Life_expectancy
// console.log(gdp)
// console.log(countries)
// console.log(lifeExpt)

// // Add X axis
// var x = d3.scaleLinear()
// .domain([0, 16000])
// .range([ 0, width ]);
// svg.append("g")
// .attr("transform", "translate(0," + height + ")")
// .call(d3.axisBottom(x));

// // Add Y axis
// var y = d3.scaleLinear()
// .domain([2000, 2016])
// .range([ height, 0]);
// svg.append("g")
// .call(d3.axisLeft(y));

// // Add dots
// svg.append('g')
// .selectAll("dot")
// .data(dataArr)
// .enter()
// .append("circle")
//   .attr("cx", function (d) { return x(d.GDP); } )
//   .attr("cy", function (d) { return y(d.Year); } )
//   .attr("r", 1.5)
//   .style("fill", "#red")

// })
// }



 )};
 var showCountry = function(d) {
 
var Title="Country: "+d.Country + "\n" + "GDP: "+d.GDP + "\n" + "Life Expectancy: "+d.LifeExp;
 alert(Title);
    
    }