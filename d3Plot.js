var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

/*
 * value accessor - returns the value to encode for a given data object.
 * scale - maps value to a visual display encoding, such as a pixel position.
 * map function - maps from data value to display value
 * axis - sets up axis
 */

var time = 76
var opacities = {
  "Cell-1":1,
  "Cell-2":1,
  "Cell-3":1,
  "Cell-4":1,
  "Cell-5":1
}

// setup x
var xValue = function(d) { return d["Calcium"];}, // data -> value
    xScale = d3.scale.linear().range([0, width-50]), // value -> display
    xMap = function(d) { return xScale(xValue(d));}, // data -> display
    xAxis = d3.svg.axis().scale(xScale).orient("bottom");

// setup y
var yValue = function(d) { return d["Voltage"];}, // data -> value
    yScale = d3.scale.linear().range([height, 0]), // value -> display
    yMap = function(d) { return yScale(yValue(d));}, // data -> display
    yAxis = d3.svg.axis().scale(yScale).orient("left");

// setup fill color
var cValue = function(d) {
  return d.Cell+"-"+d.Protein;
}

var color = d3.scale.category20c();

// add the graph canvas to the body of the webpage
var svg = d3.select("#plot").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// add the tooltip area to the webpage
var tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

// function shapeFromData(d) {
//   console.log(d)
//   return d3.svg.symbol().type("circle")
// }

// load data
d3.csv("data/allCells.csv", function(error, data) {

  // change string (from CSV) into number format
  data.forEach(function(d, i) {
    d["Calcium"] = +d["Calcium"];
    d["Voltage"] = +d["Voltage"];
    d["Time"] = +d["Time"];
    d["LFP"] = +d["LFP"];
    // console.log(i, d);
  });

  console.log("data", data)

  // don't want dots overlapping axis, so add in buffer to data domain
  xScale.domain([d3.min(data, xValue)-.1, d3.max(data, xValue)+.1]);
  yScale.domain([d3.min(data, yValue)-.5, d3.max(data, yValue)+.5]);

  // x-axis
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .append("text")
      .attr("class", "label")
      .attr("x", width-50)
      .attr("y", -6)
      .style("text-anchor", "end")
      .text("Calcium");

  // y-axis
  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("class", "label")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Voltage");


  // draw dots
  svg.selectAll(".dot")
      .data(data)
    .enter().append("path")
      .attr("id", function(d) { return "dot-"+d["Time"]+d['Cell']})
      // .attr("class", function(d) { return "dot-"+d['Cell']})
        .attr("d", d3.svg.symbol()
        .type(function(d) { if (d.Gene=="N") { return "square" } else { return "circle" } })
        .size(function(d) { return d.LFP*10 }))
      .attr("transform", function(d) { return "translate(" + xMap(d) + "," + yMap(d) + ")"; })
      .style("fill", function(d) { return color(cValue(d));})
      .on("mouseover", function(d) {
        if (d["Time"] < time) {
          tooltip.transition()
               .duration(200)
               .style("opacity", .9);
          tooltip.html("Time: " + d["Time"] +  "<br/> Voltage: " + d["Voltage"] +  "<br/> Calcium: " + d["Calcium"] + "<br/> LFP: " + d["LFP"] + "<br/> Protein: " + d["Protein"] + "<br/> Gene: " + d["Gene"])
               .style("left", (d3.event.pageX + 5) + "px")
               .style("top", (d3.event.pageY - 28) + "px");
        }
      })
      .on("mouseout", function(d) {
          tooltip.transition()
               .duration(500)
               .style("opacity", 0);
      });

  // draw legend
  var legend = svg.selectAll(".legend")
      .data(color.domain())
    .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  // draw legend colored rectangles
  legend.append("rect")
      .attr("x", width - 30)
      .attr("width", 18)
      .attr("height", 18)
      .attr("class", function(d, i) {
        if ((i+1)%4==0) {
          return "hidden"
        }
        return null
      })
      .style("fill", color);

  // draw legend text
  legend.append("text")
      .attr("x", width - 36)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .attr("class", function(d, i) {
        if ((i+1)%4==0) {
          return "hidden"
        }
        return null
      })
      .text(function(d, i) {
        if ((i+1)%4==1) { return "H" }
        if ((i+1)%4==2) { return "M" }
        if ((i+1)%4==3) { return "L" }
      });

  // draw legend cell #
  legend.append("text")
      .attr("x", width + 20)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .attr("class", function(d, i) {
        if ((i+1)%4==0) {
          return "hidden"
        }
        return null
      })
      .text(function(d, i) {
        if ((i+1)%4==2) { return "Cell "+(parseInt(i/4)+1) }
      });
});

