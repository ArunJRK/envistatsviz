am4core.useTheme(am4themes_animated);
var actualrain = am4core.create("actualrain", am4charts.XYChart);
actualrain.legend = new am4charts.Legend();

actualrain.paddingRight = 20;
var actualraindata;

$.getJSON("Data/raindata.json", function(data) {
  actualraindata = data;
  getlinedata();
});

function sorter(data) {
  var temp;
  for (var i = 0; i < data.length; i++) {
    if (!data[i].State.localeCompare(name)) {
      temp = data[i].Data;
      break;
    }
  }
  return temp;
}

function getlinedata() {
  actualrain.invalidateData();
  actualrain.data = sorter(actualraindata);
}

drawline();

function drawline() {
  // actualrain.invalidateData();
  actualrain.zoomable=false;
  actualrain.homeText = "Actual and normal rainfall";
  var categoryAxis = actualrain.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "Year";
  categoryAxis.title.text = "Years";
console.log("apple");
  var valueAxis = actualrain.yAxes.push(new am4charts.ValueAxis());
  valueAxis.title.text = "Rainfall in mm";

  //   var series = actualrain.series.push(new am4charts.ColumnSeries());
  // series.name = "Sales";
  // series.columns.template.tooltipText = "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
  // series.columns.template.fill = am4core.color("skyblue"); // fill
  // series.dataFields.valueY = "litres";
  // series.dataFields.categoryX = "country";

  var series1 = actualrain.series.push(new am4charts.LineSeries());
  series1.name = "Actual Rain";
  series1.stroke = am4core.color("black");
  //series1.tooltipText = "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
  series1.tooltipText = "{valueY}";
  series1.strokeWidth = 3;
  series1.dataFields.valueY = "Actual";
  series1.dataFields.categoryX = "Year";

  var series2 = actualrain.series.push(new am4charts.LineSeries());
  series2.name = "Normal Rain";
  series2.stroke = am4core.color("blue");
  //series2.tooltipText = "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
  series2.tooltipText = "{valueY}";
  series2.strokeWidth = 3;
  series2.dataFields.valueY = "Normal";
  series2.dataFields.categoryX = "Year";


  actualrain.cursor = new am4charts.XYCursor();
  actualrain.cursor.snapToSeries = series1;
  // actualrain.cursor.xAxis = dateAxis;

  // var circleBullet = series1.bullets.push(new am4charts.CircleBullet());
  // circleBullet.circle.stroke = am4core.color("#fff");
  // circleBullet.circle.strokeWidth = 2;
  // circleBullet.tooltipText = "Value: [bold]{valueY}[/]";



  // var dateAxis = actualrain.xAxes.push(new am4charts.DateAxis());
  // dateAxis.renderer.grid.template.location = 0;

  // var valueAxis = actualrain.yAxes.push(new am4charts.ValueAxis());
  // valueAxis.tooltip.disabled = true;
  // valueAxis.renderer.minWidth = 35;



 

  // var scrollbarX = new am4charts.XYChartScrollbar();
  // scrollbarX.series.push(series);
  // actualrain.scrollbarX = scrollbarX;
}