
var express = require('express');
var router = express.Router();

router.get('/comments/:postId', getCommentsForAPost);
router.post('/comments', createComment);
router.delete('/comments/:commentId', deleteComment);
router.put('/comments/:commentId', updateComment);

module.exports = router;

function getCommentsForAPost(req, res, next){
  console.log('getting all of the comments');
  next();
}
function createComment(req, res, next){
  var comment = new Comment({
    title: req.body.title,
    author: req.body.author,
    body: req.body.body,
    created: new Date(),
    updated: new Date()
  });
  comment.save(function(err, newComment){
    if(err){
      res.status(500).json({
        msg:err
      });
    } else {
      res.status(201).json({
        Comment: newComment
      });
    }
  });
}
function deleteComment(req, res, next){
  Comment.Remove({_id: req.params.id}, req.body, function(err, deleteComment){
    if(err){
      res.status(500).json({
        msg:err
      });
    } else {
      res.status(201).json({
        msg: deleteComment
      });
    }
  });
}
function updateComment(req, res, next){
  Comment.findOneAndUpdate({_id: req.params.id}, req.body, function(err, oldComment){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        oldComment: oldComment
      });
    }
  });
}
