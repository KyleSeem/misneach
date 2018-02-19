
myApp.controller('UsersController', ['$scope', 'userFactory', 'goalFactory', '$cookies', '$location', '$routeParams', function($scope, userFactory, goalFactory, $cookies, $location, $routeParams){
    $scope.sessionUser = $cookies.getObject('thisUser');
    $scope.users = [];
    $scope.goals = [];
    $scope.alerts = [];

    // console.log('current session', $scope.sessionUser);

    // get all users from db
    $scope.getUsers = function(){
        userFactory.index(function(response){
            $scope.users = response;
        })
    }

    // get all goals from db
    $scope.getGoals = function(){
        goalFactory.index(function(response){
            $scope.goals = response;
        })
    }



    // login/registration:
    // search database for username - if exists, welcome back, else create new
    $scope.login = function(){
        $scope.alerts = [];

        userFactory.findUser($scope.thisUser, function(response){
            if (response === null){
                userFactory.create($scope.thisUser, function(response){
                    if (response.alerts){
                        $scope.alerts = response.alerts;
                    }
                    else{
                        $location.url('/dashboard');
                        $cookies.putObject('thisUser', $scope.thisUser);
                    }
                });
            }
            else{
                $location.url('/dashboard');
                $cookies.putObject('thisUser', $scope.thisUser);
            }
        });
    }

    // take id from link and return user's page - show function init on page load
    $scope.fetchUser = function(id){
        // console.log('ID', id);
        $location.url('/bucket/user/' + id);
    }

    // show info for specified user based on page
    $scope.show = function(){
        // console.log('routeParams', $routeParams);
        userFactory.show($routeParams.id, function(response){
            $scope.user = response;
        })
    }

    // log out function removes cookies
    $scope.logout = function(){
        $cookies.remove('thisUser');
        $location.url('/');
    }


    // keeps user from navigating to pages w/o entering a username
    $scope.checkCookies = function(){
        // console.log($location.$$path);
        // console.log($scope.sessionUser);
        if (!$scope.sessionUser){
            if ($location.$$path === '/login'){
                    $location.url('/login');
            } else{
                $location.url('/');
            }
        }
    }
    $scope.checkCookies();




    $scope.create = function(){
        alerts = [];
        $scope.newGoal.creator = $scope.sessionUser.name;

        goalFactory.create($scope.newGoal, function(response){
            if (response.alerts){
                $scope.alerts = response.alerts;
            }
            else{
                $scope.goals = response;
                $scope.newGoal = {};
            }
            $scope.getUsers();
        })
    }

    $scope.completed = function(item){
        item = { user: $scope.user.name, id: item._id };

        userFactory.status(item, function(response){
            $scope.user = response;
        });
        $scope.getUsers();
    }


}]); // close UsersController
