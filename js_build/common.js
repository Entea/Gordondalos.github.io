'use strict';

'use strict';

var main = angular.module('main',[
    'ngRoute',
    'ngResource',
    'angularMoment'

]);
'use strict';
var mainCtrl = main.controller('mainCtrl', ['$scope', function($scope){

}]);

var historyCtrl = main.controller('historyCtrl', ['$scope', function($scope){
  $scope.age = moment().format('YYYY') - 1982;


}]);
main.config(['$routeProvider', function($routeProvide){

    $routeProvide
        .when ('/',{
        templateUrl:'view/home.html',
        controller: 'mainCtrl'
    })
        .when ('/history',{
        templateUrl:'view/history.html',
        controller: 'historyCtrl'
    })
        .when ('/skill',{
        templateUrl:'view/skill.html',
        //controller: 'history'
    })
        .when ('/portfolio',{
        templateUrl:'view/portfolio.html',
        //controller: 'history'
    })
        .when ('/techno',{
        templateUrl:'view/techno.html',
        //controller: 'history'
    })
        .when ('/contact',{
        templateUrl:'view/contact.html',
        //controller: 'history'
    })


        .otherwise({
            redirectTo: '/'
        });
}]);
/* Директивы модуля навигаций*/
main.directive('navigation', function(){
    return{
        restrict: 'E',
        templateUrl: 'view/navigation.html',
        replace: true,
    }
});