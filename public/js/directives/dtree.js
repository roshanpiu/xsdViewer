(function() {
    angular.module('starter.directives', [])

    .directive('dtree', function($compile) {
        return {
            restrict: 'A',
            replace: true,
            link: function(scope, ele, attrs) {

                function createDtree(json) {
                    dtree = new dTree('dtree');

                    var parent = -1;
                    var counter = 0;
                    var text = "";

                    function walk(obj, parent) {
                        for (var key in obj) {
                            counter++;
                            if (typeof(obj[key]) == "object") {
                                dtree.add(counter, parent, key, "#"+counter);
                                walk(obj[key], counter)
                            } else {
                                dtree.add(counter, parent, key + " : " + obj[key], "#");
                            }
                        }
                    }
                    walk(json, parent);
                    return dtree;
                }

                scope.$watch(attrs.dtree, function(html) {
                    html = new createDtree(html);
                    ele.html(html);
                    $compile(ele.contents())(scope);
                });
            }
        };
    });


})();
