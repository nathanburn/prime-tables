'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Prime Table App', function() {

	describe('Prime Table View', function() {

		var primes, numberOfPrimes;

		beforeEach(function() {
			browser.get('app/index.html');

			primes = element.all(by.repeater('prime in primeTable.primes'));
			numberOfPrimes = element(by.model('primeTable.numberOfPrimes'));
		});

		it('should create table for the first prime multiple', function() {
			numberOfPrimes.sendKeys('1');
			expect(primes.count()).toBe(1);
			expect($('.error').isDisplayed()).toBeFalsy();
		});

		it('should create table for the first 2 prime multiples', function() {
			numberOfPrimes.sendKeys('2');
			expect(primes.count()).toBe(4);
			expect($('.error').isDisplayed()).toBeFalsy();
		});

		it('should create table for the first 10 prime multiples', function() {
			numberOfPrimes.sendKeys('10');
			expect(primes.count()).toBe(100);
			expect($('.error').isDisplayed()).toBeFalsy();
		});

		it('should show an error message for an invalid input', function() {
			numberOfPrimes.sendKeys('test');
			expect(primes.count()).toBe(0);
			expect($('.error').isDisplayed()).toBeTruthy();
		});

		it('should show an error message for a input which is below the minimum number', function() {
			numberOfPrimes.sendKeys('0');
			expect(primes.count()).toBe(0);
			expect($('.error').isDisplayed()).toBeTruthy();
		});

		it('should show an error message for a input which exceeds the maximum number', function() {
			numberOfPrimes.sendKeys('11');
			expect(primes.count()).toBe(0);
			expect($('.error').isDisplayed()).toBeTruthy();
		});
	});
 });