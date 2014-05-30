angular.module('ngArt')
	.factory('PostsService', function($resource){
		return $resource('https://fieryart.firebaseio.com/', {},
			{
				getAllPosts: {
					method: 'GET',
					isArray: true
				},
				createNewPost: {
					method: 'POST'
				}
			});
	});

	// get all posts
	// create a post