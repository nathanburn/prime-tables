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
  
## What am I pleased with? 

- The well defined architecture with clear responsibilities and easily substitutional instances, allowing the for the app to be easily maintained and extended.
- Using TDD to enforce the specification and reduce complexity.
- Clean and simple user interface with well defined HTML and reactive controls.
- Using and learning more about the AngularJS library.

## What would I do if I had more time?

- Extend the solution further to use dependency injection with inheritence so that you could for example determine which 'Number Service' to use at runtime either a 'Prime Number Service' or 'Fibonacci Number Service', or through different child controls either a 'Prime Table Controller' or a 'Fibonacci Table Controller'.