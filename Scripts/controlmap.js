var map = am4core.create("map", am4maps.MapChart);

map.Geodata = am4geodata_indiaHigh;
map.geodataSource.url = "Data/map/indiaLow.json";
map.projection = new am4maps.projections.Mercator();

var polygonSeries = new am4maps.MapPolygonSeries();
polygonSeries.useGeodata = true;
map.series.push(polygonSeries);

var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = am4core.color("#d0d0d0");

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("skyblue");

map.seriesContainer.draggable = false;
map.seriesContainer.resizable = false;
map.seriesContainer.events.disableType("doublehit");
map.chartContainer.background.events.disableType("doublehit");

map.maxZoomLevel = 1;

//polygonTemplate.events.
polygonTemplate.events.on(
  "hit",
  function(ev) {
    //console.log("clicked on ", ev.target.dataItem.dataContext.name);
    name = ev.target.dataItem.dataContext.name;
    console.log(name);
    drawtree();
    drawtree2();
    getlinedata();
    getline2data();
    treedata3();
    $("#Heading")
      .empty()
      .html(name);
   // console.log("here");
    //document.getElementById('chartdiv').innerHTML="";

    // $("chartdiv").append("<strong>Rainfall</strong>");
    //console.log('emptied');
    //draw();
  },
  this
);

// polygonSeries.MapPolygonSeries.template.events.on("hit", function(ev) {
//     console.log("clicked on ", ev.target);
//    }, this);
