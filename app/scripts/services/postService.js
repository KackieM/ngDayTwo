angular.module('ngArt')
	.factory('PostService', function($resource) {
		return $resource('https://fieryart.firebaseio.com/:id', 

			// CHANGE $RESOURCE TO $REF --  MEANING YOURE USING $REFERENCE WITH FIREBASE AND ANGULAR VERSUS
			// $RESOURCE - SO YOURE NOT JUST REACHING/ACCESSING A RESOURCE BUT ASKING THE APP TO 'REFERENCE'
			// YOUR FIREBASE DATABASE, WHICH IS https://fieryart.firebaseio.com/
			// WHEN YOU DO THIS, MAKE SURE THAT YOU LOOK AT CALVIN'S EXAMPLE FROM TODAY, FRI 5.30.14
			// THIS 'BUILDS IN' THE CRUD METHOD AND YOU CREATE VARS WHICH ARE PRIVATES AND ONLY 
			// ACCESS THEM THROUGH GLOBAL METHODS AT THE TOP OF
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