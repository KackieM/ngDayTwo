'use strict';
angular.module('ngDayTwoApp')
		.factory('PostsSvc', function($resource) {
		return $resource('http://tiy-fee-rest.herokuapp.com/collections/ngBlog',
			{},
			{
				query: { method: 'GET', isArray: true },
				create: { method: 'POST'}
			});
	})
	.factory('PostSvc', function($resource) {
		return $resource('http://tiy-fee-rest.herokuapp.com/collections/ngBlog/:id',
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
		return $resource('api/collections/kat5',
			{},
			{
				query: { method: 'GET', isArray: true },
				create: { method: 'POST'}
			});
	})
	.factory('PostSvc', function($resource) {
		return $resource('api/collections/kat5/:id',
			{
				id: '@_id'
			},
			{
				show: { method: 'GET'},
				edit: { method: 'PUT'},
				delete: { method: 'DELETE'}
			})


	});