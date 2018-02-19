
myApp.factory('goalFactory', ['$http', function($http){
    const factory = {};

    // get all goal
    factory.index = function(callback){
        $http.get('/goals')
        .then(function(response){
            callback(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    }

    // create new goal
    factory.create = function(newGoal, callback){
        alerts = [];

        $http.post('/goals', newGoal)
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


    return factory;
}]); // close
