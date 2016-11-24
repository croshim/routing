'use strict';

angular
  .module('app', [])
  .controller('AppCtrl', AppCtrl)
  .factory('Post', Post);

function Post() {
  var posts = [
    {
      title: 'Awesome Post',
      body: 'Really long text'
    }
  ];

  var service = {
    list: list,
    create: create,
    remove: remove
  };

  return service;

  function create(post) {
    var post = angular.copy(post);
    // Some complecated logic here
    posts.push(post);
  }

  function remove(index) {
    posts.splice(index, 1);
  }

  function list() {
    return posts;
  }
}

function AppCtrl(Post) {
  this.post = {
    title: '',
    body: ''
  };

  this.isFormShown = true;

  this.posts = Post.list();

  this.toggleFormVisibility = function() {
    this.isFormShown = !this.isFormShown;
  };

  this.remove = function(index) {
    Post.remove(index);
  };

  this.create = function() {
    Post.create(this.post);
    this.post.title = '';
    this.post.body = '';
  };

}
