/**
 * Created by skabir on 02.05.17.
 */

describe('Load homepage ->',function(){

    var browserName;

    /**
     * This return the current browser
     * where automation is running.
     */
    browser.getProcessedConfig().then(function(config) {
        browserName = config.capabilities.browserName;
    });


    // afterEach(function() {
    //     browser.executeScript('window.sessionStorage.clear();');
    //     browser.executeScript('window.localStorage.clear();');
    // });

    // afterEach(function () {
    //     browser.manage().logs().get('browser').then(function (browserLog) {
    //        // expect(browserLog.length).toEqual(0);
    //         if (browserLog.length) {
    //             console.log('log: ' + JSON.stringify(browserLog));
    //         }
    //     });
    // });

    it('Loading homepage',function () {
        dvr.get(uni_var.baseUrl);
    });

    it('should return 200 and contain proper body', function() {
        dvr.getCurrentUrl().then(function(url){
            console.log(url);
            room5_util.httpGet(url).then(function(result) {
                console.log(result.statusCode);
                dvr.sleep(2000);
                expect(result.statusCode).toBe(200);
                // expect(result.bodyString).toContain('Apache');
            });
        });
    });

    it('accept cookies',function () {
        element(By.id("cn-accept-cookie")).click();

    });
});