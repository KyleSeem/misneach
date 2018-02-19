myApp.config(function($routeProvider){
    $routeProvider
    .when('/login', {
        templateUrl: '../partials/index.html',
        controller: 'UsersController',
    })
    .when('/dashboard', {
        templateUrl: '../partials/dashboard.html',
        controller: 'UsersController',
    }).
    when('/bucket/user/:id', {
        templateUrl: '../partials/user.html',
        controller: 'UsersController',
    })
    .otherwise({
        redirectTo: '/login',
    })
}); // close
