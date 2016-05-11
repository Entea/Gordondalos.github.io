'use strict';
var mainCtrl = main.controller('mainCtrl', ['$scope', function($scope){

}]);

var historyCtrl = main.controller('historyCtrl', ['$scope', function($scope){
  $scope.age = moment().format('YYYY') - 1982;


}]);