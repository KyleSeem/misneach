
myApp.controller('XsController', ['$scope', 'xFactory', '$cookies', '$location', function($scope, xFactory, $cookies, $location){
    $scope.sessionUser = $cookies.getObject('thisUser');
    $scope.xs = [];


    // get all xs from db
    $scope.getXs = function(){
        xFactory.index(function(response){
            $scope.xs = response;
        })
    }


    // create new x
    $scope.create = function(){
        xFactory.create(function(response){
            console.log(response);

        })
    }




}]); // close XsController
