'use strict';

angular.module('ngDayTwoApp')
  .controller('PostsCtrl', function ($scope, $location, PostsSvc) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  $scope.createPost = function () {
  	$location.path('/new');

  };
  $scope.newPost = function(post) {
    	PostsSvc.create(post)
    	$location.path('/blog');
    };
    $scope.posts = PostsSvc.query();
  })
  .controller('PostCtrl', function($scope, $location, $routeParams, PostSvc) {

  	$scope.post = PostSvc.show({ id: $routeParams.id });
  	$scope.delete = function() { 
  		PostSvc.delete({ id: $routeParams.id });
  		$location.path('/blog');
  	};
  	$scope.edit = function() {
  		PostSvc.edit($scope.post);
  		$location.path('/blog');
  	};

  angular.module('ngDayTwoApp')
  .controller('ProductsCtrl', function($scope, $location, $routeParams, OrdersSvc) {
	$scope.products = [

		{
		name: 'Ball of Fire',
		price: 2000,
		description: 'This is a Ball of Fire',
		},

		{
		name: 'Ball of Fire',
		price: 3000,
		description: 'This is a Ball of Fire',
		},

		{
		name: 'Ball of Fire',
		price: 4000,
		description: 'This is a Ball of Fire',
		},

		{
		name: 'Ball of Fire',
		price: 5000,
		description: 'This is a Ball of Fire',
		},
		
		{
		name: 'Ball of Fire',
		price: 5000,
		description: 'This is a Ball of Fire'
		},


	];
	$scope.createOrder = function() {
		$location.path('/new');
	};
	$scope.newOrder = function(order)

  		// $scope.whateverYouWant = [
  		// 	{
  		// 		name: "Kat Mattison",
  		// 		hobby: "reading"
  		// 	},
  		// 	{
  		// 		name: "Calvin Webster",
  		// 		hobby: "surfing"
  		// 	},
  		// 	{},
  		// 	{},
  		// 	{},

  		// ];
  });

