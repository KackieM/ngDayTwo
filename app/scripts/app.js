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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'OrdersCtrl'
      })
      .when('/summaryOrder', {
        templateUrl: 'views/orderSummary.html',
        controller: 'SummaryCtrl'
      })
      .when('/orderSummaryEdit', {
        templateUrl: 'views/orderSummaryEdit.html',
        controller: 'OrdersCtrl'
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
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'OrdersCtrl'
      })
      .when('/customerReviews', {
        templateUrl: 'views/customerReviews.html',
        controller: 'OrdersCtrl'
      })
      .when('/devproducts', {
        templateUrl: 'views/devproducts.html',
        controller: 'OrdersCtrl'
      })
      .when('/orderCreate', {
        templateUrl: 'views/orderCreate.html',
        controller: 'OrdersCtrl'
      })
      .when('/orderSummary', {
        templateUrl: 'views/orderSummary.html',
        controller: 'SummaryCtrl'
      })
      .when('/orderSummaryEdit', {
        templateUrl: 'views/orderSummaryEdit.html',
        controller: 'OrdersCtrl'
      })
      .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'ProductsCtrl'
      })
      .when('/productsDetail', {
        templateUrl: 'views/productsDetail.html',
        controller: 'ProductsCtrl'
      })
      
      .otherwise ({
        redirectTo: '/'
      });


  });
