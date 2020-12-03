var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

var svgWidth = 500,
  svgHeight = 300,
  barPadding = 5;
var barWidth = svgWidth / dataset.length;

var svg = d3.select("svg").attr("width", svgWidth).attr("height", svgHeight);

var barChart = svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("y", (d) => {
    return svgHeight - d;
  })
  .attr("height", (d) => {
    return d;
  })
  .attr("width", barWidth - barPadding)
  .attr("class", "bar")
  .attr("transform", (d, i) => {
    var translate = [barWidth * i, 0];
    return "translate(" + translate + ")";
  });

var text = svg
  .selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text((d) => {
    return d;
  })
  .attr("y", (d, i) => {
    return svgHeight - d - 2;
  })
  .attr("x", (d, i) => {
    return barWidth * i;
  })
  .attr("fill", "blue");
