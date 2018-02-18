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
            console.log(user);
            response.json(user);
        })
        .catch(function(error){
            response.send(error);
        })
    },



}; // close
