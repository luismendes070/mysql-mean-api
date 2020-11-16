/**
* Refer: [here](https://github.com/SeleniumHQ/selenium/blob/master/javascript/node/selenium-webdriver/example/google_search_test.js)
*/
const {Builder, By, until} = require('selenium-webdriver');
const test = require('../testing');

test.describe('App Name Google Search', function() {
  let driver;

  test.before(function *() {
    driver = yield new Builder().forBrowser('firefox').usingServer('http://localhost:4444/wd/hub').build();
  });

  test.it('works with generators', function*() {
    yield driver.get('http://www.google.com/ncr');
    yield driver.findElement(By.name('q')).sendKeys('webdriver');
    yield driver.findElement(By.name('btnG')).click();
    yield driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  });

  test.after(() => driver.quit());
});