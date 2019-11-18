am4core.useTheme(am4themes_animated);
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
$.getJSON("Data/State-wise-soil-type.json", function (data) {
  ////console.log('success');
  soilmaindata = data;
  //console.log(soilmaindata);

  drawtree();
});

function sort(data, d) {
  var temp;
  var sorter = [];
  for (var i in data) {
    if (!data[i].State.localeCompare(name)) {
      temp = data[i].Data;
      for (var j = 0; j < temp.length - d; j++) {
        sorter.push(temp[j])
      }
      break;
    }
  }
 console.log(sorter);
  return sorter;
}

function drawtree() {
  var soilchartdata = sort(soilmaindata, 1);
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
 // console.log(soilchartdata);

  var level1seriestemplate = soiltype.seriesTemplates.create("1");
  level1seriestemplate.columns.template.fillOpacity = 1;

  var bullet1 = level1seriestemplate.bullets.push(new am4charts.LabelBullet());
  bullet1.locationX = 0.5;
  bullet1.locationY = 0.5;
  bullet1.label.text = "{name}";
  bullet1.label.fill = am4core.color("#ffffff");

}

//Chart 2

var degradedland = am4core.create("degradedland", am4charts.TreeMap);
degradedland.paddingRight = 20;

//Adding Data

var degradeglanddata;
$.getJSON("Data/sw-degradedland.json", function (data) {
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


// Chart 3

var degradationtype = am4core.create("degradationtype", am4charts.TreeMap);
var degradationtypedata;
$.getJSON("Data/sw-de-type-2011-13.json", function (data) {
  ////console.log('success');
  degradationtypedata = data;
  //console.log(soilmaindata);
  
  drawtree3();
});

function treedata3(){
  degradationtype.invalidateData();
  degradationtype.data = sort(degradationtypedata,0);
}
function drawtree3() {
  treedata3();
  // only one level visible initially
  degradationtype.maxLevels = 1;
  // define data fields
  degradationtype.dataFields.value = "area";
  degradationtype.dataFields.name = "State";
  degradationtype.dataFields.children = "Data";
  degradationtype.homeText = "Degradation By type";

  // enable navigation
  degradationtype.navigationBar = new am4charts.NavigationBar();

  // level 0 series template
  var level0SeriesTemplate = degradationtype.seriesTemplates.create("0");
  level0SeriesTemplate.strokeWidth = 2;

  // by default only current level series bullets are visible, but as we need brand bullets to be visible all the time, we modify it's hidden state
  level0SeriesTemplate.bulletsContainer.hiddenState.properties.opacity = 1;
  level0SeriesTemplate.bulletsContainer.hiddenState.properties.visible = true;

  //Insert Names
  level0SeriesTemplate.columns.template.fillOpacity = 1;

  var bullet0 = level0SeriesTemplate.bullets.push(new am4charts.LabelBullet());
  bullet0.locationX = 0.5;
  bullet0.locationY = 0.5;
  bullet0.label.text = "{name}";
  bullet0.label.fill = am4core.color("#ffffff");
  bullet0.label.border = am4core.color("seagreen");
  // create hover state
  var columnTemplate = level0SeriesTemplate.columns.template;
  var hoverState = columnTemplate.states.create("hover");

  // darken
  hoverState.adapter.add("fill", function (fill, target) {
    if (fill instanceof am4core.Color) {
      return am4core.color(am4core.colors.brighten(fill.rgb, -0.2));
    }
    return fill;
  });

  // add logo
  // var image = columnTemplate.createChild(am4core.Image);
  // image.opacity = 0.15;
  // image.align = "center";
  // image.valign = "middle";
  // image.width = am4core.percent(80);
  // image.height = am4core.percent(80);

  // // add adapter for href to load correct image
  // image.adapter.add("href", function (href, target) {
  // 	var dataItem = target.parent.dataItem;
  // 	if (dataItem) {
  // 		return "logos/" + dataItem.treeMapDataItem.name.toLowerCase() + ".png";
  // 	}
  // });

  // level1 series template
  var level1SeriesTemplate = degradationtype.seriesTemplates.create("1");
  //level1SeriesTemplate.columns.template.fillOpacity = 0;

  var bullet1 = level1SeriesTemplate.bullets.push(new am4charts.LabelBullet());
  bullet1.locationX = 0.5;
  bullet1.locationY = 0.5;
  bullet1.label.text = "{name}";
  bullet1.label.fill = am4core.color("#ffffff");

  // level2 series template
  var level2SeriesTemplate = degradationtype.seriesTemplates.create("2");
  level2SeriesTemplate.columns.template.fillOpacity = 0;

  var bullet2 = level2SeriesTemplate.bullets.push(new am4charts.LabelBullet());
  bullet2.locationX = 0.5;
  bullet2.locationY = 0.5;
  bullet2.label.text = "{name}";
  bullet2.label.fill = am4core.color("#ffffff");
}