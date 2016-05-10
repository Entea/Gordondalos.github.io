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