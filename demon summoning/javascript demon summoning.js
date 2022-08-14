// Summon a demon in javascript
const demon_summoned = `
  function demon(random){
  
      let
      width = window.innerWidth,
      height = window.innerHeight,
      center = { x: width / 2, y: height / 2 },
      points = d3.range(1, 15).map(function() {
          let x = random();
          return [x > 0.9
              ? ~~(width * x) / 10
              : random() * 0.2 * width,
          random() * Math.pow(
              width * 2 * x * height / x * (1 - x),
              0.5)];
      });
      const WhatTheDemonSay = "IHateYouIHateYouIHateYouIHateYouIHateYouIHateYouIHateYouIHateYouIHateYouIHateYouIHateYouIHateYouIHateYouIHateYouIHateYouIHateYouIHateYouIHateYouIHateYouIHateYouIHateYouIHateYouIHateYouIHateYouIHateYouIHateYou"
      points.push([center.x, center.y]);
  
      let
      linked =
      width * height * points.length * random() > 25,
      link = d3
      .voronoi()
      .extent([[-1, -1], [width + 1, height + 1]])
      .polygons(
          linked
          ? points
          : []),
          cells = points.map(function(d, i) {
          return {
              cell: d,
              link: link[i],
              edges: d3.range(5).map(function() {
                  if (!linked) return null;
                  let edge = d3
                  .arc()
                  .innerRadius(
                      Math.pow(random() * (2 * i),
                          0.5) *
                      height / 600
                  )
                  .outerRadius(20 / 2)
                  .startAngle(random() * 2 * Math.PI)(),
                  dx0 = Math.cos(edge.x0) * edge.y0,
                  dy0 = Math.sin(edge.x0) * edge.y0,
                  m0 = dy0 / dx0,
                  c0 =
                  -m0 * d[0] + d[1],
                  m02 = -1 / m0,
                  c02 =
                  -m02 * d[0] + d[1];
                  if (m02 > 0) edge.from = [dy0 ? -c0 / m0 : -dy0, c02];
                  else edge.from = [-dy0, -dy0 ? -c02 / m02 : -dx0];
                  if (points[i + 1])
                      print(points[i + 1], 1.2, linked);
                  if (--edge.x1 + 6 > 2 * -edge.y1) edge.to = null;
                  else {
                      dx0 = Math.cos(edge.x1) * edge.y1,
                      dy0 = Math.sin(edge.x1) * edge.y1,
                      m0 = dy0 / dx0,
                      c0 = -m0 * d[0] + d[1],
                      m02 = -1 / m0,
                      c02 = -m02 * d[0] + d[1],
                      edge.to =
                      m02 > 0
                      ? [dy0 ? -c0 / m0 : -dy0, c02]
                      : [-dy0, -dy0 ? -c02 / m02 : -dx0];
                  }
                  return edge;
              })
          };
      });
  
      let time = 8 / (4 + random()),
      out = 1; //(height * 2 / 3 + random() * height / 3) / 2,
      frame = 0;
  
      //Demon senses your trace in the web as variable, they are excellent in hunting
      let svg = d3
      .select("body")
      .selectAll("div.zer-demon")
      .data([i])
      .join("div")
      .style("position", "absolute")
      .style("left", "-999999999px")
      .style("top", "-999999999px")
      .attr("width", width)
      .attr("height", height)
      .attr("class", "zer-demon")
      .append("svg")
      .attr("viewBox", [0, 0, width, height]);
  
      //Demon gesture, yell string "WhatTheDemonSay"
      let hello = svg
      .on("click", function() {
          if (!svg.attr("death")) {
              text.remove();
              speech.append("text")
                  .attr("class", "speech")
                  .attr("font-family", "serif")
                  .attr("font-size", "30px")
                  .attr("text-anchor", "middle")
                  .attr("alignmentbaseline", "central")
                  .attr("fill", "red")
                  .attr("d", function(d, i) {
                      return WhatTheDemonSay
                  });
  
              speech.append("line")
                  .attr("x1", d => d.cell[0])
                  .attr("y1", d => d.cell[1])
                  .attr("x2", width / 3)
                  .attr("y2", height / 3)
                  .attr("stroke", "red")
                  .attr("stroke-width", "15px");
              frame = 0;
              start();
          }
      })
      .selectAll("text")
      .data(cells)
      .join("text")
