console.log('conneciton to server-side routes successful');

const path = require('path');

const users = require('../controllers/users.js');
// const twos = require('../controllers/twos.js');

module.exports = function(app){
    app.get('/users', users.index);
    app.post('/users', users.create);
    // app.delete('/users', users.delete);

    // app.get('/twos', twos.index);
    // app.post('/twos', twos.create);
    // app.delete('/twos', twos.delete);


    app.all("*", (request, response, next) =>{
        response.sendFile(path.resolve("./public/index.html"))
    })

}; // close export
