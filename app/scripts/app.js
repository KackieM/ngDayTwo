'use strict';

angular
  .module('App', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider, $scope) {
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
