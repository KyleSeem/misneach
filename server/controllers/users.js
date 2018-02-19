const mongoose = require('mongoose');
const Users = mongoose.model('Users');

module.exports = {

    // get all users
    index: (request, response) => {
        Users.find({})
        .then(function(users){
            response.json(users);
        })
        .catch(function(error){
            response.send(error);
        })
    },


    // create new user
    create: (request, response) => {
        Users.create(request.body)
        .then(function(user){
            response.json(user);
        })
        .catch(function(error){
            response.send(error);
        })
    },

    find: (request, response) => {
        Users.findOne({ name: request.body.name })
        .then(function(user){
            response.json(user);
        })
        .catch(function(error){
            console.log(error);
        })
    },

    show: (request, response) => {
        Users.findById(request.params.id)
        .then(function(user){
            response.json(user);
        })
        .catch(function(error){
            response.send(error);
        })
    },


    status: (request, response) => {
        var id = request.body.id;
        Users.findOne({name:request.body.user})
        .then(function(user){
            var bkt = user.bucket;

            for (var b = 0; b < bkt.length; b ++){
                if (bkt[b]._id == id){
                    bkt[b].status ++;
                    user.save(function(error){
                        if (error){
                            console.log(error);
                        }
                        else{
                            response.json(user);
                        }
                    })
                }
            }
        })

    }

}; // close
