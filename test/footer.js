

/**
 * Created by skabir on 18.04.17.
 */
describe('footer ->', function () {
    var footer_obj;
    var platformName;
    var browserName;

    /**
     * This return the current browser
     * where automation is running.
     */
    browser.getProcessedConfig().then(function(config) {
        browserName = config.capabilities.browserName;
    });

    beforeEach(function () {
        footer_obj = require('../page/footer_obj.js');
    });

    browser.getProcessedConfig().then(function(config) {
        platformName = config.capabilities.platformName;
    });

    // afterEach(function () {
    //     browser.manage().logs().get('browser').then(function (browserLog) {
    //         //   expect(browserLog.length).toEqual(0);
    //         if (browserLog.length) {
    //             console.error('log: ' + JSON.stringify(browserLog));
    //         }
    //     });
    // });

    it('click on about room5',function () {
        footer_obj.footer_menu(0).click();
        if (browserName == 'safari'){
            footer_obj.openNewTab_partialURL_safari(uni_var.baseUrl + "about-us/");
        } else {
            footer_obj.openNewTab_partialURL(uni_var.baseUrl + "about-us/");
        }
    });

    it('click on contact',function () {
        footer_obj.footer_menu(1).click();
        if (browserName == 'safari'){
            footer_obj.openNewTab_partialURL_safari("contact/");
        } else {
            footer_obj.openNewTab_partialURL("contact/");
        }
    });

    it('click on mobile app',function () {
        footer_obj.footer_menu(2).click();
        footer_obj.openNewTab_partialURL("http://company.trivago" + uni_var.baseLocal +"mobile/");
    });


    it('click on cookie policy',function () {
        footer_obj.footer_menu(3).click();
        footer_obj.openNewTab_partialURL(uni_var.baseUrl + "cookie-policy/");
    });

    it('click on Impressum',function () {
        footer_obj.footer_menu(4).click();
        footer_obj.openNewTab_partialURL("http://company.trivago" + uni_var.baseLocal +"editorial/");
    });

    it('click on trivago',function () {
        footer_obj.footer_menu(5).click();
        footer_obj.openNewTab_partialURL("https://www.trivago" + uni_var.baseLocal);
    });

    it('click on facebook',function () {
        footer_obj.facebook_footer.click();
        footer_obj.openNewTab_partialURL("facebook.com/trivago");
    });

    it('click on twitter',function () {
        footer_obj.twitter_footer.click();
        footer_obj.openNewTab_partialURL("twitter.com");
    });

    it('click on pinterest',function () {
        var pinterest = $(".social-icons-footer").$$(".icon-container").get(2).element(by.tagName('a'));
        pinterest.getAttribute('href').then(function(attr){
            expect(attr).toContain('pinterest.com');
        });
    });

    it('click on instagram',function () {
        footer_obj.instagrum_footer.click();
        footer_obj.openNewTab_partialURL("instagram.com");
    });

    it('verify selected country in country drop-down',function () {
        expect(footer_obj.country_dropdown().$('option:checked').getText()).toBe(uni_var.baseCountry);
    });

    it('choose another country from drop-down',function () {

        footer_obj.country_dropdown().all(By.tagName('option')).get(3).click();
        dvr.getCurrentUrl().then(function(url){
            expect(url).toBe("http://room5.trivago.fr/");
        });

        dvr.getCurrentUrl().then(function(url){
            room5_util.httpGet(url).then(function(result) {
                expect(result.statusCode).toBe(200);
            });
        });

        var url = dvr.getCurrentUrl();
        browser.navigate().back();
        room5_util.wait_for_page_to_load(url);
    });

});






