'use strict';

/* Prime Number Service - Service */

var services = angular.module('primeTableApp.services', []);

services.service('PrimeNumberService', function() {
	this.isPrimeNumber = function(value) {
		if(angular.isNumber(value)
			&& value > 1) {
			var number = parseInt(value);
			if(number % 2 === 0
				|| number % 3 === 0) {
				return (number === 2
					|| number === 3);
			}
			var numberSqrt = Math.sqrt(number);
			for (var i = 5; i <= numberSqrt; i+=6) {
				if (number % i === 0
					|| number %(i+2) === 0) {
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