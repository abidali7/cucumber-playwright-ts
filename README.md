# cucumber-playwright-ts
This GitHub repository is dedicated for automated tests using the Cucumber framework and Playwright for web application testing. In this case, automated tests that cover scenario taken from a demo shopping cart application, where user can comple shopping cart journey.

## Prerequisites
* Node.js: tested and recommended version is v14.17.6, can be Install from http://nodejs.org/
* IDE (Integrated Development Environment): Any JavaScipt/TypeScript IDE like VS Code etc.

### Getting Started
1. Clone the repository
2. Go to project's root folder
3. Excute the following to intall all node modules
```bash
npm install
```

### Running Tests
Run test on local machine:
1. To start executing the tests locally, execute the 
```bash
npm test
```
2. To execute tests against a specific tag i.e. *npm test --TAGS=@smoke*
3. To execute tests on cloud platform i.e. Saucelabs, Browserstack etc. for this purpose enter your credentials for bcUser, bcKey, server in configs/browserCloud.json: BROWSER_CLOUD i.e. chrome_mac, webkit_mac etc.
```bash
npm test --BROWSER=browserCloud --BROWSER_CLOUD=chrome_mac  --TAGS=@userCart1
```

NOTE: currently there's connection issue b/w Playwright and Browserstack (not tried yet with Saucelabs)

### Reporting
Test reports can be found in the reports/ directory.