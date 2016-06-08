
    // function removeValues(data) {
    //     for (key in data) {

    //         if (key != "complexType" && key != "sequence" && key != "_name" && key != "_type" && key != "schema" && key != "element" && isNaN(key)) {
    //             delete data[key];
    //         }
    //         if(key == "_name" || key == "_type"){
    //             var tempKey = key.replace(/_|-/g, "");
    //             var tempVal = data[key];
    //             delete data[key];
    //             data[tempKey] = tempVal;
    //         }
    //         if(!isNaN(parseInt(key))){
    //             // var tempKey = data[key]["_name"];
    //             // var tempVal = data[key];
    //             // delete data[key];
    //             // data[tempKey] = tempVal
    //             //console.log(data[key]["_name"]);
    //         }
    //         if (typeof(data[key]) == "object") {
    //             removeValues(data[key]);
    //         }

    //     }
    // }

    // function createDtree(json) {
    //     dtree = new dTree('dtree');

    //     var parent = -1;
    //     var counter = 0;
    //     var text = "";

    //     function walk(obj, parent) {

    //         for (var key in obj) {

    //             counter++;
    //             if (typeof(obj[key]) == "string" || typeof(obj[key]) == "number" || typeof(obj[key]) == "boolean") {
    //                 dtree.add(counter, parent, key + " : " + obj[key], "#");
    //             } else {
    //                 dtree.add(counter, parent, key, "#");
    //                 walk(obj[key], counter)
    //             }
    //         }
    //     }
    //     walk(json, parent);
    //     console.log(dtree);
    //     return dtree;


    // }


    // function createTreeArray(json) {
    //     var parent = 0;
    //     var counter = 0;
    //     var text = "";
    //     var newTree = new Array;

    //     function walk(obj, parent) {

    //         for (var key in obj) {

    //             counter++;
    //             if (typeof(obj[key]) == "string" || typeof(obj[key]) == "number" || typeof(obj[key]) == "boolean") {
    //                 text = counter + "|" + parent + "|" + key + " : " + obj[key] + "|#";
    //                 newTree.push(text);
    //             } else {

    //                 text = counter + "|" + parent + "|" + key + "|#";
    //                 newTree.push(text);
    //                 walk(obj[key], counter)
    //             }
    //         }
    //     }
    //     walk(json, parent);
    //     console.log(newTree);
    //     return newTree;
    // }