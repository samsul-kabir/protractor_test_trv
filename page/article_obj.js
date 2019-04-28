var article_obj = function(){

	
	// this.article_to_test = "http://room5.ci.trivago.pse/barossa-valley-accommodation/";
	// this.article_destination_text = 'WELTWEIT';
	// this.article_theme_text = 'SHAMS_THEME';
	// this.article_type_text = 'STÄDTE';
	// this.article_title_text = 'Ein Jahr – 36 Städtetrips: Die günstigsten Reiseziele für jeden Monat';
	// this.article_author_text = 'Alica Renken';
	// this.article_date_text = '05. Februar 2017';
	// this.facebook_share_count_text = 'Hi guys, http://stage.room5.trivago.com/ is broken since yesterday. I thought it should be fixed by now, but still its not working. Do you guys know who can I contact regarding this?';

	this.progress_bar_empty = function(){
        return $("header.header > progress").getAttribute('value');
	};

    this.last_article_id = function(){
        return $$('.single-post-wrapper').get(0).getAttribute('data-post-id').then(function(val){
            return val;
        });
    };

	this.article_destintion_theme_type = function(article_number, position_of_the_theme){
        return $$('.single-post-wrapper').get(article_number).
                $$('.tag-link.uppercase.term-link').get(position_of_the_theme);
	};

	this.article_title = function(article_number){
        return element.all(by.id('articleheader')).get(article_number);
    };

    this.article_author = function(article_number){
        return $$('.single-post-wrapper').get(article_number)
                .$('.author-link');
    };

    this.article_date = function(article_number){
        return $$('.single-post-wrapper').get(article_number)
                .$('.article-date');
    };

    this.article_facebook_share_count = function(article_number, position){
        return $$('.single-post-wrapper').get(article_number)
                .$$('.numberd.facebook-shares').get(position)
                .getText();
    };

    this.trackScroll = function(scrollBy,checkWith,articlePosition){
        $$(".article-content-section").get(articlePosition).getLocation().then(function(location){
            $$(".article-content-section").get(articlePosition).getSize().then(function(size){
                var Height_to_scroll = (size.height/scrollBy) + location.y;
                // console.log('height'+ size.height);
                // console.log('start of article'+ location.y);
                // console.log(Height_to_scroll);
                // dvr.sleep(3000);
                browser.executeScript('window.scrollTo(0,arguments[0]);',Height_to_scroll).then(function () {
                    element(By.tagName("progress")).getAttribute('value').then(function(attr){
                        // dvr.sleep(3000);
                        // console.log(Math.ceil(attr));
                        expect(Math.ceil(attr)).toBe(checkWith);
                    });
                });
            });
        });
    };

    this.trackScroll_to = function(scrollBy,articlePosition){
        $$(".article-content-section").get(articlePosition).getLocation().then(function(location){
            $$(".article-content-section").get(articlePosition).getSize().then(function(size){
                var Height_to_scroll = (size.height/scrollBy) + location.y;
                browser.executeScript('window.scrollTo(0,arguments[0]);',Height_to_scroll);
            });
        });
    };


    this.socialNetworkSharing = function(position){
        return $$('.social-icons-desktop>div.icon-container').get(position)
            .element(by.tagName('a')).getAttribute('data-url');
    };

    this.facebook_share = function(index){
        return $$(".at-icon-wrapper.at-share-btn.at-svc-facebook").get(index);
    };

    this.twitter_share = function(index){
        return $$(".at-icon-wrapper.at-share-btn.at-svc-twitter").get(index);
    };

    this.pinterest_share = function(index){
        return $$(".at-icon-wrapper.at-share-btn.at-svc-pinterest_share").get(index);
    };

    this.google_share = function(index){
        return $$(".at-icon-wrapper.at-share-btn.at-svc-google_plusone_share").get(index);
    };

    this.whatsapp_share = function(index){
        return $$(".at-icon-wrapper.at-share-btn.at-svc-whatsapp").get(index);
    };

    this.article_email_share = function(index){
        return $$(".at-icon-wrapper.at-share-btn.at-svc-email").get(index).getAttribute('href');
    };

    this.email_share = dvr.findElements(By.css("a[ga-event-action='E-Mail']"));

    this.openNewTab_partialURL = function(partialUrl){
        browser.getAllWindowHandles().then(function(handles) {
            browser.switchTo().window(handles[1]);
            dvr.getCurrentUrl().then(function(url){
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
            browser.switchTo().window(handles[0]).close();
            //browser.close();
            browser.switchTo().window(handles[1]);
        });
    }

    this.article_tag = function(article_number,tagNumber){
        return $$('.single-post-wrapper').get(article_number)
                .$$('.montserrat-regular.term-link').get(tagNumber);
    }

    this.total_number_recommendedArticle = function(article_number){
        return $$('.related-articles').get(article_number)
                .$$('.col-4.col-12-sm')
                .then(function (elems) {
                    return elems.length;
            });
    }

    this.recommendedArticle_destination = function(article_number,recommended_article){
        return $$('.related-articles').get(article_number)
            .$$('.col-4.col-12-sm').get(recommended_article)
            .$$('.col-12.montserrat-regular > a').get(0);
    }

    this.recommendedArticle_title = function(article_number,recommended_article){
        return $$('.related-articles').get(article_number)
                .$$('.col-4.col-12-sm').get(recommended_article)
                .$('.col-12.montserrat-regular > div > a > h4');
    }

    this.recommendedArticle = function(article_number,recommended_article){
        return $$('.related-articles').get(article_number)
                .$$('.col-4.col-12-sm').get(recommended_article)
                .$('.col-12.montserrat-regular > div > a > h4');
    }

    this.click_on_trivago_button_on_article = function(article_number, position_at_top){
        return $$('.single-post-wrapper').get(article_number)
                .$$('.btn-wrap').get(position_at_top)
                .element(by.tagName('a')).getAttribute('href');
    };
};
module.exports = new article_obj();