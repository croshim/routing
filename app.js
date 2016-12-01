'use strict';

angular
  .module('app', ['ngRoute'])
  .config(config)

function config($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'list.html',
      controller: 'ListCtrl',
      controllerAs: 'list'
    })
    .when('/posts/:title', {
      templateUrl: 'details.html',
      controller: 'DetailsCtrl',
      controllerAs: 'details'
    })
    .when('/create', {
      templateUrl: 'create.html',
      controller: 'CreateCtrl',
      controllerAs: 'create'
    });
}
