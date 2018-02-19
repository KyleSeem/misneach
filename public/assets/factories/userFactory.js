
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
    factory.create = function(user, callback){
        alerts = [];

        $http.post('/users', user)
        .then(function(response){
            if (response.data.errors){
                var err = response.data.errors;
                for (var msg in err){
                    var alert = (err[msg].message);
                    alerts.push(alert);
                }
                callback({ alerts: alerts });
            }
            else{
                callback(response.data);
            }
        })
        .catch(function(error){
            console.log(error);
        })
    }

    // find one user by name
    factory.findUser = function(user, callback){
        $http.post('findUser', user)
        .then(function(response){
            callback(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    }

    // find one user and return data
    factory.show = function(id, callback){
        $http.get('/users/' + id)
        .then(function(response){
            callback(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    }

    factory.status = function(item, callback){
        $http.post('/users/status', item)
        .then(function(response){
            callback(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    }

    return factory;
}]); // close
