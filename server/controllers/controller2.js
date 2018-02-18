const mongoose = require('mongoose');
const Twos = mongoose.model('Twos');

module.etwoports = {

    // get all twos
    index: (request, response) => {
        Twos.find({})
        .then(function(twos){
            response.json(twos);
        })
        .catch(function(error){
            response.send(error);
        })
    },


    // create new two
    create: (request, response) => {
        Twos.create(request.body)
        .then(function(two){
            console.log(two);
            response.json(two);
        })
        .catch(function(error){
            response.send(error);
        })
    },



}; // close
