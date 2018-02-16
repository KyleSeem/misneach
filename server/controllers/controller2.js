const mongoose = require('mongoose');
const X = mongoose.model('X');

module.exports = {

    // get all x
    index: (request, response) => {
        X.find({})
        .then(function(x){
            response.json(x);
        })
        .catch(function(error){
            response.send(error);
        })
    },


    // create new x
    create: (request, response) => {
        X.create(request.body)
        .then(function(x){
            console.log(x);
            response.json(x);
        })
        .catch(function(error){
            response.send(error);
        })
    },



}; // close
