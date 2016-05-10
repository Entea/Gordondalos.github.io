/* Директивы модуля навигаций*/
main.directive('navigation', function(){
    return{
        restrict: 'E',
        templateUrl: 'view/navigation.html',
        replace: true,
    }
});
