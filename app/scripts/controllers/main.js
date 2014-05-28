'use strict';

angular.module('App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })

  .controller('ArtCtrl', function($scope) {
	$scope.product = [

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


	]

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

