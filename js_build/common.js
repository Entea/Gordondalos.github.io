'use strict';

'use strict';

var main = angular.module('main',[
    'ngRoute',
    'ngResource'
    
]);
main.controller('mainCtrl', ['$scope', function($scope){

}]);
main.config(['$routeProvider', function($routeProvide){

    $routeProvide
        .when ('/',{
        templateUrl:'view/home.html',
        controller: 'mainCtrl'
    })
        .when ('/history',{
        templateUrl:'view/history.html',
        //controller: 'history'
    })

        .otherwise({
            redirectTo: '/'
        });
}]);