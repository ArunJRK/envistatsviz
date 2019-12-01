var inputarray = [];
var outputarray = [];
var degradedarr = [];
var nodegradearr = [];
var partlydegradedarr = [];


var normalraindata;
var actualraindata;

$.getJSON("Data/actualrain.json", function (data) {
  actualraindata = data;
  console.log(data);
});

$.getJSON("Data/normalrain.json", function (data) {
  normalraindata = data;
  console.log(data);
});

var apple = actualraindata;

  for (var i =0; i<actualraindata.length;i++) {
      
        for (var m =0; m < actualraindata[i].Data.length;m++) {
          console.log("once");
            var temp = {
              year: actualraindata[i].Data[m].year,
              actual: actualraindata[i].Data[m].actual,
              normal: normalraindata[i].Data[m].normal
            };
              apple[i].Data[m] = temp;
              console.log(temp);
            }
          }
      
 // console.log(JSON.stringify(actualraindata));