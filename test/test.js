
describe('Testing room5 navigation',function(){

    it('Go to homepage',function(){
        browser.driver.get("http://stage.room5.trivago.com/guenstig-reisen-wann-wohin/");
        browser.driver.sleep(3000);
    });

    // it('Click on menu',function(){
    //     var check = "Hello";
    //     browser.driver.findElement(by.css(".ng-pristine.ng-valid")).sendKeys(check);
    //     browser.driver.sleep(1000);
    //     expect(browser.driver.findElement(by.css(".ng-binding")).getText()).toBe(check);
    //
    // });

    it('Click on menu',function(){
        // browser.executeScript('browser.findElement(by.css(".global-wrapper")).scrollTo(0,arguments[0]);',1000);

        browser.executeScript('document.querySelector(".global-wrapper" ).scrollTop = 500;',1000);
        // browser.driver.findElement(by.css(".global-wrapper")).then(function(elem){
        //     console.log(elem);
        //     //browser.executeScript('console.log(arguments[0])',elem);
        // });
        browser.driver.sleep(10000);
        // nav_menu.DEUTSCHLAND();
        // browser.driver.sleep(5000);
        // expect(browser.driver.getCurrentUrl()).toBe("http://stage.room5.trivago.com/destination/europa/country/deutschland/");
    });
});


    describe('A suite',function(){

        it('Continue spec with a spectation',function(){
            expect(true).toBe(true);
        });

    });
