angular.module('myBlog')
	.controller('PostCtrl', ['$scope', '$routeParams', '$location', 'PostService', function($scope, $routeParams, $location, PostService) {

		$scope.post = PostService.showPost({ id: $routeParams.id });

		$scope.updatePost = function() {
			PostService.updatePost($scope.post);
			$location.path('/blog/' + $routeParams.id);
		};

		$scope.delete = function() {
			PostService.deletePost({ id: $routeParams.id });
			$location.path('/blog');
		};
		// editing
		// deleting
		// showing

	}]);