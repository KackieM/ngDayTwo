angular.module('ngArt')
	.controller('ProductCtrl', ['$scope', '$routeParams', '$location', 'ProductService', function($scope, $routeParams, $location, ProductService)  {

		$scope.product = ProductService.showProduct({ id: $routeParams.id});

		$scope.updateProduct = function() {
			ProductService.updateProduct($scope.product);
			$location.path("/")
		}

	}])