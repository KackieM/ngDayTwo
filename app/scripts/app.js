'use strict';

angular
  .module('ngArt', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
      })
      .when('/blog', {
        templateUrl: 'views/blog-list.html',
        controller: 'PostsCtrl'
      })
      .when('/new', {
        templateUrl: 'views/blog-create.html',
        controller: 'PostsCtrl'
      })
      .when('/blog/:id', {
        templateUrl: 'views/blog-detail.html',
        controller: 'PostCtrl'
      })
      .when('/blog/:id/edit', {
        templateUrl: 'views/blog-editDetail.html',
        controller: 'PostCtrl'
      })
      .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'PostsCtrl'
      })
      .when('/productsDetail', {
        templateUrl: 'views/productsDetail.html',
        controller: 'PostsCtrl'
      })
      .when('/orderCreate', {
        templateUrl: 'views/orderCreate.html',
        controller: 'PostsCtrl'
      })
      .when('/summaryOrder', {
        templateUrl: 'views/orderSummary.html',
        controller: 'PostsCtrl'
      })
      .when('/orderSummaryEdit', {
        templateUrl: 'views/orderSummaryEdit.html',
        controller: 'PostsCtrl'
      })
      .otherwise ({
        redirectTo: '/'
      });


  });
