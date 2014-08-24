'use strict';

angular.module('ngArt')
  .controller('MainCtrl', function ($scope, $location, $routeParams, ProductsService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  $scope.createPost = function () {
  	$location.path('/main');

  };
  $scope.newPost = function(post) {
    	PostsService.create(post)
    	$location.path('/main');
    };
    $scope.posts = PostsService.query();
  }
  .controller('ProductsCtrl', function($scope) {
  	$scope.products = ProductsService.show({ id: $routeParams.id });
  	$scope.delete = function() { 
  		ProductsService.delete({ id: $routeParams.id });
  		$location.path('/');
  	}
  	$scope.edit = function() {
  		PostsService.edit($scope.post);
  		$location.path('/main');
  	};

angular.module('ngArt')
  .controller('ProductsCtrl', function($scope, $location, $routeParams, ProductsSvc) {
	   $scope.products = ProductsService

		// {
		// 'name': 'Ball of Fire',
  //   'image': 'images/balloffiremodel.jpg',
		// 'description': 'This is a Ball of Fire',
  //   'price' : '2000',
  //   'id': '1',
		// },

		// {
  //   'name': 'Fiery Umbrella',
  //   'image': 'images/fieryumbrellamodel.jpg',
  //   'description': 'Burning Umbrella',
  //   'price' : '3200',
  //   'id': '2',
  //   },
  //   {
  //   'name': 'Kissing the Lipless',
  //   'image': 'images/kissingthelipless.jpg',
  //   'description': 'Kissing',
  //   'price' : '4500',
  //   'id': '3',
  //   },
  //   {
  //   'name': 'Lonely Queen',
  //   'image': 'images/lonelyqueen.jpg',
  //   'description': 'Lonely Queen',
  //   'price' : '5500',
  //   'id': '4',
  //   },
  //   {
  //   'name': 'Painting the Grass Green',
  //   'image': 'images/paintingthegrassgreen.jpg',
  //   'description': 'Painting the Grass',
  //   'price' : '2500',
  //   'id': '5',
  //   },

	
  

