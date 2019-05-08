var app = angular.module("app", ["ngRoute", "ui.router"]);


app.config(['$routeProvider', '$stateProvider', '$urlRouterProvider',  function($routeProvider, $stateProvider, $urlRouterProvider) {
    $routeProvider
    .when('/sumurl/:userid/:name/:email/:phone', {
        templateUrl: 'static/templates/display.html',
        controller: 'display'
    })

    //.when('/suminput/', {
        //templateUrl: 'input.html',
        //controller: 'suminput'
    //})

    $stateProvider.state('filter', {
        url: '/filter',
        templateUrl: 'static/templates/filter.html',
        controller: 'filterCtrl'
    });

    $stateProvider.state('sample02', {
        url: '/input',
        views:{
            '':{
                templateUrl: 'static/templates/default.html',
                controller: 'default',
            },

            'inputView':{
                templateUrl: 'static/templates/input.html',
                controller: 'inputCtrl',
            }
        }
    });


}]);






app.controller('default', function($scope) {
    $scope.a = 10;
    $scope.b = 20;
});






