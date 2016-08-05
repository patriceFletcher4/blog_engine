
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
  author: String,
  // author: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  //   require: true
  // },
  updated: {
    type: Date,
    require: true
  }
});
postSchema.pre('findOneAndUpdate', function(){
  this.update({},
    {
      $set:
      {
        updated: new Date()
      }
    });
});

var Post = mongoose.model('post', postSchema);
module.exports = Post;
