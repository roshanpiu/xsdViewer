angular.module('starter', ['ionic', 'cb.x2js','starter.directives','angular-json-tree'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.controller('DBTreeViewController', function($scope, $http) {
    $scope.name = "DB Tree"

    $scope.databaseTree = {};

    $scope.showDBTree = false;

    $http.get('https://raw.githubusercontent.com/roshanpiu/seneruTest/master/dbJson.json').then(function(data) {

        if (data.data) {
            $scope.showDBTree = true;
        }

         function processJSON(data) {
            var res = {};
            for (key in data) {
                // if (key == "complexType" || key == "sequence" || key == "schema" || key == "element" || (!isNaN(parseInt(key)))) {
                //     res[key] = processJSON(data[key]);
                // } else if (key == "_name" || key == "_type") {
                //     var tempKey = key.replace(/_|-/g, "");
                //     var tempVal = data[key];
                //     res[tempKey] = tempVal;
                // }
                // if (key == "complexType" || key == "sequence" || key == "schema" || key == "element") {
                //     res[key] = processJSON(data[key]);
                // }
                // else if((!isNaN(parseInt(key)))){
                //     // if(data[key]["_name"] && data[key]["_type"]){
                //     //     console.log(data[key]["_name"],data[key]["_type"]);
                //     //     var leafName = data[key]["_name"];
                //     //     var leafType = data[key]["_type"];
                //     //     res[leafType+" : "+leafName] = processJSON(data[key]);
                //     // }
                //     if(data[key]["_name"]){
                //         var leafName = data[key]["_name"];
                //         res[leafName] = processJSON(data[key]);
                //     }
                //     else{
                //         console.log("none");
                //     }
                // }
                if((!isNaN(parseInt(key)))){

                } 

            }

            return res;
        }

        console.log(data.data);
        $scope.databaseTree = data.data;
    });
})

.controller('XsdDiagramController', function($scope, $http, $compile, $rootElement) {
    $scope.name = "XSD Diagram";
    $scope.diagramSrc = "";

    $http.get('https://raw.githubusercontent.com/roshanpiu/seneruTest/master/sampleXsds/xmlSchema.xsd').then(function(data) {
        var xmlString = data.data;
        
        $scope.diagramContent = {
            "name": "Base",
            "children": [{
                "name": "Type A",
                "children": [{
                    "name": "Section 1",
                    "children": [{
                        "name": "Child 1"
                    }, {
                        "name": "Child 2"
                    }, {
                        "name": "Child 3"
                    }]
                }, {
                    "name": "Section 2",
                    "children": [{
                        "name": "Child 1"
                    }, {
                        "name": "Child 2"
                    }, {
                        "name": "Child 3"
                    }]
                }]
            }, {
                "name": "Type B",
                "children": [{
                    "name": "Section 1",
                    "children": [{
                        "name": "Child 1"
                    }, {
                        "name": "Child 2"
                    }, {
                        "name": "Child 3"
                    }]
                }, {
                    "name": "Section 2",
                    "children": [{
                        "name": "Child 1"
                    }, {
                        "name": "Child 2"
                    }, {
                        "name": "Child 3"
                    }]
                }]
            }]
        };

        var req = {
            method: 'POST',
            url: '/getSvg',
            headers: {
                'Content-Type': 'application/xml'
            },
            data: xmlString
        };

        $http(req).then(function(res) {


            console.log(res);
            //document.getElementById("diagramIframe").src = 'data:image/svg+xml,' + encodeURI(res.data);;

        }, function() {});

    });

})

.controller('XsdTreeViewController', function($http, $scope, x2js, $compile, $rootElement) {
    $scope.name = "XSD Tree";

    $scope.showXsdTree = false;

    $http.get('https://raw.githubusercontent.com/roshanpiu/seneruTest/master/sampleXsds/MISMOBarrower.xsd').then(function(data) {

        if (data.data) {
            $scope.showXsdTree = true;
        }

        var convertedJson = x2js.xml_str2json(data.data);

        

        console.log(convertedJson);

        function processJSON(data) {
            var res = {};
            for (key in data) {
                if (key == "complexType" || key == "sequence" || key == "schema" || key == "element" || (!isNaN(parseInt(key)))) {
                    res[key] = processJSON(data[key]);
                } else if (key == "_name" || key == "_type") {
                    var tempKey = key.replace(/_|-/g, "");
                    var tempVal = data[key];
                    res[tempKey] = tempVal;
                }
                // if (key == "complexType" || key == "sequence" || key == "schema" || key == "element") {
                //     res[key] = processJSON(data[key]);
                // }
                // else if((!isNaN(parseInt(key)))){
                //     // if(data[key]["_name"] && data[key]["_type"]){
                //     //     console.log(data[key]["_name"],data[key]["_type"]);
                //     //     var leafName = data[key]["_name"];
                //     //     var leafType = data[key]["_type"];
                //     //     res[leafType+" : "+leafName] = processJSON(data[key]);
                //     // }
                //     if(data[key]["_name"]){
                //         var leafName = data[key]["_name"];
                //         res[leafName] = processJSON(data[key]);
                //     }
                //     else{
                //         console.log("none");
                //     }
                // } 

            }

            return res;
        }
        console.log(processJSON(convertedJson));
        //console.log(convertedJson);
        //removeValues(convertedJson);
        $scope.dtreeContent = processJSON(convertedJson);
    });

})