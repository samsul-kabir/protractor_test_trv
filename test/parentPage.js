/**
 * Created by skabir on 03.05.17.
 */
describe('parent page ->',function(){

    var parentPage_obj,childPage_obj;
    var browserName;
    var parent_title;
    browser.getProcessedConfig().then(function(config) {
        browserName = config.capabilities.browserName;
    });

    beforeEach(function(){
        parentPage_obj = require('../page/parentPage_obj.js');
        childPage_obj = require('../page/childPage_obj.js');
    });

    it('load parent page',function(){
        dvr.get(uni_var.parentPage_to_load);
    });

    it('No error',function(){
        dvr.getCurrentUrl().then(function(url){
            room5_util.httpGet(url).then(function(result) {
                expect(result.statusCode).toBe(200);
            });
        });
    });


    it('page header',function(){
        expect(parentPage_obj.page_header_text().length).not.toEqual(0);
    });

    it('feature article image',function(){
        expect(parentPage_obj.feature_article_image()).toContain('background-image');
    });

    it('feature article title',function(){
        expect(parentPage_obj.feature_article_title().length).not.toEqual(0);
    });

    it('number of article displaying right under feature article',function(){
        parentPage_obj.total_number_article_under_feature().then(function(val){
            expect(val).toBe(4);
        });
    });


    /*************************************************************************************/
    /**************************  this is for location#1 only ***************************/
    /*************************************************************************************/

    it('location#1 title',function(){
        parentPage_obj.child_country_title(0).getText().then(function(title){
            parent_title = title.toUpperCase();
        });
        expect(parentPage_obj.child_country_title(0).getText().length).not.toEqual(0);
    });

    it('article under location#1',function(){
        parentPage_obj.child_country_total_article(0).then(function(val){
            expect(val).not.toEqual(0);
        });
    });

    it('image is displaying for each article under location#1',function(){
        parentPage_obj.child_country_total_article(0).then(function(val){
            for(var i=0;i<val;i++){
                expect(parentPage_obj.child_country_article_image(0,i)).toContain('background-image');
            }
        });
    });

    it('tag is displaying for each article under location#1',function(){
        parentPage_obj.child_country_total_article(0).then(function(val){
            for(var i=0;i<val;i++){
                expect(parentPage_obj.child_country_article_destination_tag(0,i).length).not.toEqual(0);
            }
        });
    });

    it('title is displaying for each article under location#1',function(){
        parentPage_obj.child_country_total_article(0).then(function(val){
            for(var i=0;i<val;i++){
                expect( parentPage_obj.child_country_article_title(0,i).length).not.toEqual(0);
            }
        });
    });

    it('click on more about location#1 button',function(){
        parentPage_obj.destination_button(0).click();
        room5_util.wait_for_browser_to_load();
        expect(childPage_obj.page_header_text().getText()).toContain(parent_title);

        var url = dvr.getCurrentUrl();
            browser.navigate().back();
        room5_util.wait_for_page_to_load(url);
    });

    /*************************************************************************************/
    /**************************  this is for location#2 only ***************************/
    /*************************************************************************************/

    it('location#2 title',function(){
        parentPage_obj.child_country_title(1).getText().then(function(title){
            parent_title = title.toUpperCase();
        });
        expect(parentPage_obj.child_country_title(1).getText().length).not.toEqual(0);
    });

    it('article under location#2',function(){
        parentPage_obj.child_country_total_article(1).then(function(val){
            expect(val).not.toEqual(0);
        });
    });

    it('image is displaying for each article under location#2',function(){
        parentPage_obj.child_country_total_article(1).then(function(val){
            for(var i=0;i<val;i++){
                expect(parentPage_obj.child_country_article_image(1,i)).toContain('background-image');
            }
        });
    });

    it('tag is displaying for each article under location#2',function(){
        parentPage_obj.child_country_total_article(1).then(function(val){
            for(var i=0;i<val;i++){
                expect(parentPage_obj.child_country_article_destination_tag(1,i).length).not.toEqual(0);
            }
        });
    });

    it('title is displaying for each article under location#2',function(){
        parentPage_obj.child_country_total_article(1).then(function(val){
            for(var i=0;i<val;i++){
                expect( parentPage_obj.child_country_article_title(1,i).length).not.toEqual(0);
            }
        });
    });

    it('click on more about location#2 button',function(){
        parentPage_obj.destination_button(1).click();
        room5_util.wait_for_browser_to_load();
        expect(childPage_obj.page_header_text().getText()).toContain(parent_title);

        var url = dvr.getCurrentUrl();
            browser.navigate().back();
        room5_util.wait_for_page_to_load(url);
    });


    /*************************************************************************************/
    /**************************  this is for location#3 only ***************************/
    /*************************************************************************************/

    it('location#3 title',function(){
        parentPage_obj.child_country_title(2).getText().then(function(title){
            parent_title = title.toUpperCase();
        });
        expect(parentPage_obj.child_country_title(2).getText().length).not.toEqual(0);
    });

    it('article under location#3',function(){
        parentPage_obj.child_country_total_article(2).then(function(val){
            expect(val).not.toEqual(0);
        });
    });

    it('image is displaying for each article under location#3',function(){
        parentPage_obj.child_country_total_article(2).then(function(val){
            for(var i=0;i<val;i++){
                expect(parentPage_obj.child_country_article_image(2,i)).toContain('background-image');
            }
        });
    });

    it('tag is displaying for each article under location#3',function(){
        parentPage_obj.child_country_total_article(2).then(function(val){
            for(var i=0;i<val;i++){
                expect(parentPage_obj.child_country_article_destination_tag(2,i).length).not.toEqual(0);
            }
        });
    });

    it('title is displaying for each article under location#3',function(){
        parentPage_obj.child_country_total_article(2).then(function(val){
            for(var i=0;i<val;i++){
                expect( parentPage_obj.child_country_article_title(2,i).length).not.toEqual(0);
            }
        });
    });

    it('click on more about location#3 button',function(){
        parentPage_obj.destination_button(2).click();
        room5_util.wait_for_browser_to_load();
        expect(childPage_obj.page_header_text().getText()).toContain(parent_title);

        var url = dvr.getCurrentUrl();
            browser.navigate().back();
        room5_util.wait_for_page_to_load(url);
    });

    /*************************************************************************************/
    /**************************  this is for location#4 only ***************************/
    /*************************************************************************************/

    it('location#4 title',function(){
        parentPage_obj.child_country_title(3).getText().then(function(title){
            parent_title = title.toUpperCase();
        });
        expect(parentPage_obj.child_country_title(3).getText().length).not.toEqual(0);
    });

    it('article under location#4',function(){
        parentPage_obj.child_country_total_article(3).then(function(val){
            expect(val).not.toEqual(0);
        });
    });

    it('image is displaying for each article under location#4',function(){
        parentPage_obj.child_country_total_article(3).then(function(val){
            for(var i=0;i<val;i++){
                expect(parentPage_obj.child_country_article_image(3,i)).toContain('background-image');
            }
        });
    });

    it('tag is displaying for each article under location#4',function(){
        parentPage_obj.child_country_total_article(3).then(function(val){
            for(var i=0;i<val;i++){
                expect(parentPage_obj.child_country_article_destination_tag(3,i).length).not.toEqual(0);
            }
        });
    });

    it('title is displaying for each article under location#4',function(){
        parentPage_obj.child_country_total_article(3).then(function(val){
            for(var i=0;i<val;i++){
                expect( parentPage_obj.child_country_article_title(3,i).length).not.toEqual(0);
            }
        });
    });

    it('click on more about location#4 button',function(){
        parentPage_obj.destination_button(3).click();
        room5_util.wait_for_browser_to_load();
        expect(childPage_obj.page_header_text().getText()).toContain(parent_title);

        var url = dvr.getCurrentUrl();
            browser.navigate().back();
        room5_util.wait_for_page_to_load(url);
    });

    /*************************************************************************************/
    /**************************  this is for location#5 only ***************************/
    /*************************************************************************************/

    it('location#5 title',function(){
        parentPage_obj.child_country_title(4).getText().then(function(title){
            parent_title = title.toUpperCase();
        });
        expect(parentPage_obj.child_country_title(4).getText().length).not.toEqual(0);
    });

    it('article under location#5',function(){
        parentPage_obj.child_country_total_article(4).then(function(val){
            expect(val).not.toEqual(0);
        });
    });

    it('image is displaying for each article under location#5',function(){
        parentPage_obj.child_country_total_article(4).then(function(val){
            for(var i=0;i<val;i++){
                expect(parentPage_obj.child_country_article_image(4,i)).toContain('background-image');
            }
        });
    });

    it('tag is displaying for each article under location#5',function(){
        parentPage_obj.child_country_total_article(4).then(function(val){
            for(var i=0;i<val;i++){
                expect(parentPage_obj.child_country_article_destination_tag(4,i).length).not.toEqual(0);
            }
        });
    });

    it('title is displaying for each article under location#5',function(){
        parentPage_obj.child_country_total_article(4).then(function(val){
            for(var i=0;i<val;i++){
                expect( parentPage_obj.child_country_article_title(4,i).length).not.toEqual(0);
            }
        });
    });

    it('click on more about location#5 button',function(){
        parentPage_obj.destination_button(4).click();
        room5_util.wait_for_browser_to_load();
        expect(childPage_obj.page_header_text().getText()).toContain(parent_title);

        var url = dvr.getCurrentUrl();
            browser.navigate().back();
        room5_util.wait_for_page_to_load(url);
    });

    /*************************************************************************************/
    /**************************  this is for other article ***************************/
    /*************************************************************************************/

    it('other article title',function(){
        expect(parentPage_obj.other_article_europe_title(14).length).not.toEqual(0);

    });

    it('article under other article section at first',function(){
        parentPage_obj.total_number_other_article_europe().then(function(val){
            expect(val).toBe(6);
        });
    });

    it('article after click on load more',function(){
        parentPage_obj.load_more_button().click();

        browser.wait(function() {
            return parentPage_obj.total_number_other_article_europe().then(function (val) {
                //console.log(changed_url);
                return val !== "" && val !== 6;
            });
        },10000);

        parentPage_obj.total_number_other_article_europe().then(function(val){
            expect(val).toBe(12);
        });
    });

    it('article after click on load more second time',function(){
        parentPage_obj.load_more_button().click();

        browser.wait(function() {
            return parentPage_obj.total_number_other_article_europe().then(function (val) {
                //console.log(changed_url);
                return val !== "" && val !== 12;
            });
        },10000);

        parentPage_obj.total_number_other_article_europe(14).then(function(val){
            //console.log(val);
            expect(val).toBeGreaterThan(12);
        });
    });
});