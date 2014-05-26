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
      .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'PostsCtrl'
      })
      .when('/productsDetail', {
        templateUrl: 'views/productsDetail.html',
        controller: 'PostsCtrl'
      })
      .when('/newOrder', {
        templateUrl: 'views/order-create.html',
        controller: 'PostsCtrl'
      })
      .when('/summaryOrder', {
        templateUrl: 'views/order-summary.html',
        controller: 'PostsCtrl'
      })
      .when('/summaryOrderEdit', {
        templateUrl: 'views/order-summary-edit.html',
        controller: 'PostsCtrl'
      })
      .otherwise ({
        redirectTo: '/'
      });
  });
