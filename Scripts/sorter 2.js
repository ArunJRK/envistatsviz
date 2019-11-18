var inputarray = [];
var outputarray = [];
var degradedarr = [];
var nodegradearr = [];
var partlydegradedarr = [];


$.getJSON("Data/Degradation-by-type-2011-13.json", function (data) {
    //console.log(data);
    inputarray = data;
    sorter();
});


function degraded(data) {
    var temp = [];
    
    for (var i = 0; i < data.length - 3; i++) {
        //console.log(data[i]);
        var tempobj = {
            type: data[i].type,
            area: data[i].area
        };
        temp.push(tempobj);
    }
    //console.log(temp);
    return temp;
}

function nodegrade(data) {
    for (var i in data) {
        if (data[i].type == "No Apparent Degradation") return data[i];
    }
}

function partlydegraded(data) {
    var tade;
    var tapercent;
    var tanode;

    for (var i in data) {
        if (data[i].type == "Total Area under Desertification") tade = data[i].area;
        else if (data[i].type == "Total Area under") tapercent = data[i].area;
        else if (data[i].type = "No Apparent Degradation") tanode = data[i].area;
    }

    var partialde = ((tade * 100) / tapercent) - tanode;
    var temp = {
        type: "Partial Degradation",
        area: partialde
    };
    return temp;
}

function finalarrayobj(state, degrade, nodegrade, partdegrade) {
    var temp = {
        State: state,
        Data: [{
            type: "Degraded",
            Data: degrade
        },
        {
           type: "Partially Degraded",
           Data: [partdegrade]    
        },
        {
            type:"No Degrade",
            Data: [nodegrade]
        }
    ]
    };
    return temp;
}

function sorter() {

    for (var i in inputarray) {
        degradedarr = degraded(inputarray[i].Data);
        nodegradearr = nodegrade(inputarray[i].Data);
        partlydegradedarr = partlydegraded(inputarray[i].Data);
        outputarray.push(finalarrayobj(inputarray[i].State,degradedarr,nodegradearr,partlydegradedarr));
    }
   console.log(JSON.stringify(outputarray));
}