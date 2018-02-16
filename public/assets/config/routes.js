myApp.config(function($routeProvider){
    $routeProvider
    .when('/login', {
        templateUrl: '../partials/index.html',
        controller: 'OneController',
    })
    .otherwise({
        redirectTo: '/login',
    })
}); // close