function updatePlot() {

  // load data
  d3.csv("data/allCells.csv", function(error, data) {

    var svg = d3.select("#plot").transition();

    data.forEach(function(d, i) {
      if (d["Time"] < time) {
        svg.select('[id="dot-'+d['Time']+d['Cell']+'"]').style("opacity", opacities[d['Cell']]);
      } else {
        svg.select('[id="dot-'+d['Time']+d['Cell']+'"]').style("opacity", 0);
      }
    });

  });
}

/* Simple, reusable slider in pure d3 */

function simpleSlider (sliderColor) {

    var width = 100,
        value = 0.5, /* Domain assumes to be [0 - 1] */
        event,
        x = 0,
        y = 0;

    function slider (selection) {

        //Line to represent the current value
        var valueLine = selection.append("line")
            .attr("x1", x)
            .attr("x2", x + (width * value))
            .attr("y1", y)
            .attr("y2", y)
            .style({stroke: sliderColor,
                    "stroke-linecap": "round",
                    "stroke-width": 6 });

        //Line to show the remaining value
        var emptyLine = selection.append("line")
            .attr("x1", x + (width * value))
            .attr("x2", x + width)
            .attr("y1", y)
            .attr("y2", y)
            .style({
                "stroke": "#ECECEC",
                "stroke-linecap": "round",
                "stroke-width": 6
            });

        var drag = d3.behavior.drag().on("drag", function() {
            var newX = d3.mouse(this)[0];

            if (newX < x)
                newX = x;
            else if (newX > x + width)
                newX = x + width;

            value = (newX - x) / width;
            valueCircle.attr("cx", newX);
            valueLine.attr("x2", x + (width * value));
            emptyLine.attr("x1", x + (width * value));

            if (event)
                event();

            d3.event.sourceEvent.stopPropagation();
        })

        //Draggable circle to represent the current value
        var valueCircle = selection.append("circle")
            .attr("cx", x + (width * value))
            .attr("cy", y)
            .attr("r", 8)
            .style({
                "stroke": "black",
                "stroke-width": 1.0,
                "fill": "white"
            })
            .call(drag);
    }


    slider.x = function (val) {
        x = val;
        return slider;
    }

    slider.y = function (val) {
        y = val;
        return slider;
    }

    slider.value = function (val) {
        if (val) {
            value = val;
            return slider;
        } else {
            return value;
        }
    }

    slider.width = function (val) {
        width = val;
        return slider;
    }

    slider.event = function (val) {
        event = val;
        return slider;
    }

    return slider;
}

d3.select('#slider1')
  .call(
    d3.slider()
      .axis(true)
      .min(0)
      .max(76)
      .on("slide", function(evt, value) {
        time = value
        updatePlot()
  }));

function cellSlider (cell, sliderColor) {
  var slider1 = new simpleSlider(sliderColor);
  slider1.width(200).x(30).y(50).value(1.0).event(function(){
    opacities[cell] = slider1.value();
    updatePlot()
  });
  return slider1
}

d3.select("#cells").append("svg").attr("width", 300).attr("height", 77).call(cellSlider('Cell-1', "#52afd1"));
d3.select("#cells").append("svg").attr("width", 300).attr("height", 77).call(cellSlider('Cell-2', "#ff8c4a"));
d3.select("#cells").append("svg").attr("width", 300).attr("height", 77).call(cellSlider('Cell-3', "#65c27e"));
d3.select("#cells").append("svg").attr("width", 300).attr("height", 77).call(cellSlider('Cell-4', "#9c9bc4"));
d3.select("#cells").append("svg").attr("width", 300).attr("height", 77).call(cellSlider('Cell-5', "#949494"));
