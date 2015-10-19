module.exports = function(config){
	config.set({

		basePath : '../',

		files : [
			'http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js',
			'http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular-mocks.js',
			'app/js/**/*.js',
			'test/unit/**/*.js'
		],

		autoWatch : true,

		frameworks: ['jasmine'],

		browsers : ['Chrome'],

		plugins : [
			'karma-chrome-launcher',
			'karma-jasmine'
		],

		junitReporter : {
			outputFile: 'test_out/unit.xml',
			suite: 'unit'
		}
	});
};