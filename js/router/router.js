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