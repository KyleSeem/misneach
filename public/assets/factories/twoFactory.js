
myApp.factory('twoFactory', ['$http', function($http){
    const factory = {};

    // // get all two
    // factory.index = function(callback){
    //     $http.get('/twos')
    //     .then(function(response){
    //         callback(response.data);
    //     })
    //     .catch(function(error){
    //         console.log(error);
    //     })
    // }
    //
    // // create new two
    // factory.create = function(newTwo, callback){
    //     $http.post('/two', newTwo)
    //     .then(function(response){
    //         callback(response.data);
    //     })
    //     .catch(function(error){
    //         console.log(error);
    //     })
    // }


    return factory;
}]); // close
