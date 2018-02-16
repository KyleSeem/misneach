
myApp.factory('xFactory', ['$http', function($http){
    const factory = {};

    // get all x
    factory.index = function(callback){
        $http.get('/xs')
        .then(function(response){
            callback(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    }

    // create new x
    factory.create = function(newx, callback){
        $http.post('/x', newx)
        .then(function(response){
            callback(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    }


    return factory;
}]); // close
