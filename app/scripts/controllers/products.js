angular.module('ngArt')
	.controller('ProductsCtrl', ['$scope', '$location', 'ProductsService', function($scope, $location, PostsService) {
		$scope.randomness = "hello we are in ProductsCtrl!";

		$scope.posts = PostsService.getAllPosts();
		$scope.addPost = function() {
			$location.path('/new');
		};
		$scope.createPost = function(post) {
			PostsService.createNewPost(post);
			$location.path('/blog');
		};



	}]);