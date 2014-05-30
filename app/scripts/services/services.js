angular.module('ngArt')
		.factory('ProductService', function($resource) {
		return $resource('https://fieryart.firebaseio.com/',
			{},
			{
				query: { method: 'GET', isArray: true },
				create: { method: 'POST'}
			});
	})
	.factory('PostSvc', function($resource) {
		return $resource('https://fieryart.firebaseio.com/',
			{
				id: '@_id'
			},
			{
				show: { method: 'GET'},
				edit: { method: 'PUT'},
				delete: { method: 'DELETE'}
			}
			)
	})


// Here we go with ArtShop Svcs

	.factory('OrdersSvc', function($resource) {
		return $ref('https://fieryart.firebaseio.com/',
			{},
			{
				query: { method: 'GET', isArray: true },
				create: { method: 'POST'}
			});
	})
	.factory('PostSvc', function($resource) {
		return $resource('https://fieryart.firebaseio.com',
			{
				id: '@_id'
			},
			{
				show: { method: 'GET'},
				edit: { method: 'PUT'},
				delete: { method: 'DELETE'}
			})


	});