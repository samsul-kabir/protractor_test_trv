

/**
 * Created by skabir on 15.05.17.
 */
describe('grand child page ->',function(){

    var grandChildPage_obj;
    var browserName;
    browser.getProcessedConfig().then(function(config) {
        browserName = config.capabilities.browserName;
    });

    beforeEach(function(){
        grandChildPage_obj = require('../page/grandChildPage_obj.js');
    });

    it('load child page',function(){
        dvr.get(uni_var.grandChildPage_to_load);
    });

    it('No 404 or other error',function(){
        dvr.getCurrentUrl().then(function(url){
            room5_util.httpGet(url).then(function(result) {
                expect(result.statusCode).toBe(200);
            });
        });
    });

    it('page header',function(){
        expect(grandChildPage_obj.page_header_text().length).not.toEqual(0);
    });

    it('feature article image',function(){
        expect(grandChildPage_obj.feature_article_image()).toContain('background-image');
    });

    it('feature article tag',function(){
        expect(grandChildPage_obj.feature_article_tag().length).not.toEqual(0);

    });

    it('feature article description',function(){
        expect(grandChildPage_obj.feature_article_description().length).not.toEqual(0);
    });

    it('feature article title',function(){
        expect(grandChildPage_obj.feature_article_title().length).not.toEqual(0);
    });

    it('number of article displaying right under feature article',function(){
        grandChildPage_obj.total_number_article_under_feature().then(function(article_number){
                    expect(article_number).toBe(4);
        });
    });


    /*************************************************************************************/
    /**************************  this is for other article ***************************/
    /*************************************************************************************/

    it('other article title',function(){
        expect(grandChildPage_obj.other_article_title().length).not.toEqual(0);
    });

    it('article under other article section at first',function(){
        grandChildPage_obj.total_number_of_article_under_other().then(function(val){
            expect(val).toBe(6);
        });
    });

    it('article after click on load more',function(){
        grandChildPage_obj.load_more_button().click();

        browser.wait(function() {
            return grandChildPage_obj.total_number_of_article_under_other().then(function (val) {
                //console.log(changed_url);
                return val !== "" && val !== 6;
            });
        },10000);

        grandChildPage_obj.total_number_of_article_under_other().then(function(val){
            expect(val).toBeGreaterThan(6);
        });
    });

});