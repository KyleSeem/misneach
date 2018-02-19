const mongoose = require('mongoose');
const Goals = mongoose.model('Goals');
const Users = mongoose.model('Users');

module.exports = {

    // get all goals
    index: (request, response) => {
        Goals.find({})
        .then(function(goals){
            response.json(goals);
        })
        .catch(function(error){
            response.send(error);
        })
    },


    // create new goal
    create: (request, response) => {
        var tagUser = request.body.tagUser;
        var user = request.body.creator;
        var newGoal = {
            creator: request.body.creator,
            title: request.body.title,
            description: request.body.description,

        };

        Goals.create(newGoal)
        .then(function(goal){
            console.log(goal);
            Users.findOne({ name:user }, function(error, user){
                if (error) { console.log(error); }
                else{
                    goal.save(function(error){
                        console.log(goal);
                        user.bucket.push(goal);
                        user.save(function(error){
                            if (error) { console.log(error); }

                            else{ // find tagged user
                                if (tagUser === undefined){
                                    // console.log(user)
                                    response.json(goal);
                                }
                                else{
                                    Users.findOne({ name:tagUser }, function(error, user){
                                        if (error) { console.log(error); }
                                        else{
                                            goal.save(function(error){
                                                user.bucket.push(goal);
                                                user.save(function(error){
                                                    if (error) { console.log(error); }
                                                    else{
                                                        response.json(goal);
                                                    }
                                                })
                                            })
                                        }
                                    })
                                }

                            }
                        })
                    })
                }
            })
        })
        //     if (tagUser === undefined){
        //         console.log('no tagUser');
        //
        //     }
        //     else{
        //         console.log('TAG USER', tagUser);
        //         Users.findOne({ name:tagUser }, function(error, user){
        //             if (error) { console.log(error); }
        //             else{
        //                 console.log('found this user', user);
        //                 goal.save(function(error){
        //                     user.bucket.push(goal);
        //                     user.save(function(error){
        //                         if (error) { console.log(error); }
        //                         else{
        //                             response.json(goal);
        //                         }
        //                     })
        //                 })
        //             }
        //         })
        //     }
        // })
        .catch(function(error){
            response.send(error);
        })
    },



}; // close
