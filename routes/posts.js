
var express = require('express');
var router = express.Router();
var Post = require('../models/post.js');

router.get('/posts', getAllPosts);
router.get('/posts/:id', getPostsForthePostId);
router.post('/posts', createPost);
router.delete('/posts/:id', deletePost);
router.put('/posts/:id', updatePost);

module.exports = router;

function getAllPosts(req, res, next){
Post.find({}, function(err, foundPosts){
  if(err){
    res.status(500).json({
      msg: err
    })

  } else {
    res.status(200).json({
      posts: foundPosts
    });
  }
});
}

function getPostsForthePostId(req, res, next){

}
function createPost(req, res, next){
  var post = new Post({
    title: req.body.title,
    author: req.body.author,
    body: req.body.body,
    created: new Date(),
    updated: new Date()
  });
  post.save(function(err, newPost){
    if(err){
      res.status(500).json({
        msg:err
      });
    } else {
      res.status(201).json({
        post: newPost
      });
    }
  });
}
function deletePost(req, res, next){
  Post.findByIdAndRemove(_id){
    if(err){
      res.status(500).json({
        msg:err
      });
    } else {
      res.status(201).json({
        deletePost: deletePost
      });
    }
  });
}
function updatePost(req, res, next){
  Post.findOneAndUpdate({_id: req.params.id}, req.body, function(err, oldPost){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        oldPost: oldPost
      });
    }
  });
}
