/**
 * Created by skabir on 06.09.17.
 */

describe('tracking suite ->',function(){

    var browserName;
    var tracking_suite_obj,homepage_obj,article_obj;

    /**
     * This return the current browser
     * where automation is running.
     */

    beforeEach(function () {
        tracking_suite_obj = require('../page/tracking_suite_obj.js');
    });

    browser.getProcessedConfig().then(function(config) {
        browserName = config.capabilities.browserName;
    });

    it('Loading homepage',function () {
        dvr.get(uni_var.baseUrl);
    });

    it('CIP on first load',function () {
        tracking_suite_obj.homepage_cip().then(function(cip){
            expect(cip).toBe(tracking_suite_obj.first_cip);
        });
    });

    it('initial_CIP on first load is 0',function () {
        tracking_suite_obj.homepage_initial_cip().then(function(initial_cip){
            expect(initial_cip).toBe('0');
        });
    });

    it('initial_CIP on reload is CIP',function () {
        browser.refresh();
        tracking_suite_obj.homepage_initial_cip().then(function(initial_cip){
            expect(initial_cip).toBe(tracking_suite_obj.first_cip);
        });
    });

    it('Custom CIP is updating pixel',function () {
        dvr.get(uni_var.baseUrl+'?cip=test');
        tracking_suite_obj.homepage_cip().then(function(cip){
            expect(cip).toBe('test');
        });
    });

    it('content type on homepage is 1',function () {
        tracking_suite_obj.homepage_content_type().then(function(content_type){
            expect(content_type).toBe('1');
        });
    });

    it('pixel type on homepage is 1',function () {
        tracking_suite_obj.homepage_pixel_type().then(function(pixel_type){
            expect(pixel_type).toBe('1');
        });
    });

    it('href lang has correct url',function () {
        var j=0;
        for(i = 0;i <= 19; i++){
            tracking_suite_obj.href(i).then(function(href){
                expect(href).toBe(tracking_suite_obj.href_link[j]);
                j++;
            });
        }
    });

    it('canonical has base url',function () {
        expect(tracking_suite_obj.rel_canonical()).toBe(uni_var.baseUrl);
    });

    it('only one title tage is there',function () {
        tracking_suite_obj.total_no_of_title_tag().then(function(total_no_of_title_tag){
            expect(total_no_of_title_tag).toBe(1);
        });
    });

    it('title tage is not empty',function () {
        expect(tracking_suite_obj.title_tag().length).not.toEqual(0);
    });

    it('taxonomy CIP is test',function () {
        homepage_obj = require('../page/homepage_obj.js');
        homepage_obj.first_article_tag().then(function(elem){
            elem.click();
        });
        room5_util.wait_for_browser_to_load();
        tracking_suite_obj.taxonomy_cip().then(function(cip){
            expect(cip).toBe('test');
        });
    });

    it('taxonomy content type is 2',function () {
        tracking_suite_obj.taxonomy_content_type().then(function(content_type){
            expect(content_type).toBe('2');
        });
    });

    it('taxonomy pixel type is 1',function () {
        tracking_suite_obj.taxonomy_pixel_type().then(function(pixel_type){
            expect(pixel_type).toBe('1');
        });
    });

    // it('article page cip is test',function () {
    //     //article_obj = require('../page/article_obj.js');
    //     dvr.get(uni_var.article_to_test);
    //     // room5_util.sleep_time_xl();
    //     // // $$('#content > div > div > section > img').then(function(elem){
    //     // //     console.log(elem.length);
    //     // //     console.log(elem);
    //     // // });
    //     // // room5_util.sleep_time_m();
    //     // tracking_suite_obj.article_cip(0,0).then(function(cip){
    //     //     expect(cip).toBe('test');
    //     // });
    // });
    //
    // it('scroll 25%',function () {
    //     article_obj = require('../page/article_obj.js');
    //     article_obj.trackScroll_to(3.8,0);
    //     // room5_util.sleep_time_l();
    //     // $$('#content > div > div > section > img').then(function(elem){
    //     //     console.log(elem.length);
    //     //     console.log(elem);
    //     // });
    //     // browser.debugger();
    //     room5_util.sleep_time_m();
    //     // room5_util.wait_to_Visible(tracking_suite_obj.article_scroll_element(0,1));
    //     // tracking_suite_obj.article_scroll(0,1).then(function(scroll){
    //     //     expect(scroll).toBe('25%');
    //     // });
    //     tracking_suite_obj.article_cip(0,0).then(function(cip){
    //         expect(cip).toBe('test');
    //     });
    // });
    //
    // it('scroll 50%',function () {
    //     article_obj = require('../page/article_obj.js');
    //     article_obj.trackScroll_to(2,0);
    //     //room5_util.sleep_time_m();
    //     // tracking_suite_obj.article_scroll(0,2).then(function(scroll){
    //     //     expect(scroll).toBe('50%');
    //     // });
    //     tracking_suite_obj.article_scroll(0,1).then(function(scroll){
    //         expect(scroll).toBe('25%');
    //     });
    // });

    // it('scroll 75%',function () {
    //     article_obj = require('../page/article_obj.js');
    //     article_obj.trackScroll(1.333333333333,75,0);
    //     room5_util.sleep_time_s();
    //     tracking_suite_obj.article_scroll(0,3).then(function(scroll){
    //         expect(scroll).toBe('75%');
    //     });
    // });
    //
    // it('scroll 100%',function () {
    //     article_obj = require('../page/article_obj.js');
    //     article_obj.trackScroll(1,100,0);
    //     room5_util.sleep_time_s();
    //     tracking_suite_obj.article_scroll(0,4).then(function(scroll){
    //         expect(scroll).toBe('100%');
    //     });
    // });

});