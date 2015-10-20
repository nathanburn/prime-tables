'use strict';

/* Prime Number Service - Service */

var services = angular.module('primeTableApp.services', []);

services.service('PrimeNumberService', function() {
	this.isPrimeNumber = function(value) {
		if(angular.isNumber(value)
			&& value > 1) {
			var number = parseInt(value);
			for(var i = 2; i < number; i++) {
				if(number % i == 0) {
					return false;
				}
			}
			return true;
		}
		return false;
	},
	this.getPrimeNumbers = function(value) {
		var primeNumbers = [];
		if(angular.isNumber(value)) {
			var numberOfPrimes = parseInt(value);
			var count = 2;
			while(primeNumbers.length < numberOfPrimes) {
				if(this.isPrimeNumber(count)) {
					primeNumbers.push(count)
				}
				count++;
			}
		}
		return primeNumbers;
	}
});