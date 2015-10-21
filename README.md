# Prime Tables

## How to run the Prime Tables app?

### Running the app during development

- Run `npm start`
- Navigate your browser to `http://localhost:8000/app/index.html` to see the app running in your browser.

### Running the unit tests

- Start Karma with `npm test`
  - A browser will start and connect to the Karma server. Chrome is the default browser, others can
  be captured by loading the same url as the one in Chrome or by changing the `test/karma.conf.js`
  file.
- Karma will sit and watch your application and test JavaScript files. To run or re-run tests just
  change any of your these files.


###Running End 2 End Testing (Protractor)

- To run the end-2-end tests against the application you use [Protractor](https://github.com/angular/protractor).

#### Starting the Web Server

- In either case you will need the application to be running via the web-server.
- From the root folder of the repository run: `npm start`
- The application should now be available at `http://localhost:8000/app/index.html`

#### Testing with Protractor

- As a one-time setup, download webdriver: `npm run update-webdriver`
- Start the Protractor test runner using the e2e configuration: `npm run protractor`

## What am I pleased with? 

- The well defined architecture with clear responsibilities and easily substitutional instances, allowing the for the app to be easily maintained and extended.
- Using TDD to enforce the specification and reduce complexity.
- Clean and simple user interface with well defined HTML and reactive controls.
- Defining an efficient prime algorithm which can be used past the current maximum of 10 prime numbers.
- Improving the prime algorithm runtime efficiency (validated using unit test execution times - which improved by ~0.01 seconds per test) by initially checking against the 2 and 3 multiples, then testing up to the prime square root with divisors that are not multiples of 2 or 3.
- Using and learning more about the AngularJS library.

## What would I do if I had more time?

- Extend the solution further to use dependency injection with inheritance so that you could for example determine which 'Number Service' to use at runtime either a 'Prime Number Service' or 'Fibonacci Number Service', or through different child controls either a 'Prime Table Controller' or a 'Fibonacci Table Controller'.
- Setup a continuous integration service which would validate the unit tests against all code request changes, detect coding rule violations through JSHint and perform benchmark runtime tests.