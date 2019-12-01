var array = {};
var subarray = [{}];
var textname = '';
var textarray = [''];
var count = 0;
var removal = 'null';
var temp = {};
var temparray = [];
var finalarray = [];

function base(state, data) {
    this.State = state;
    this.Data = data;
}

function content(district, area, darea, percent) {
    this.District = district;
    this.Totalarea = area;
    this.Totaldegradedarea = darea;
    this.Percent = percent;
}


$.getJSON("Data/State-wise-district-wise-degraded-land.json", function (data) {
    //console.log(data);
    array = data;
    sorter();
});


function sorter() {

    for (var i = 0; i < array.length; i++) {
        if (textarray[count].localeCompare(array[i].State)) {
            if (array[i].State.localeCompare(removal)) {
                textarray.push(array[i].State);
                count++;
            }
        }
    }
        console.log(array.length);
        console.log(count);
   // count =0;

    for (var j =1; j<= count; j++){

        for ( i = 0; i < array.length; i++) {
            if(!array[i].State.localeCompare(textarray[j])){
                temp = new content(
                    array[i].District, 
                    array[i]["Total Area"], 
                    array[i]["Total Degraded Land area"],
                    array[i]["Percent of Degraded Area"]
                    );
                    //console.log(temp);
                temparray.push(temp);
                temp = {};
            }
        }
      //  console.log(temparray);
        var temp2 =new base(textarray[j],temparray);
        console.log(temp2);
        finalarray.push(temp2);
        temparray = [];
      //  console.log(finalarray);
     // count++;
    }

  

        // for (var i = 0; i < array.length; i++) {


        //   if (!array[i].State.localeCompare(text)) {

        //   }
        // }

        document.getElementById('para').innerHTML = JSON.stringify(finalarray);

    }
  
   // console.log(textarray);
