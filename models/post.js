
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  body: {
    type: String,
    require: true
  },
  created: {
    type: Date,
    require: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true
  },
  update: {
    type: Date,
    require: true
  }
});

var Post = mongoose.model('post', postSchema);
module.exports = Post;
