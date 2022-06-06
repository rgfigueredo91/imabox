var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
    height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var svg = d3.select("body")
    .append("svg")
    .style("cursor", "move");
svg.attr("viewBox", "50 10 " + width + " " + height)
    .attr("preserveAspectRatio", "xMinYMin");
var zoom = d3.zoom()
    .on("zoom", function () {
        var transform = d3.zoomTransform(this);
        map.attr("transform", transform);
    });

svg.call(zoom);
var map = svg.append("g")
    .attr("class", "map");
d3.queue()
    .defer(d3.json, "src/50m.json")
    .defer(d3.json, "src/population.json")
    .await(function (error, world, data) {
        if (error) {
            console.error('Oh dear, something went wrong: ' + error);
        }
        else {
            drawMap(world, data);
        }
    });
function drawMap(world, data) {
    // geoMercator projection
    var projection = d3.geoMercator() //d3.geoOrthographic()
        .scale(130)
        .translate([width / 2, height / 1.5]);
    // geoPath projection
    var path = d3.geoPath().projection(projection);
    console.log(path)
    let paises = topojson.feature(world, world.objects.countries).features;
    console.log(paises)
    map.append("g")
        .selectAll("path")
        .data(paises)
        .enter().append("path")
        .attr("id", function (d) {
            return d.id;
        })
        .attr("d", path)
        .on('mouseover', function (d) {
            d3.select(this)
                .style("stroke", "white")
                .style("stroke-width", 1)
                .style("cursor", "pointer")
            d3.select(".country")
                .text(d.properties.name);
            d3.select('.details')
                .style('visibility', "visible")       
        })
        .on('mouseout', function (d) {
            d3.select(this)
                .style("stroke", null)
                .style("stroke-width", 0.25)
            d3.select('.details')
                .style('visibility', "hidden");
        });
        let array = ["#ARG", "#RUS", "#AUT", "#BEL", "#BRA", "#CHN", "#COL", "#HRV", "#CZE", "#DNK", "#EST", "#FIN", 
        "#FRA", "#DEU", "#GRC", "#HKG", "#HUN", "#ITA", "#JPN", "#KOR", "#MYS", "#MEX", "#NLD", "#NOR", "#PR1", "#SGP", "#SWE", "#CHE", 
        "#THA", "#TUR", "#GBR", "#USA", "#URY", "#VNM", "#POL", "#ESP"];
        for (let x = 0; x <= array.length;x++){
            console.log(array[x])
            d3.select(array[x])
                 .style("fill", "#ff0066")
                     
        }
        }