angular.module('starter', ['ionic', 'cb.x2js', 'starter.directives', 'angular-json-tree', 'renderteam.collapsibleTree'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {

            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
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
                if ((!isNaN(parseInt(key)))) {

                }

            }

            return res;
        }

        $scope.databaseTree = data.data;
    });
})

.controller('XsdDiagramController', function($scope, $http, $location) {
    $scope.name = "XSD Diagram";
    $scope.diagramSrc = "";

    $scope.$watch(function() {
        return location.hash
    }, function(value) {

        var url = $location.url();
        url = url.substring(1, url.length);

        if ((!isNaN(parseInt(url)))) {
            if (url == 3) {
                console.log(url);
                $http.get('js/nodes1.json').then(function(data) {
                    $scope.nodes = data.data;
                });
            }
            else if (url == 61) {
                console.log(url);
                $http.get('js/nodes2.json').then(function(data) {
                    $scope.nodes = data.data;
                });
            }
            else if (url == 4) {
                console.log(url);
                $http.get('js/sequence1.json').then(function(data) {
                    $scope.nodes = data.data;
                });
            }
            else if (url == 5) {
                console.log(url);
                $http.get('js/element1.json').then(function(data) {
                    $scope.nodes = data.data;
                });
            }
            else if (url == 63) {
                console.log(url);
                $http.get('js/element2.json').then(function(data) {
                    $scope.nodes = data.data;
                });
            }
            else if (url == 62) {
                console.log(url);
                $http.get('js/sequence2.json').then(function(data) {
                    $scope.nodes = data.data;
                });
            }
            else if (url == 2) {
                console.log(url);
                $http.get('js/complexType.json').then(function(data) {
                    $scope.nodes = data.data;
                });
            }
            else{
                $http.get('js/schema.json').then(function(data) {
                    $scope.nodes = data.data;
                });
            }
        }

    });



    $http.get('js/schema.json').then(function(data) {
        var xmlString = data.data;
        $scope.nodes = data.data;

        // var req = {
        //     method: 'POST',
        //     url: '/getSvg',
        //     headers: {
        //         'Content-Type': 'application/xml'
        //     },
        //     data: xmlString
        // };

        // $http(req).then(function(res) {
        //     //document.getElementById("diagramIframe").src = 'data:image/svg+xml,' + encodeURI(res.data);
        // }, function() {});

    });

})

.controller('XsdTreeViewController', function($http, $scope, x2js) {
    $scope.name = "XSD Tree";

    $scope.showXsdTree = false;
    $scope.dtreeContent = {};

    $http.get('https://raw.githubusercontent.com/roshanpiu/seneruTest/master/sampleXsds/schema.xsd').then(function(data) {

        if (data.data) {
            $scope.showXsdTree = true;
        }

        var convertedJson = x2js.xml_str2json(data.data);

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

        $scope.dtreeContent = processJSON(convertedJson);
    });

})