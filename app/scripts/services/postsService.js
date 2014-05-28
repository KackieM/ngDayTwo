angular.module('myBlog')
	.factory('PostsService', function($resource){
		return $resource('http://tiy-fee-rest.herokuapp.com/collections/ngDay3', {},
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