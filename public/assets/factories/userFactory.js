
myApp.factory('userFactory', ['$http', function($http){
    const factory = {};

    // get all users
    factory.index = function(callback){
        $http.get('/users')
        .then(function(response){
            callback(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    }

    // create new user
    factory.create = function(newUser, callback){
        $http.post('/users', newUser)
        .then(function(response){
            callback(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    }


    return factory;
}]); // close
