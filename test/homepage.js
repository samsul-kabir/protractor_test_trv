

describe('Homepage ->', function () {
    var homepage_obj;
    var browserName;
    browser.getProcessedConfig().then(function(config) {
        browserName = config.capabilities.browserName;
    });

    beforeEach(function () {
        homepage_obj = require('../page/homepage_obj.js');
    });

    // afterEach(function () {
    //     browser.manage().logs().get('browser').then(function (browserLog) {
    //      //   expect(browserLog.length).toEqual(0);
    //         if (browserLog.length) {
    //             console.error('log: ' + JSON.stringify(browserLog));
    //         }
    //     });
    // });

    it('is displaying editorial pick title',function () {
        expect(homepage_obj.editorial_pick().getText().length).not.toEqual(0);
    });

    it('total number of article in the editoial pick is 4',function () {
        homepage_obj.number_article_editorial_pick().then(function(num){
                expect(num).toBe(4);
            });
    });

    it('displaying image of the first article in the editorial pick',function () {
        homepage_obj.image_first_article_editorial_pick().then(function(attr){
            expect(attr).toContain('background-image: url');
        });
    });

    it('displaying tag of the first article in the editorial pick',function () {
        homepage_obj.tag_first_article_editorial_pick().then(function(num){
            expect(num).not.toEqual(0);
        });
    });

    it('displaying title of the first article in the editorial pick',function () {
        expect(homepage_obj.title_first_article_editorial_pick().getText().length).not.toEqual(0);
    });

    it('displaying description of the first article in the editorial pick',function () {
        expect(homepage_obj.summary_first_article_editorial_pick().getText().length).not.toEqual(0);
    });


    it('displaying summer trends banner',function () {
        homepage_obj.summer_trend_banner().then(function(href){
            expect(href).toBe(uni_var.baseUrl + 'summer-travel-trends');
        });
    });

    it('displaying most popular title',function () {
        expect(homepage_obj.title_of_module(0).getText().length).not.toEqual(0);
    });

    it('total number of post under most popular title is 3',function () {
        homepage_obj.number_post_most_popular().then(function(number){
            expect(number).toEqual(3);
        });
    });

    it('displaying trivago advice calendar banner',function () {
        homepage_obj.tac_banner().then(function(href){
            expect(href).toBe(uni_var.baseUrl + 'tac');
        });
    });

    it('displaying latest article title',function () {
        expect(homepage_obj.title_of_module(1).getText().length).not.toEqual(0);
    });

    it('total number of post under latest popular title is 6',function () {
        homepage_obj.number_post_latest_popular().then(function(number){
            expect(number).toEqual(6);
        });
    });

    it('total number of post under inspiration is 9',function () {
        homepage_obj.number_post_inspiration().then(function(number){
            expect(number).toEqual(9);
        });
    });

    // it('Click on theme', function () {
    //     var url = dvr.getCurrentUrl();
    //         //homepage_obj.alle_theme_button().click();
    //         browser.executeScript("arguments[0].click();",homepage_obj.alle_theme_button());
    //     room5_util.wait_for_page_to_load(url);
    //
    //     expect(dvr.getCurrentUrl()).toBe(uni_var.baseUrl + homepage_obj.url_alle_theme);
    //
    //     url = dvr.getCurrentUrl();
    //         browser.navigate().back();
    //     room5_util.wait_for_page_to_load(url);
    // });
    //
    // it('total number of post under inspiration is 9',function () {
    //     homepage_obj.number_post_destination().then(function(number){
    //         expect(number).toEqual(9);
    //     });
    // });
    //
    // it('Click on all destination', function () {
    //     var url = dvr.getCurrentUrl();
    //         //homepage_obj.alle_destination_button().click();
    //         browser.executeScript("arguments[0].click();",homepage_obj.alle_destination_button());
    //     room5_util.wait_for_page_to_load(url);
    //
    //     expect(dvr.getCurrentUrl()).toBe(uni_var.baseUrl + homepage_obj.url_alle_destination);
    //
    //     url = dvr.getCurrentUrl();
    //     browser.navigate().back();
    //     room5_util.wait_for_page_to_load(url);
    // });
});



