

describe('artcile ->', function () {

    var article_obj;
    var browserName, platformName;
    var title_of_the_article;
    var destination_of_the_article;
    var theme_of_the_article;
    var type_of_the_article;
    var tag_of_the_article;
    var author_of_the_article;
    var publish_date_of_the_article;

    /**
     * This return the current browser
     * where automation is running.
     */
    browser.getProcessedConfig().then(function(config) {
        browserName = config.capabilities.browserName;
        platformName = config.capabilities.platformName;
    });

    beforeEach(function () {
        article_obj = require('../page/article_obj.js');
    });

    it('Loading article', function () {
        dvr.get(uni_var.article_to_test);
        room5_util.wait_to_Visible(article_obj.article_title(0));
        dvr.getCurrentUrl().then(function(url){
            room5_util.httpGet(url).then(function(result) {
                expect(result.statusCode).toBe(200);
            });
        });
    });

    it('Progress bar is present and empty', function () {
        expect(article_obj.progress_bar_empty()).toBe('0');
    });

    //**************************** First article **********************************//

    it('destination of 1st article is avaialble', function () {
        article_obj.article_destintion_theme_type(0,0).getText().then(function(destination){
            destination_of_the_article = destination;
            expect(destination.length).not.toEqual(0);
        });
    });

    it('theme of 1st article is avaialble', function () {
        article_obj.article_destintion_theme_type(0,1).getText().then(function(theme){
            theme_of_the_article = theme;
            expect(theme.length).not.toEqual(0);
        });
    });

    it('type of 1st article is avaialble', function () {
        article_obj.article_destintion_theme_type(0,1).getText().then(function(type){
            type_of_the_article = type;
            expect(type.length).not.toEqual(0);
        });
    });

    it('title avaialble', function () {
        article_obj.article_title(0).getText().then(function(title){
            title_of_the_article = title;
            expect(title.length).not.toEqual(0);
        });
    });

    it('author avaialble', function () {
        article_obj.article_author(0).getText().then(function(author){
            author_of_the_article = author;
            expect(author.length).not.toEqual(0);
        });
    });

    it('date avaialble', function () {
        article_obj.article_date(0).getText().then(function(publish_date){
            publish_date_of_the_article = publish_date;
            expect(publish_date.length).not.toEqual(0);
        });
    });

    // it('facebook share count is avaialble', function () {
    //     article_obj.article_facebook_share_count(0,0).then(function(val){
    //         expect(val).toContain(article_obj.facebook_share_count_text);
    //     });
    // });

    it('Clicking on Facebook sharing at the top of article', function () {
        if (browserName == 'safari'){
            dvr.sleep(sleep);
            //room5_util.timeout.m;
            article_obj.facebook_share(0).click();
            //dvr.sleep(sleep);
            //room5_util.timeout.m;
            article_obj.openNewTab_partialURL_safari("facebook.com");
        } else {
            article_obj.facebook_share(0).click();
            article_obj.openNewTab_partialURL("facebook.com");
        }
    });

    it('Clicking on twitter sharing at the top of article', function () {
        if (browserName == 'safari'){
            //dvr.sleep(sleep);
            //room5_util.timeout.m;
            article_obj.twitter_share(0).click();
            //dvr.sleep(sleep);
            //room5_util.timeout.m;
            article_obj.openNewTab_partialURL_safari("twitter.com");
        } else {
            article_obj.twitter_share(0).click();
            article_obj.openNewTab_partialURL("twitter.com");
        }
    });

    it('Clicking on pinterest sharing at the top of article', function () {
        if (browserName == 'safari'){
            //dvr.sleep(sleep);
            //room5_util.timeout.m;
            article_obj.pinterest_share(0).click();
            // dvr.sleep(sleep);
            //room5_util.timeout.m;
            article_obj.openNewTab_partialURL_safari("pinterest.com");
        } else if (browserName == 'ANDROID'){
            return;
        } else {
            article_obj.pinterest_share(0).click();
            article_obj.openNewTab_partialURL("pinterest.com");
        }
    });

    it('Clicking on google sharing at the top of article', function () {
        if (browserName == 'safari'){
            //dvr.sleep(sleep);
            //room5_util.timeout.m;
            article_obj.google_share(0).click();
            // dvr.sleep(sleep);
            //room5_util.timeout.m;
            article_obj.openNewTab_partialURL_safari("google.com");
        } else {
            article_obj.google_share(0).click();
            article_obj.openNewTab_partialURL("google.com");
        }
    });

    it('whatsapp sharing', function () {
        //console.log(platformName);
        if(platformName == 'MAC' || platformName == 'macOS' || platformName == 'darwin'){
            return;
        } else {
            if (browserName == 'safari'){
                // dvr.sleep(sleep);
                //room5_util.timeout.m;
                article_obj.whatsapp_share(0).click();
                // dvr.sleep(sleep);
                //room5_util.timeout.m;
                article_obj.openNewTab_partialURL_safari("whatsapp.com");
            } else {
                article_obj.whatsapp_share(0).click();
                article_obj.openNewTab_partialURL("whatsapp.com");
            }
        }
    });

    it('email available', function () {
        //article_obj.socialNetworkSharing(5,'mailto:?Subject');
        expect(article_obj.article_email_share(0)).toContain('mailto:');
    });

    it('Scroll 25% of the article', function () {
        article_obj.trackScroll(4,26,0);
    });

    it('Scroll 50% of the article', function () {
        article_obj.trackScroll(2,50,0);
    });

    it('Scroll 75% of the article', function () {
        article_obj.trackScroll(1.333333333333,75,0);
    });

    it('Scroll 85% of the article', function () {
        article_obj.trackScroll(1.176470588235294,85,0);
    });

    it('Scroll 90% of the article', function () {
        article_obj.trackScroll(1.111111111111,90,0);
    });

    it('Scroll 100% of the article', function () {
        article_obj.trackScroll(1,100,0);
    });

    it('click on trivago button', function () {
        article_obj.click_on_trivago_button_on_article(0,0).then(function(val){
            //console.log(val);
            expect(val).toContain("cip");
            var cip = val[val.length - 14];
            //console.log(cip);
        });
    });

    it('total number of recommended article shown is 3', function () {
        article_obj.total_number_recommendedArticle(0).then(function(val){
            //console.log(val);
            expect(val).toBe(3);
        });
    });

    it('destination of 1st recommended article', function () {
        // dvr.sleep(sleep);
        room5_util.wait_to_Visible(article_obj.recommendedArticle_destination(0,0));
        expect(article_obj.recommendedArticle_destination(0,0).getText().length).not.toEqual(0);
    });

    it('title of 1st recommended article', function () {
        expect(article_obj.recommendedArticle_title(0,0).getText().length).not.toEqual(0);
    });

    it('destination of 2nd recommended article', function () {
        room5_util.wait_to_Visible(article_obj.recommendedArticle_destination(0,1));
        expect(article_obj.recommendedArticle_destination(0,1).getText().length).not.toEqual(0);
    });

    it('title of 2nd recommended article', function () {
        expect(article_obj.recommendedArticle_title(0,1).getText().length).not.toEqual(0);
    });

    it('destination of 3rd recommended article', function () {
        //dvr.sleep(sleep);
        room5_util.wait_to_Visible(article_obj.recommendedArticle_destination(0,2));
        expect(article_obj.recommendedArticle_destination(0,2).getText().length).not.toEqual(0);
    });

    it('title of 3rd recommended article', function () {
        expect(article_obj.recommendedArticle_title(0,2).getText().length).not.toEqual(0);
    });


    it('click on 1st recommended article', function () {
        var url = dvr.getCurrentUrl();
        var recommended_article_title = article_obj.recommendedArticle_title(0,0).getText();
        article_obj.recommendedArticle(0,0).click();
        room5_util.wait_for_browser_to_load();
        expect(article_obj.article_title(0).getText()).toBe(recommended_article_title);
    });

    it('click on back button', function () {
        var url = dvr.getCurrentUrl();
            browser.navigate().back();
        room5_util.wait_for_page_to_load(url);
        expect(article_obj.article_title(0).getText()).toBe(title_of_the_article);
    });

    it('tag text of 1st article', function () {
        article_obj.article_tag(0,0).getText().then(function(val){
            tag_of_the_article = val;
        });
        expect(article_obj.article_tag(0,0).getText()).not.toEqual(0);
    });

    it('click on the 1st tag of 1st article', function () {
        var url = dvr.getCurrentUrl();
        article_obj.article_tag(0,0).click();
        room5_util.wait_for_browser_to_load();
        expect(article_obj.article_title(0).getText()).toBe(tag_of_the_article.toUpperCase());
    });

    it('click on back button', function () {
        var url = dvr.getCurrentUrl();
            browser.navigate().back();
        room5_util.wait_for_page_to_load(url);
        expect(article_obj.article_title(0).getText()).toBe(title_of_the_article);
    });

    // //**************************** second article **********************************//
    //
    // // it('Scroll 100% of the article', function () {
    // //     dvr.findElements(By.css(".single-post-image")).getLocation().then(function(loc){
    // //         browser.executeScript('window.scrollTo(0,arguments[0]);',loc.y);
    // //     });
    // //     dvr.findElements(By.css(".single-post-image")).then(function(elem){
    // //         elem[1].getAttribute('style').then(function(style){
    // //             expect(style).toContain('background-image: url');
    // //         });
    // //     });
    // // });
    // //
    // //
    //
    // it('destination of 1st article is avaialble', function () {
    //     dvr.sleep(sleep);
    //     article_obj.article_destintion_theme_type(1,0).then(function(text){
    //             expect(text).toBe('WELTWEIT');
    //         });
    //     });
    //
    // // it('Scroll 25% of the article', function () {
    // //     dvr.sleep(sleep);
    // //     article_obj.trackScroll(4,25,1);
    // // });
    // //
    // // it('Scroll 50% of the article', function () {
    // //     dvr.sleep(sleep);
    // //     article_obj.trackScroll(2,50,1);
    // // });
    // //
    // // it('Scroll 75% of the article', function () {
    // //     dvr.sleep(sleep);
    // //     article_obj.trackScroll(1.333333333333,75,1);
    // // });
    // //
    // // it('Scroll 85% of the article', function () {
    // //     article_obj.trackScroll(1.176470588235294,85,1);
    // // });
    // //
    // // it('Scroll 90% of the article', function () {
    // //     article_obj.trackScroll(1.111111111111,90,1);
    // // });
    // //
    // // it('Scroll 100% of the article', function () {
    // //     dvr.sleep(sleep);
    // //     article_obj.trackScroll(1,100,1);
    // // });


});