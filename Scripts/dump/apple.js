var normalrain = am4core.create("normalrain", am4charts.XYChart);
normalrain.paddingRight = 20;
var maindata2;

$.getJSON("Data/normalrain.json", function (data) {
  maindata2 = data;
  getline2data();
  console.log(maindata2);

});


function getline2data() {
  var subdata;
  for (var i = 0; i < maindata2.length; i++) {
    if (!maindata2[i].State.localeCompare(name)) {
      // console.log("successis at peak");
      subdata = maindata2[i].actual;
      console.log(subdata);
    } else {
      console.log('fail');
    }
  }
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
  valueAxis.title.text = "Rainfall in mm";
console.log("apple");
  //   var series = normalrain.series.push(new am4charts.ColumnSeries());
  // series.name = "Sales";
  // series.columns.template.tooltipText = "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
  // series.columns.template.fill = am4core.color("skyblue"); // fill
  // series.dataFields.valueY = "litres";
  // series.dataFields.categoryX = "country";

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


  // var data = [];
  // var visits = 10;
  // for (var i = 1; i < 366; i++) {
  //   visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
  //   data.push({ date: new Date(2018, 0, i), value: visits });
  // }

  // normalrain.data = data;

  // var dateAxis = normalrain.xAxes.push(new am4charts.DateAxis());
  // dateAxis.renderer.grid.template.location = 0;

  // var valueAxis = normalrain.yAxes.push(new am4charts.ValueAxis());
  // valueAxis.tooltip.disabled = true;
  // valueAxis.renderer.minWidth = 35;

  // var series = normalrain.series.push(new am4charts.LineSeries());
  // series.dataFields.dateX = "date";
  // series.dataFields.valueY = "value";
  // series.tooltipText = "{valueY}";
  // series.tooltip.pointerOrientation = "vertical";
  // series.tooltip.background.fillOpacity = 0.5;

  // normalrain.cursor = new am4charts.XYCursor();
  // normalrain.cursor.snapToSeries = series;
  // normalrain.cursor.xAxis = dateAxis;

  // var scrollbarX = new am4charts.XYChartScrollbar();
  // scrollbarX.series.push(series);
  // normalrain.scrollbarX = scrollbarX;

}