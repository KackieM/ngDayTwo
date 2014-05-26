'use strict';

angular
  .module('App', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/blog', {
        templateUrl: 'views/shop-list.html',
        controller: 'PostsCtrl'
      })
      .when('/new', {
        templateUrl: 'views/shop-create.html',
        controller: 'PostsCtrl'
      })
      .when('/blog:id', {
        templateUrl: 'views/shop-detail.html',
        controller: 'PostsCtrl'
      })
      .when('/blog/:id/edit', {
        templateUrl: 'views/shop-editDetail.html',
        controller: 'PostsCtrl'
      })
      .otherwise ({
        redirectTo: '/'
      });
  });
