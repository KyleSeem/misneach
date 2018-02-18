
myApp.controller('UsersController', ['$scope', 'userFactory', '$cookies', '$location', function($scope, userFactory, $cookies, $location){
    $scope.sessionUser = $cookies.getObject('thisUser');
    $scope.users = [];
    $scope.user = {};
    $scope.newUser = {};
    $scope.alerts = [];


    // get all users from db
    $scope.getUsers = function(){
        userFactory.index(function(response){
            $scope.users = response;
        })
    }


    // create new user (register)
    $scope.create = function(){
        // console.log($scope.newUser);
        $scope.alerts = [];
        userFactory.create($scope.newUser, function(response){
            console.log(response);
            if (response.alerts){
                $scope.alerts = response.alerts;
            }
            else{
                console.log('success');
                $scope.newUser = {};
                $location.url('/dashboard');
            }

        })
    }




}]); // close UsersController
