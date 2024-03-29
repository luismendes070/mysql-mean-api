var webdriver = require('selenium-webdriver');


describe('modes of failure', async function() {
  it('should fail to find a non-existent element', function() {
    await browser.get('index.html#/form');

    // Run this statement before the line which fails. If protractor is run
    // with the debugger (protractor debug debugging/conf.js), the test
    // will pause after loading the webpage but before trying to find the
    // element.
    browser.debugger();

    // This element doesn't exist, so this fails.
    var nonExistant = element(by.binding('nopenopenope')).getText();
  });

  it('should fail to click a hidden element', async function() {
    await browser.get('index.html#/form');
    element(by.id('hiddenbutton')).click();
  });

  it('should fail to use protractor on a non-Angular site', async function() {
    await browser.get('http://www.google.com');
  }, 20000);

  it('should fail within a promise', async function() {
    await browser.get('index.html#/form');
    var greeting = element(by.binding('greeting'));

    greeting.getText().then(function(text) {
      expect(text).toEqual('This is not what it equals');
    });
  });

  it('should fail an assertion', async function() {
    await browser.get('index.html#/form');

    var greeting = element(by.binding('greeting'));

    expect(greeting.getText()).toEqual('This is not what it equals');
  });

  it('should fail comparing a promise to another promise', function() {
    await browser.get('index.html#/form');

    var greeting = element(by.binding('greeting'));

    expect(greeting.getText()).toEqual(greeting.getAttribute('value'));
  });


  it('should fail because it throws an error', async function() {
    function foo() {
      throw new Error('bar!');
    }
    foo();
  });
});