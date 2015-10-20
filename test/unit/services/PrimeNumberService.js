'use strict';

/* Prime Number Service - Unit Tests */

describe('PrimeNumberService', function (){
	var PrimeNumberService;

	beforeEach(function (){
		module('primeTableApp');

		inject(function(_PrimeNumberService_) {
			PrimeNumberService = _PrimeNumberService_;
		});
	});

	describe('isPrimeNumber', function() {
		it('should exist as a function', function () { 
			expect(angular.isFunction(PrimeNumberService.isPrimeNumber)).toBe(true);
		});

		it('should return false for no parameter', function (){
			var result = PrimeNumberService.isPrimeNumber();
			expect(result).toBe(false);
		});
		
		it('should return false for a string', function (){
			var result = PrimeNumberService.isPrimeNumber('test');
			expect(result).toBe(false);
		});
		
		it('should return false for 1', function (){
			var result = PrimeNumberService.isPrimeNumber(1);
			expect(result).toBe(false);
		});
		
		it('should return true for 2', function (){
			var result = PrimeNumberService.isPrimeNumber(2);
			expect(result).toBe(true);
		});
		
		it('should return true for 3', function (){
			var result = PrimeNumberService.isPrimeNumber(3);
			expect(result).toBe(true);
		});
		
		it('should return false for 4', function (){
			var result = PrimeNumberService.isPrimeNumber(4);
			expect(result).toBe(false);
		});
		
		it('should return true for 5', function (){
			var result = PrimeNumberService.isPrimeNumber(5);
			expect(result).toBe(true);
		});
		
		it('should return true for 79', function (){
			var result = PrimeNumberService.isPrimeNumber(79);
			expect(result).toBe(true);
		});

		it('should return false for 100', function (){
			var result = PrimeNumberService.isPrimeNumber(100);
			expect(result).toBe(false);
		});

		it('should return false for 10.4', function (){
			var result = PrimeNumberService.isPrimeNumber(10.4);
			expect(result).toBe(false);
		});

		it('should return true for 7.1', function (){
			var result = PrimeNumberService.isPrimeNumber(7.1);
			expect(result).toBe(true);
		});
	});
	
	describe('getPrimeNumbers', function() {
		it('should exist as a function', function () { 
			expect(angular.isFunction(PrimeNumberService.getPrimeNumbers)).toBe(true);
		});

		it('should return an empty array for no parameter', function (){
			var result = PrimeNumberService.getPrimeNumbers();
			expect(result).toEqual([]);
		});
		
		it('should return an empty array for a string', function (){
			var result = PrimeNumberService.getPrimeNumbers('test');
			expect(result).toEqual([]);
		});
		
		it('should return [2] for 1', function (){
			var result = PrimeNumberService.getPrimeNumbers(1);
			expect(result).toEqual([2]);
		});
		
		it('should return [2,3,5] for 3', function (){
			var result = PrimeNumberService.getPrimeNumbers(3);
			expect(result).toEqual([2,3,5]);
		});
		
		it('should return [2,3,5,7,11,13,17,19,23,29] for 10', function (){
			var result = PrimeNumberService.getPrimeNumbers(10);
			expect(result).toEqual([2,3,5,7,11,13,17,19,23,29]);
		});
	});
});