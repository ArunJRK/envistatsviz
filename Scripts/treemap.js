var soiltype = am4core.create("soiltype", am4charts.TreeMap);
soiltype.paddingRight = 20;

var colors = {
              red: "red",
              black: "black",
              alluvial: "brown",
              laterite: "light brown"
            };

            //Adding Data

var treedatamain;
$.getJSON("Data/State-wise-soil-type.json", function(data) {
  ////console.log('success');
  treedatamain = data;
  //console.log(treedatamain);

  drawtree();
});

function drawtree() {
  var treechartdata;
  for (var i = 0; i < treedatamain.length; i++) {
    if (!treedatamain[i].State.localeCompare(name)) {
      //console.log("successis at peak");
      treechartdata = treedatamain[i].Soil;
      treechartdata.pop();
      //console.log(treechartdata);
    } else {
      //console.log('fail');
    }
  }

  soiltype.data = treechartdata;

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
}

//Chart 2

var degradedland = am4core.create("degradedland", am4charts.TreeMap);
degradedland.paddingRight = 20;

//Adding Data

var degradeglanddata;
$.getJSON("Data/sw-degradedland.json", function(data) {
  ////console.log('success');
  degradeglanddata = data;
  console.log(degradeglanddata);
  drawtree2();
});

function drawtree2() {
  var treechartdata;
  for (var i = 0; i < degradeglanddata.length; i++) {
    if (!degradeglanddata[i].State.localeCompare(name)) {
      //console.log("successis at peak");
      treechartdata = degradeglanddata[i].Soil;
      treechartdata.pop();
      //console.log(treechartdata);
    } else {
      //console.log('fail');
    }
  }

  degradedland.data = treechartdata;

  degradedland.dataFields.value = "area";
  degradedland.dataFields.name = "type";

  //Defining the anatomy of soiltype
  var level1 = degradedland.seriesTemplates.create("0");
  var level1_column = level1.columns.template;
  level1_column.column.cornerRadius(10, 10, 10, 10);
  level1_column.fillOpacity = 0.8;
  level1_column.stroke = am4core.color("#fff");
  level1_column.strokeWidth = 5;
  level1_column.strokeOpacity = 1;
  console.log("drewdegradedland");
}
