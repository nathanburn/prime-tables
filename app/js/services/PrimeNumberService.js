'use strict';

/* Prime Number Service - Factory */

var services = angular.module('primeTableApp.services', []);

services.factory('PrimeNumberService', function() {
	return {                                                
		isPrimeNumber: function(value) {
			// TODO - Implement Me
			return false;
		},
		getPrimeNumbers: function(value) {
			// TODO - Implement Me
			return [];
		}
	}
});