'use strict';

/* Prime Table Controller - Unit Tests */

describe('PrimeTableController', function() {
	var $controller, $scope, $PrimeTableController, $PrimeNumberService;
	
	beforeEach(function (){
		module('primeTableApp');

		inject(function(_$controller_){
			$controller = _$controller_;
		});

		inject(function(_PrimeNumberService_) {
			$PrimeNumberService = _PrimeNumberService_;
		});
		
		$scope = {
			primeTable: {
				numberOfPrimes: '',
				primes: []
			}
		};
		
		$PrimeTableController = $controller('PrimeTableController', { 
			$scope: $scope, 
			PrimeNumberService: $PrimeNumberService});
	});
	
	it('should set an empty array when the user input is empty.', function() {
		$scope.primeTable.numberOfPrimes = '';
		$scope.numberOfPrimesChange();
		expect($scope.primeTable.primes).toEqual([]);
	});
	
	it('should set an empty array when the user input is 11.', function() {
		$scope.primeTable.numberOfPrimes = 11;
		$scope.numberOfPrimesChange();
		expect($scope.primeTable.primes).toEqual([]);
	});
	
	it('should set an empty array when the user input is 100.', function() {
		$scope.primeTable.numberOfPrimes = 100;
		$scope.numberOfPrimesChange();
		expect($scope.primeTable.primes).toEqual([]);
	});
	
	it('should set the prime numbers 2, 3, and 5 when the user input is 3.', function() {
		$scope.primeTable.numberOfPrimes = 3;
		$scope.numberOfPrimesChange();
		expect($scope.primeTable.primes).toEqual([2,3,5]);
	});
	
	it('should set the prime numbers 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29 when the user input is 10.', function() {
		$scope.primeTable.numberOfPrimes = 10;
		$scope.numberOfPrimesChange();
		expect($scope.primeTable.primes).toEqual([2,3,5,7,11,13,17,19,23,29]);
	});
});