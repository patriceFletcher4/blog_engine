
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
    console.log('deleting a post');
    next();
}
function updatePost(req, res, next){
    console.log('updating a post')
    next();
}
