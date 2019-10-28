
am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);
chart.paddingRight = 20;



//Adding Data

var google ;
 $.getJSON("Data/rainactual.json", function(data){
     //console.log('success');
     google = data;
     console.log(google);
     
    draw();
 });

function draw(){ 
  var soft;
  for(var i =0; i<google.length; i++ ){
  if(!google[i].State.localeCompare("Odisha")){
    console.log("successis at peak");
    soft = google[i].actual;
    console.log(soft);
  }
  else{ console.log('fail');}
}



// var apple = [{
//     "East Uttar Pradesh": {
//       "2013": 1042.1,
//       "2014": 701.4,
//       "2015": 603.6,
//       "2016": 871.7,
//       "2017": 650,
//       "2018": 758
//     },
//     "Odisha": {
//       "2013": 1632.4,
//       "2014": 1536.9,
//       "2015": 1210.1,
//       "2016": 1253.5,
//       "2017": 1053.1,
//       "2018": 1290.2
//     }}];

   // console.log(apple);

    chart.data = soft;
// chart.data = [{
//     "country": "Lithuania",
//     "litres": 501
//   }, {
//     "country": "Czechia",
//     "litres": 301
//   }, {
//     "country": "Ireland",
//     "litres": 201
//   }, {
//     "country": "Germany",
//     "litres": 165
//   }, {
//     "country": "Australia",
//     "litres": 139
//   }, {
//     "country": "Austria",
//     "litres": 128
//   }, {
//     "country": "UK",
//     "litres": 99
//   }, {
//     "country": "Belgium",
//     "litres": 60
//   }, {
//     "country": "The Netherlands",
//     "litres": 50
//   }];

  

  var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "year";
  categoryAxis.title.text = "Countries";
  
  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.title.text = "Litres sold (M)";

//   var series = chart.series.push(new am4charts.ColumnSeries());
// series.name = "Sales";
// series.columns.template.tooltipText = "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
// series.columns.template.fill = am4core.color("skyblue"); // fill
// series.dataFields.valueY = "litres";
// series.dataFields.categoryX = "country";

var series2 = chart.series.push(new am4charts.LineSeries());
series2.name = "Units";
series2.stroke = am4core.color("black");
//series2.tooltipText = "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
series2.tooltipText = "{valueY}";
series2.strokeWidth = 3;
series2.dataFields.valueY = "rain";
series2.dataFields.categoryX = "year";

chart.cursor = new am4charts.XYCursor();
// chart.cursor.snapToSeries = series2;
// chart.cursor.xAxis = dateAxis;

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

// chart.data = data;

// var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
// dateAxis.renderer.grid.template.location = 0;

// var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
// valueAxis.tooltip.disabled = true;
// valueAxis.renderer.minWidth = 35;

// var series = chart.series.push(new am4charts.LineSeries());
// series.dataFields.dateX = "date";
// series.dataFields.valueY = "value";
// series.tooltipText = "{valueY}";
// series.tooltip.pointerOrientation = "vertical";
// series.tooltip.background.fillOpacity = 0.5;

// chart.cursor = new am4charts.XYCursor();
// chart.cursor.snapToSeries = series;
// chart.cursor.xAxis = dateAxis;

// var scrollbarX = new am4charts.XYChartScrollbar();
// scrollbarX.series.push(series);
// chart.scrollbarX = scrollbarX;
  }