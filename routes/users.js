
var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var auth = require('../authentication.js');


router.get('/users', getAllUsers);
router.get('/users/:userId', getOneUser);
router.post('/signup', auth.signup);
//router.post('/users', createUser);
router.post('/login', auth.login);
router.delete('/users/:userId', deleteUser);
router.put('/users/:userId', updateUser);

module.exports = router;

function getAllUsers(req, res, next){
  User.find({}, function(err, users){
    if(err) {
      res.status(500).json({
        msg: err
      })
    } else {
      if(users){
        res.status(200).json({
          users: users
        });
      } else {
        res.status(404).json({
          mgs: "couldn't find user"
        });
       }
     }
  });
}
function getOneUser(req, res, next){
  user.find({_Id: req.params.userId}, function(err, foundOneUser){
    if(err){
      res.status(500).json({
        msg: err
      })
    } else {
      res.status(200).json({
        users: foundOneUser
      });
    }
  })
}

function createUser(req, res, next){
  var user = new User({
    title: req.body.title,
    author: req.body.author,
    body: req.body.body,
    created: new Date(),
  });
  user.findOne(function(err, createdUser){
    if(err){
      res.status(500).json({
        msg:err
      });
    } else {
      res.status(201).json({
        createdUser: newUser
      });
    }
  });
}

function updateUser(req, res, next){
  User.findOneAndUpdate({_id: req.params.id}, req.body, function(err, user){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        user: user
      });
    }
  });
}

function deleteUser(req, res, next){
  User.findOneAndRemove({_id: req.params.id}, req.body, function(err, deleteUser){
    if(err){
      res.status(500).json({
        msg:err
      });
    } else {
      res.status(201).json({
        removedUser: deleteUser
      });
    }
  });
}
