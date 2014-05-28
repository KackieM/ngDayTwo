angular.module('myBlog')
	.factory('PostService', function($resource) {
		return $resource('http://tiy-fee-rest.herokuapp.com/collections/ngDay3/:id', 
		{
			id: '@_id'
		}, 
		{
			showPost: { method: 'GET'	},
			updatePost: { method: 'PUT'	},
			deletePost: { method: 'DELETE'	}


		});
	});

	// edit a single post 
	// delete a single post
	// show a single post