
myApp.controller('TwosController', ['$scope', 'twoFactory', '$cookies', '$location', function($scope, twoFactory, $cookies, $location){
    $scope.sessionUser = $cookies.getObject('thisUser');
    $scope.twos = [];


    // get all twos from db
    $scope.getXs = function(){
        twoFactory.index(function(response){
            $scope.twos = response;
        })
    }


    // create new two
    $scope.create = function(){
        twoFactory.create(function(response){
            console.log(response);

        })
    }




}]); // close TwosController
