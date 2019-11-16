am4core.useTheme(am4themes_animated);
var actualrain = am4core.create("actualrain", am4charts.XYChart);

actualrain.paddingRight = 20;
var actualraindata;

$.getJSON("Data/actualrain.json", function(data) {
  actualraindata = data;
  getlinedata();
});

function sorter(data) {
  var temp;
  for (var i = 0; i < data.length; i++) {
    if (!data[i].State.localeCompare(name)) {
      temp = data[i].actual;
      break;
    }
  }
  return temp;
}

function getlinedata() {
  var subdata;
  subdata = sorter(actualraindata);
  actualrain.invalidateData();
  actualrain.data = subdata;
}

drawline();

function drawline() {
  // actualrain.invalidateData();
  var categoryAxis = actualrain.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "year";
  categoryAxis.title.text = "Years";

  var valueAxis = actualrain.yAxes.push(new am4charts.ValueAxis());
  valueAxis.title.text = "Rainfall in mm";

  //   var series = actualrain.series.push(new am4charts.ColumnSeries());
  // series.name = "Sales";
  // series.columns.template.tooltipText = "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
  // series.columns.template.fill = am4core.color("skyblue"); // fill
  // series.dataFields.valueY = "litres";
  // series.dataFields.categoryX = "country";

  var series2 = actualrain.series.push(new am4charts.LineSeries());
  series2.name = "Units";
  series2.stroke = am4core.color("black");
  //series2.tooltipText = "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
  series2.tooltipText = "{valueY}";
  series2.strokeWidth = 3;
  series2.dataFields.valueY = "rain";
  series2.dataFields.categoryX = "year";

  actualrain.cursor = new am4charts.XYCursor();
  // actualrain.cursor.snapToSeries = series2;
  // actualrain.cursor.xAxis = dateAxis;

  // var circleBullet = series2.bullets.push(new am4charts.CircleBullet());
  // circleBullet.circle.stroke = am4core.color("#fff");
  // circleBullet.circle.strokeWidth = 2;
  // circleBullet.tooltipText = "Value: [bold]{valueY}[/]";

  // var data = [];
  // var visits = 10;
  // for (var i = 1; i < 366; i++) {
  //   visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
  //   data.push({ date: new Date(2018, 0, i), value: visits });
  // }

  // actualrain.data = data;

  // var dateAxis = actualrain.xAxes.push(new am4charts.DateAxis());
  // dateAxis.renderer.grid.template.location = 0;

  // var valueAxis = actualrain.yAxes.push(new am4charts.ValueAxis());
  // valueAxis.tooltip.disabled = true;
  // valueAxis.renderer.minWidth = 35;

  // var series = actualrain.series.push(new am4charts.LineSeries());
  // series.dataFields.dateX = "date";
  // series.dataFields.valueY = "value";
  // series.tooltipText = "{valueY}";
  // series.tooltip.pointerOrientation = "vertical";
  // series.tooltip.background.fillOpacity = 0.5;

  // actualrain.cursor = new am4charts.XYCursor();
  // actualrain.cursor.snapToSeries = series;
  // actualrain.cursor.xAxis = dateAxis;

  // var scrollbarX = new am4charts.XYChartScrollbar();
  // scrollbarX.series.push(series);
  // actualrain.scrollbarX = scrollbarX;
}

// Normal rain chart
var normalrain = am4core.create("normalrain", am4charts.XYChart);
normalrain.paddingRight = 20;
var normalraindata;

$.getJSON("Data/normalrain.json", function(data) {
  normalraindata = data;
  getline2data();
  // console.log(normalraindata);
});

function getline2data() {
  var subdata = sorter(normalraindata);
  normalrain.invalidateData();
  normalrain.data = subdata;
}

drawline2();

function drawline2() {
  // normalrain.invalidateData();
  var categoryAxis = normalrain.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "year";
  categoryAxis.title.text = "Years";

  var valueAxis = normalrain.yAxes.push(new am4charts.ValueAxis());
  valueAxis.title.text = "Normal Rainfall in mm";
  var series2 = normalrain.series.push(new am4charts.LineSeries());
  series2.name = "Units";
  series2.stroke = am4core.color("black");
  //series2.tooltipText = "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
  series2.tooltipText = "{valueY}";
  series2.strokeWidth = 3;
  series2.dataFields.valueY = "rain";
  series2.dataFields.categoryX = "year";

  normalrain.cursor = new am4charts.XYCursor();
  // normalrain.cursor.snapToSeries = series2;
  // normalrain.cursor.xAxis = dateAxis;

  // var circleBullet = series2.bullets.push(new am4charts.CircleBullet());
  // circleBullet.circle.stroke = am4core.color("#fff");
  // circleBullet.circle.strokeWidth = 2;
  // circleBullet.tooltipText = "Value: [bold]{valueY}[/]";
}
