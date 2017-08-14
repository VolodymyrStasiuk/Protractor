describe('Test Suit cms2cms authorization', function() {

	it('test signUp', function() {
	
		browser.ignoreSynchronization = true;
		browser.driver.get('https://app.cms2cms.com/auth');
		
		browser.driver.findElement(by.id('signUpEmail')).sendKeys('tester@gmail.com');		
		browser.driver.findElement(by.id('signUpPassword')).sendKeys('password123');
		browser.driver.findElement(by.id('signUpName')).sendKeys('Jone Doe');
		browser.driver.findElement(by.id('signUpPhone')).sendKeys('12345678');
		browser.driver.findElement(by.className('btn btn-default')).click();
		
		var EC = protractor.ExpectedConditions;
		browser.wait(EC.titleIs('Migration Dashboard - CMS2CMS'), 9000);
		
		});	

	it('test  if checked already registered email address', function() {
	
		browser.ignoreSynchronization = true;
		browser.driver.get('https://app.cms2cms.com/auth');
		
		browser.driver.findElement(by.id('signUpEmail')).sendKeys('tester@gmail.com');		
		browser.driver.findElement(by.id('signUpPassword')).sendKeys('password123');
		browser.driver.findElement(by.id('signUpName')).sendKeys('Jone Doe');
		browser.driver.findElement(by.id('signUpPhone')).sendKeys('12345678');
		browser.driver.findElement(by.className('btn btn-default')).click();
		
		var EC = protractor.ExpectedConditions;
		var ele = element(by.id('signUpEmail-error'));
		browser.wait(EC.presenceOf(ele), 9000);
		
		});

	it('test case login with Google+', function() {
	
		browser.ignoreSynchronization = true;
		browser.driver.get('https://app.cms2cms.com/auth');
		
		browser.driver.findElement(by.className('google-plus soc-sprite')).click();
		browser.driver.findElement(by.id('identifierId')).sendKeys('teststasiuk@gmail.com');
		browser.driver.findElement(by.className('RveJvd snByac')).click();
		browser.driver.findElement(by.className('whsOnd zHQkBf')).sendKeys('never_give1up');
		browser.driver.findElement(by.className('RveJvd snByac')).click();
		
		
		var EC = protractor.ExpectedConditions;
		var ele = element(by.className('btn btn-dashboard-sm btn-success'));
		browser.wait(EC.presenceOf(ele), 5000);
		
		});	
		
	it('test case login', function() {
	
		browser.ignoreSynchronization = true;
		browser.driver.get('https://app.cms2cms.com/auth');
		
		browser.driver.findElement(by.className('auth-sign-in')).click();
		browser.driver.findElement(by.id('SignInEmail')).sendKeys('tester1@gmail.com');
		browser.driver.findElement(by.id('SignInPassword')).sendKeys('password123');
		var	but = element(by.buttonText('Sign In'));
		but.click();

		var EC = protractor.ExpectedConditions;
		var ele = element(by.className('btn btn-dashboard-sm btn-success'));
		browser.wait(EC.presenceOf(ele), 5000);
		
		});	
		
	it('test case login incorrect credentials', function() {
	
		browser.ignoreSynchronization = true;
		browser.driver.get('https://app.cms2cms.com/auth');
		
		browser.driver.findElement(by.className('auth-sign-in')).click();
		browser.driver.findElement(by.id('SignInEmail')).sendKeys('tester1@gmail.com');
		browser.driver.findElement(by.id('SignInPassword')).sendKeys('password');
		var	but = element(by.buttonText('Sign In'));
		but.click();

		var EC = protractor.ExpectedConditions;
		var ele = element(by.id('SignInEmail-error'));
		browser.wait(EC.presenceOf(ele), 9000);
		
		});	
		
		
		
	});