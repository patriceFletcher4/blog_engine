
var express = require('express');
var router = express.Router();

router.get('/posts', getAllPosts);
router.get('/posts/:id', getPostsForthePostId);
router.post('/posts', createPost);
router.delete('/posts/:id', deletePost);
router.put('/posts/:id', updatePost);

module.exports = router;

function getAllPosts(req, res, next){
  console.log('gimme all post');
  next();
}

function getPostsForthePostId(req, res, next){
  console.log('getting the posts for this id');
  next();
}
function createPost(req, res, next){
  console.log('creating a post');
  next();
}
function deletePost(req, res, next){
    console.log('deleting a post');
    next();
}
function updatePost(req, res, next){
    console.log('updating a post')
    next();
}
