/**
 * Created by skabir on 18.04.17.
 */

var footer_obj = function(){

    this.facebook_footer = $(".social_icon.room5_icons_facebook");
    this.twitter_footer = $(".social_icon.room5_icons_twitter");
    this.pinterest_footer = $(".social_icon.room5_icons_pinterest");
    this.instagrum_footer = $(".social_icon.room5_icons_instagram");

    this.country_dropdown = function(){
        return element(by.id('select-country'));
    };

    this.footer_menu = function(index){
        return element(by.id('footer')).$$(".di-link").get(index);
    };

    /******************************** Open new tab ******************/
    this.openNewTab = function(currentUrl){
         browser.getAllWindowHandles().then(function(handles) {
            browser.switchTo().window(handles[1]);
             dvr.getCurrentUrl().then(function(url){
                //dvr.sleep(sleep);
                //console.log(url);
                // check the url
                expect(url).toContain(currentUrl);
                // room5_util.httpGet(url).then(function(result) {
                //     expect(result.statusCode).toBe(200);
                // });
            });
            browser.close();
            browser.switchTo().window(handles[0]);
        });
    }

    this.openNewTab_partialURL = function(partialUrl){
        browser.getAllWindowHandles().then(function(handles) {
            browser.switchTo().window(handles[1]);
            dvr.getCurrentUrl().then(function(url){
                //room5_util.sleep_time_m();
                //console.log(url);
                // check the url
                expect(url).toContain(partialUrl);
            });
            browser.close();
            browser.switchTo().window(handles[0]);
        });
    }

    this.openNewTab_partialURL_safari = function(partialUrl){
        browser.getAllWindowHandles().then(function(handles) {
            browser.switchTo().window(handles[0]);
            dvr.getCurrentUrl().then(function(url){
                dvr.sleep(sleep);
                expect(url).toContain(partialUrl);
            });
            browser.switchTo().window(handles[0]);
            browser.close();
            browser.switchTo().window(handles[1]);
        });
    }

};

module.exports = new footer_obj();