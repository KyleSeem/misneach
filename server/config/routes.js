console.log('conneciton to server-side routes successful');

const path = require('path');

const users = require('../controllers/users.js');
const goals = require('../controllers/goals.js');

module.exports = function(app){
    app.get('/users', users.index);
    app.post('/users', users.create);
    app.post('/findUser', users.find);
    app.get('/users/:id', users.show);
    app.post('/users/status', users.status);

    app.get('/goals', goals.index);
    app.post('/goals', goals.create);


    app.all("*", (request, response, next) =>{
        response.sendFile(path.resolve("./public/index.html"))
    })

}; // close export
