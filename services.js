'use strict';

angular
  .module('app')
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
