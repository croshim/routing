'use strict';

angular
  .module('app')
  .controller('ListCtrl', ListCtrl)
  .controller('DetailsCtrl', DetailsCtrl)
  .controller('CreateCtrl', CreateCtrl);

function ListCtrl(Post) {
  this.posts = Post.list();

  this.remove = function(index) {
    Post.remove(index);
  };
}

function DetailsCtrl($route, Post) {
  this.post = Post.find($route.current.params.title);
}

function CreateCtrl(Post) {
  this.post = {
    title: '',
    body: ''
  };

  this.create = function() {
    Post.create(this.post);
    this.post.title = '';
    this.post.body = '';
  };
}
