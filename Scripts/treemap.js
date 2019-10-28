
am4core.useTheme(am4themes_animated);

var chart2 = am4core.create("chartdiv2", am4charts.TreeMap);
chart2.paddingRight = 20;



//Adding Data

var treedatamain ;
 $.getJSON("Data/State-wise-soil-type.json", function(data){
     //console.log('success');
     treedatamain = data;
     console.log(treedatamain);
     
    drawtree();
 });

function drawtree(){ 
  var treechartdata;
  for(var i =0; i<treedatamain.length; i++ ){
  if(!treedatamain[i].State.localeCompare(name))
  {
    console.log("successis at peak");
    treechartdata = treedatamain[i].Soil;
    treechartdata.pop();
    console.log(treechartdata);
  }
  else{ console.log('fail');}
  
} 



    chart2.data = treechartdata;

    chart2.dataFields.value = "area";
chart2.dataFields.name = "type";

//Defining the anatomy of chart2
var level1 = chart2.seriesTemplates.create("0");
var level1_column = level1.columns.template;
level1_column.column.cornerRadius(10, 10, 10, 10);
level1_column.fillOpacity = 0.8;
level1_column.stroke = am4core.color("#fff");
level1_column.strokeWidth = 5;
level1_column.strokeOpacity = 1;


  }