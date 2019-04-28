
/**
 * Created by skabir on 15.05.17.
 */
describe('child page ->',function(){

    var childPage_obj;
    var browserName;
    browser.getProcessedConfig().then(function(config) {
        browserName = config.capabilities.browserName;
    });

    beforeEach(function(){
        childPage_obj = require('../page/childPage_obj.js');
    });

    it('load child page',function(){
        dvr.get(childPage_obj.childPage_to_load);
        dvr.sleep(sleep);
        dvr.getCurrentUrl().then(function(url){
            room5_util.httpGet(url).then(function(result) {
                expect(result.statusCode).toBe(200);
            });
        });
    });

    it('page header',function(){
        expect(childPage_obj.page_header_text().getText().length).not.toEqual(0);
    });

    it('feature article image',function(){
        expect(childPage_obj.feature_article_image()).toContain('background-image');
    });

    it('feature article title',function(){
        expect(childPage_obj.feature_article_title().getText().length).not.toEqual(0);
    });

    it('number of article displaying right under feature article',function(){
        childPage_obj.total_number_article_under_feature().then(function(val){
            expect(val).toBe(3);
        });
    });


    /*************************************************************************************/
    /**************************  this is for Bayern only ***************************/
    /*************************************************************************************/


    it('Bayern title',function(){
        // childPage_obj.child_country_title(3).then(function(text){
        //     if(browserName == 'safari'){
        //         expect(text).toBe(childPage_obj.bayern_title_text_safari);
        //     }else{
        //         expect(text).toBe(childPage_obj.bayern_title_text);
        //     }
        // });

        expect(childPage_obj.child_country_title(3).getText().length).not.toEqual(0);
    });

    it('article under Bayern',function(){
        childPage_obj.child_country_total_article(3).then(function(val){
            expect(val).not.toEqual(0);
        });
    });

    it('image is displaying for each article under Bayern',function(){
        childPage_obj.child_country_total_article(3).then(function(val){
            for(var i=0; i<val; i++){
                expect(childPage_obj.child_country_article_image(3,i)).toContain('background-image');
            }
        });
    });

    it('tag is displaying for each article under Bayern',function(){
        // childPage_obj.child_country_total_article(3).then(function(val){
        //     for(var i=0;i<val;i++){
        //         childPage_obj.child_country_article_destination_tag(3,i).then(function(attr){
        //             if(browserName == 'safari'){
        //                 expect(attr).toContain("Deutschland ");
        //             }else{
        //                 expect(attr).toContain("DEUTSCHLAND");
        //             }
        //         });
        //     }
        // });

        childPage_obj.child_country_total_article(3).then(function(val){
            for(var i=0; i<val; i++){
                expect(childPage_obj.child_country_article_destination_tag(3,i).getText()).toContain("DEUTSCHLAND");
            }
        });
    });

    it('title is displaying for each article under Bayern',function(){
        // childPage_obj.child_country_total_article(3).then(function(val){
        //     for(var i=0;i<val;i++){
        //         childPage_obj.child_country_article_title(3,i).then(function(text){
        //             expect(text.length).not.toEqual(0);
        //         });
        //     }
        // });


        childPage_obj.child_country_total_article(3).then(function(val){
            for(var i=0; i<val; i++) {
                expect(childPage_obj.child_country_article_title(3, i).getText().length).not.toEqual(0);
            }
        });
    });

    it('click on more about Bayern button',function(){
        childPage_obj.link_to_the_button().then(function(buttonUrl){
            childPage_obj.destination_button(4).click();
            room5_util.wait_for_page_to_load();
            dvr.getCurrentUrl().then(function(url){
                    expect(url).toBe(buttonUrl);
                });
            });
        browser.navigate().back();
    });


    // /*************************************************************************************/
    // /**************************  this is for Berlin only ***************************/
    // /*************************************************************************************/
    //
    //
    // it('Berlin title',function(){
    //     // childPage_obj.child_country_title(5).then(function(text){
    //     //     if(browserName == 'safari'){
    //     //         expect(text).toBe(childPage_obj.Berlin_title_text_safari);
    //     //     }else{
    //     //         expect(text).toBe(childPage_obj.Berlin_title_text);
    //     //     }
    //     // });
    //
    //     expect(childPage_obj.child_country_title(5).getText().length).not.toEqual(0);
    // });
    //
    // it('article under Berlin',function(){
    //     childPage_obj.child_country_total_article(5).then(function(val){
    //         expect(val).toBe(3);
    //     });
    // });
    //
    // it('image is displaying for each article under Berlin',function(){
    //     childPage_obj.child_country_total_article(5).then(function(val){
    //         for(var i=0;i<val;i++){
    //             childPage_obj.child_country_article_image(5,i).then(function(attr){
    //                 expect(attr).toContain('background-image');
    //             });
    //         }
    //     });
    // });
    //
    // it('tag is displaying for each article under Berlin',function(){
    //     childPage_obj.child_country_total_article(5).then(function(val){
    //         for(var i=0;i<val;i++){
    //             childPage_obj.child_country_article_destination_tag(5,i).then(function(attr){
    //                 if(browserName == 'safari'){
    //                     expect(attr).toContain(childPage_obj.Berlin_title_text_safari);
    //                 }else{
    //                     expect(attr).toContain(childPage_obj.Berlin_title_text);
    //                 }
    //             });
    //         }
    //     });
    // });
    //
    // it('title is displaying for each article under Berlin',function(){
    //     childPage_obj.child_country_total_article(5).then(function(val){
    //         for(var i=0;i<val;i++){
    //             childPage_obj.child_country_article_title(5,i).then(function(text){
    //                 expect(text.length).not.toEqual(0);
    //             });
    //         }
    //     });
    // });
    //
    // it('click on more about Berlin button',function(){
    //     //childPage_obj.destination_button(0);
    //     childPage_obj.destination_button(6).then(function(elem){
    //         elem.click();
    //     });
    //     dvr.sleep(sleep);
    //     dvr.getCurrentUrl().then(function(url){
    //         expect(url).toBe(baseUrl + childPage_obj.Berlin_button_url);
    //         // room5_util.httpGet(url).then(function(result) {
    //         //     expect(result.statusCode).toBe(200);
    //         // });
    //     });
    //     browser.navigate().back();
    //     dvr.sleep(sleep);
    // });
    //
    // /*************************************************************************************/
    // /**************************  this is for dusseldorf only ***************************/
    // /*************************************************************************************/
    //
    //
    // it('dusseldorf title',function(){
    //     childPage_obj.child_country_title(7).then(function(text){
    //         if(browserName == 'safari'){
    //             expect(text).toBe(childPage_obj.dusseldorf_title_text_safari);
    //         }else{
    //             expect(text).toBe(childPage_obj.dusseldorf_title_text);
    //         }
    //     });
    // });
    //
    // it('article under dusseldorf',function(){
    //     childPage_obj.child_country_total_article(7).then(function(val){
    //         expect(val).toBe(3);
    //     });
    // });
    //
    // it('image is displaying for each article under dusseldorf',function(){
    //     childPage_obj.child_country_total_article(7).then(function(val){
    //         for(var i=0;i<val;i++){
    //             childPage_obj.child_country_article_image(7,i).then(function(attr){
    //                 expect(attr).toContain('background-image');
    //             });
    //         }
    //     });
    // });
    //
    // it('tag is displaying for each article under dusseldorf',function(){
    //     childPage_obj.child_country_total_article(7).then(function(val){
    //         for(var i=0;i<val;i++){
    //             childPage_obj.child_country_article_destination_tag(7,i).then(function(attr){
    //                 if(browserName == 'safari'){
    //                     expect(attr).toContain(childPage_obj.dusseldorf_title_text_safari);
    //                 }else{
    //                     expect(attr).toContain(childPage_obj.dusseldorf_title_text);
    //                 }
    //             });
    //         }
    //     });
    // });
    //
    // it('title is displaying for each article under dusseldorf',function(){
    //     childPage_obj.child_country_total_article(7).then(function(val){
    //         for(var i=0;i<val;i++){
    //             childPage_obj.child_country_article_title(7,i).then(function(text){
    //                 expect(text.length).not.toEqual(0);
    //             });
    //         }
    //     });
    // });
    //
    // it('click on more about dusseldorf button',function(){
    //     //childPage_obj.destination_button(0);
    //     childPage_obj.destination_button(8).then(function(elem){
    //         elem.click();
    //     });
    //     dvr.sleep(sleep);
    //     dvr.getCurrentUrl().then(function(url){
    //         expect(url).toBe(baseUrl + childPage_obj.dusseldorf_button_url);
    //         // room5_util.httpGet(url).then(function(result) {
    //         //     expect(result.statusCode).toBe(200);
    //         // });
    //     });
    //     browser.navigate().back();
    //     dvr.sleep(sleep);
    // });
    //
    // /*************************************************************************************/
    // /**************************  this is for Hamburg only ***************************/
    // /*************************************************************************************/
    //
    //
    // it('Hamburg title',function(){
    //     childPage_obj.child_country_title(9).then(function(text){
    //         if(browserName == 'safari'){
    //             expect(text).toBe(childPage_obj.Hamburg_title_text_safari);
    //         }else{
    //             expect(text).toBe(childPage_obj.Hamburg_title_text);
    //         }
    //     });
    // });
    //
    // it('article under Hamburg',function(){
    //     childPage_obj.child_country_total_article(9).then(function(val){
    //         expect(val).toBe(3);
    //     });
    // });
    //
    // it('image is displaying for each article under Hamburg',function(){
    //     childPage_obj.child_country_total_article(9).then(function(val){
    //         for(var i=0;i<val;i++){
    //             childPage_obj.child_country_article_image(9,i).then(function(attr){
    //                 expect(attr).toContain('background-image');
    //             });
    //         }
    //     });
    // });
    //
    // it('tag is displaying for each article under Hamburg',function(){
    //     childPage_obj.child_country_total_article(9).then(function(val){
    //         for(var i=0;i<val;i++){
    //             childPage_obj.child_country_article_destination_tag(9,i).then(function(attr){
    //                 if(browserName == 'safari'){
    //                     expect(attr).toContain(childPage_obj.Hamburg_title_text_safari);
    //                 }else{
    //                     expect(attr).toContain(childPage_obj.Hamburg_title_text);
    //                 }
    //             });
    //         }
    //     });
    // });
    //
    // it('title is displaying for each article under Hamburg',function(){
    //     childPage_obj.child_country_total_article(9).then(function(val){
    //         for(var i=0;i<val;i++){
    //             childPage_obj.child_country_article_title(9,i).then(function(text){
    //                 expect(text.length).not.toEqual(0);
    //             });
    //         }
    //     });
    // });
    //
    // it('click on more about Hamburg button',function(){
    //     //childPage_obj.destination_button(0);
    //     childPage_obj.destination_button(10).then(function(elem){
    //         elem.click();
    //     });
    //     dvr.sleep(sleep);
    //     dvr.getCurrentUrl().then(function(url){
    //         expect(url).toBe(baseUrl + childPage_obj.Hamburg_button_url);
    //         // room5_util.httpGet(url).then(function(result) {
    //         //     expect(result.statusCode).toBe(200);
    //         // });
    //     });
    //     browser.navigate().back();
    //     dvr.sleep(sleep);
    // });
    //
    // /*************************************************************************************/
    // /**************************  this is for Köln only ***************************/
    // /*************************************************************************************/
    //
    //
    // it('Köln title',function(){
    //     childPage_obj.child_country_title(11).then(function(text){
    //         if(browserName == 'safari'){
    //             expect(text).toBe(childPage_obj.koln_title_text_safari);
    //         }else{
    //             expect(text).toBe(childPage_obj.koln_title_text);
    //         }
    //     });
    // });
    //
    // it('article under Köln',function(){
    //     childPage_obj.child_country_total_article(11).then(function(val){
    //         expect(val).toBe(3);
    //     });
    // });
    //
    // it('image is displaying for each article under Köln',function(){
    //     childPage_obj.child_country_total_article(11).then(function(val){
    //         for(var i=0;i<val;i++){
    //             childPage_obj.child_country_article_image(11,i).then(function(attr){
    //                 expect(attr).toContain('background-image');
    //             });
    //         }
    //     });
    // });
    //
    // it('tag is displaying for each article under Köln',function(){
    //     childPage_obj.child_country_total_article(11).then(function(val){
    //         for(var i=0;i<val;i++){
    //             childPage_obj.child_country_article_destination_tag(11,i).then(function(attr){
    //                 if(browserName == 'safari'){
    //                     expect(attr).toContain(childPage_obj.koln_title_text_safari);
    //                 }else{
    //                     expect(attr).toContain(childPage_obj.koln_title_text);
    //                 }
    //             });
    //         }
    //     });
    // });
    //
    // it('title is displaying for each article under Köln',function(){
    //     childPage_obj.child_country_total_article(11).then(function(val){
    //         for(var i=0;i<val;i++){
    //             childPage_obj.child_country_article_title(11,i).then(function(text){
    //                 expect(text.length).not.toEqual(0);
    //             });
    //         }
    //     });
    // });
    //
    // it('click on more about Köln button',function(){
    //     //childPage_obj.destination_button(0);
    //     childPage_obj.destination_button(12).then(function(elem){
    //         elem.click();
    //     });
    //     dvr.sleep(sleep);
    //     dvr.getCurrentUrl().then(function(url){
    //         expect(url).toBe(baseUrl + childPage_obj.koln_button_url);
    //         // room5_util.httpGet(url).then(function(result) {
    //         //     expect(result.statusCode).toBe(200);
    //         // });
    //     });
    //     browser.navigate().back();
    //     dvr.sleep(sleep);
    // });
    //
    // /*************************************************************************************/
    // /**************************  this is for Leipzig only ***************************/
    // /*************************************************************************************/
    //
    //
    // it('Leipzig title',function(){
    //     childPage_obj.child_country_title(13).then(function(text){
    //         if(browserName == 'safari'){
    //             expect(text).toBe(childPage_obj.Leipzig_title_text_safari);
    //         }else{
    //             expect(text).toBe(childPage_obj.Leipzig_title_text);
    //         }
    //     });
    // });
    //
    // it('article under Leipzig',function(){
    //     childPage_obj.child_country_total_article(13).then(function(val){
    //         expect(val).toBe(3);
    //     });
    // });
    //
    // it('image is displaying for each article under Leipzig',function(){
    //     childPage_obj.child_country_total_article(13).then(function(val){
    //         for(var i=0;i<val;i++){
    //             childPage_obj.child_country_article_image(13,i).then(function(attr){
    //                 expect(attr).toContain('background-image');
    //             });
    //         }
    //     });
    // });
    //
    // it('tag is displaying for each article under Leipzig',function(){
    //     childPage_obj.child_country_total_article(11).then(function(val){
    //         for(var i=0;i<val;i++){
    //             childPage_obj.child_country_article_destination_tag(13,i).then(function(attr){
    //                 if(browserName == 'safari'){
    //                     expect(attr).toContain(childPage_obj.Leipzig_title_text_safari);
    //                 }else{
    //                     expect(attr).toContain(childPage_obj.Leipzig_title_text);
    //                 }
    //             });
    //         }
    //     });
    // });
    //
    // it('title is displaying for each article under Leipzig',function(){
    //     childPage_obj.child_country_total_article(13).then(function(val){
    //         for(var i=0;i<val;i++){
    //             childPage_obj.child_country_article_title(13,i).then(function(text){
    //                 expect(text.length).not.toEqual(0);
    //             });
    //         }
    //     });
    // });
    //
    // it('click on more about Leipzig button',function(){
    //     //childPage_obj.destination_button(0);
    //     childPage_obj.destination_button(14).then(function(elem){
    //         elem.click();
    //     });
    //     dvr.sleep(sleep);
    //     dvr.getCurrentUrl().then(function(url){
    //         expect(url).toBe(baseUrl + childPage_obj.Leipzig_button_url);
    //         // room5_util.httpGet(url).then(function(result) {
    //         //     expect(result.statusCode).toBe(200);
    //         // });
    //     });
    //     browser.navigate().back();
    //     dvr.sleep(sleep);
    // });
    //
    // /*************************************************************************************/
    // /**************************  this is for nordsee only ***************************/
    // /*************************************************************************************/
    //
    //
    // it('nordsee title',function(){
    //     childPage_obj.child_country_title(15).then(function(text){
    //         if(browserName == 'safari'){
    //             expect(text).toBe(childPage_obj.nordsee_title_text_safari);
    //         }else{
    //             expect(text).toBe(childPage_obj.nordsee_title_text);
    //         }
    //     });
    // });
    //
    // it('article under nordsee',function(){
    //     childPage_obj.child_country_total_article(15).then(function(val){
    //         expect(val).toBe(3);
    //     });
    // });
    //
    // it('image is displaying for each article under nordsee',function(){
    //     childPage_obj.child_country_total_article(15).then(function(val){
    //         for(var i=0;i<val;i++){
    //             childPage_obj.child_country_article_image(15,i).then(function(attr){
    //                 expect(attr).toContain('background-image');
    //             });
    //         }
    //     });
    // });
    //
    // it('tag is displaying for each article under nordsee',function(){
    //     childPage_obj.child_country_total_article(15).then(function(val){
    //         for(var i=0;i<val;i++){
    //             childPage_obj.child_country_article_destination_tag(15,i).then(function(attr){
    //                 if(browserName == 'safari'){
    //                     expect(attr).toContain(childPage_obj.nordsee_title_text_safari);
    //                 }else{
    //                     expect(attr).toContain(childPage_obj.nordsee_title_text);
    //                 }
    //             });
    //         }
    //     });
    // });
    //
    // it('title is displaying for each article under nordsee',function(){
    //     childPage_obj.child_country_total_article(15).then(function(val){
    //         for(var i=0;i<val;i++){
    //             childPage_obj.child_country_article_title(15,i).then(function(text){
    //                 expect(text.length).not.toEqual(0);
    //             });
    //         }
    //     });
    // });
    //
    // it('click on more about nordsee button',function(){
    //     //childPage_obj.destination_button(0);
    //     childPage_obj.destination_button(16).then(function(elem){
    //         elem.click();
    //     });
    //     dvr.sleep(sleep);
    //     dvr.getCurrentUrl().then(function(url){
    //         expect(url).toBe(baseUrl + childPage_obj.nordsee_button_url);
    //         // room5_util.httpGet(url).then(function(result) {
    //         //     expect(result.statusCode).toBe(200);
    //         // });
    //     });
    //     browser.navigate().back();
    //     dvr.sleep(sleep);
    // });
    //
    // /*************************************************************************************/
    // /**************************  this is for other article ***************************/
    // /*************************************************************************************/

    it('other article title',function(){
        // childPage_obj.other_article_europe_title(18).then(function(text){
        //     if(browserName == 'safari'){
        //         expect(text).toBe(childPage_obj.other_article_text_safari);
        //     }else{
        //         expect(text).toBe(childPage_obj.other_article_text);
        //     }
        // });

        expect(childPage_obj.other_article_title().getText()).toBe(childPage_obj.other_article_text);
    });

    it('article under other article section at first',function(){
        childPage_obj.total_number_under_other_article().then(function(val){
            expect(val).toBe(6);
        });
    });

    it('article after click on load more',function(){
        childPage_obj.load_more_button().click();
        room5_util.wait_to_Visible(childPage_obj.loaded_article(7));
        childPage_obj.total_number_under_other_article().then(function(val){
            expect(val).toBe(12);
        });
    });

    it('article after click on load more second time',function(){
        childPage_obj.load_more_button().click();
        room5_util.wait_to_Visible(childPage_obj.loaded_article(12));
        childPage_obj.total_number_under_other_article().then(function(val){
            expect(val).toBeGreaterThan(12);
        });
    });
});