'use strict';

/* Prime Table Controller - Module */

var controllers = angular.module('primeTableApp.controllers', []);

controllers.controller('PrimeTableController', ['$scope', 'PrimeNumberService', function ($scope, PrimeNumberService) {
	$scope.primeTable = {
		numberOfPrimes: '',
		primes: []
	};
	$scope.numberOfPrimesChange = function() {
		$scope.primeTable.primes = []
		if($scope.primeTable.numberOfPrimes
			&& angular.isNumber($scope.primeTable.numberOfPrimes)
			&& $scope.primeTable.numberOfPrimes >= 1
			&& $scope.primeTable.numberOfPrimes <= 10)
		{
			$scope.primeTable.primes = PrimeNumberService.getPrimeNumbers($scope.primeTable.numberOfPrimes);
		}
	};
}]);