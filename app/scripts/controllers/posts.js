angular.module('ngArt')
	.controller('PostsCtrl', ['$scope', '$location', 'PostsService', function($scope, $location, PostsService) {
		$scope.randomness = "hello we are in PostsCtrl!";

		$scope.posts = PostsService.getAllPosts();
		$scope.addPost = function() {
			$location.path('/new');
		};
		$scope.createPost = function(post) {
			PostsService.createNewPost(post);
			$location.path('/blog');
		};



	}]);