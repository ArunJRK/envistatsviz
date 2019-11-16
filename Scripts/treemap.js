var soiltype = am4core.create("soiltype", am4charts.TreeMap);
soiltype.paddingRight = 20;

var colors = {
              red: "red",
              black: "black",
              alluvial: "brown",
              laterite: "light brown"
            };

            //Adding Data

var soilmaindata;
$.getJSON("Data/State-wise-soil-type.json", function(data) {
  ////console.log('success');
  soilmaindata = data;
  //console.log(soilmaindata);

  drawtree();
});

function sort(data, d){
  var temp;
   var sorter= [];
   for (var i = 0; i < data.length; i++) {
    if (!data[i].State.localeCompare(name)) {
      temp  = data[i].Data;
      for (var j= 0;  j<temp.length-d; j++){
      sorter.push(temp[j])
      }
      break;
    } 
  }
  console.log(sorter);
  return sorter;
}

function drawtree() {
  var soilchartdata = sort(soilmaindata,1);
  soiltype.data = soilchartdata;
  soiltype.dataFields.value = "area";
  soiltype.dataFields.name = "type";

  //Defining the anatomy of soiltype
  var level1 = soiltype.seriesTemplates.create("0");
  var level1_column = level1.columns.template;
  level1_column.column.cornerRadius(10, 10, 10, 10);
  level1_column.fillOpacity = 0.8;
  level1_column.stroke = am4core.color("#fff");
  level1_column.strokeWidth = 5;
  level1_column.strokeOpacity = 1;
  soilchartdata = [];
  console.log(soilchartdata);
}

//Chart 2

var degradedland = am4core.create("degradedland", am4charts.TreeMap);
degradedland.paddingRight = 20;

//Adding Data

var degradeglanddata;
$.getJSON("Data/sw-degradedland.json", function(data) {
 // console.log('loaded degraded data');
  degradeglanddata = data;
//  console.log(degradeglanddata);
  drawtree2();
});

function drawtree2() {
  var treechartdata = [];
  var deletion = 2;
  treechartdata = sort(degradeglanddata, deletion);
  degradedland.data = treechartdata;

  degradedland.dataFields.value = "Totaldegradedarea";
  degradedland.dataFields.name = "District";

  //Defining the anatomy of soiltype
  var level1 = degradedland.seriesTemplates.create("0");
  var level1_column = level1.columns.template;
  level1_column.column.cornerRadius(10, 10, 10, 10);
  level1_column.fillOpacity = 0.8;
  level1_column.stroke = am4core.color("#fff");
  level1_column.strokeWidth = 5;
  level1_column.strokeOpacity = 1;
  //console.log("drewdegradedland");
}
