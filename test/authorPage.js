/**
 * Created by skabir on 17.05.17.
 */
describe('author page ->',function(){

    var authorPage_obj;
    var browserName;
    browser.getProcessedConfig().then(function(config) {
        browserName = config.capabilities.browserName;
    });

    beforeEach(function(){
        authorPage_obj = require('../page/authorPage_obj.js');
    });

    it('load author page',function(){
        dvr.get(uni_var.authordPage_to_load);
    });

    it('No 404 or other error',function(){
        dvr.getCurrentUrl().then(function(url){
            room5_util.httpGet(url).then(function(result) {
                expect(result.statusCode).toBe(200);
            });
        });
    });

    it('check author name',function(){
        // expect(authorPage_obj.author_name().getText()).toBe(authorPage_obj.author_name_text);
        expect(authorPage_obj.author_name().getText().length).not.toEqual(0);
    });

    // it('check author image',function(){
    //     expect(authorPage_obj.author_image().isDisplayed()).toBe(true);
    // });

    it('check author description',function(){
        expect(authorPage_obj.author_description().getText().length).not.toEqual(0);
    });


    it('check author facebook link',function(){
        expect(authorPage_obj.author_social_network(0)).toContain("facebook.com");
    });

    it('check author instagram link',function(){
        expect(authorPage_obj.author_social_network(1)).toContain("instagram.com");
    });

    it('check author twitter link',function(){
        expect(authorPage_obj.author_social_network(2)).toContain("twitter.com");
    });

    it('check author pinterest link',function(){
        expect(authorPage_obj.author_social_network(3)).toContain("pinterest.com");
    });

    it('check "All article" title is available',function(){
        expect(authorPage_obj.author_title_header(1).getText().length).not.toEqual(0);

    });

    it('Initially number of article under all article',function(){
        authorPage_obj.number_of_article().then(function(numberOfArticle){
            expect(numberOfArticle).toBe(6);
        });
    });

    it('Click on load more button',function(){
        authorPage_obj.load_more_button().click();
        room5_util.wait_to_Visible(authorPage_obj.seventh_article());
        authorPage_obj.number_of_article().then(function(numberOfArticle){
            expect(numberOfArticle).toBeGreaterThan(6);
        });
    });

});