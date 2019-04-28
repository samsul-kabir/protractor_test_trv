var homepage_obj = function(){

    this.url_alle_theme = "theme/all-themes/";
    this.url_alle_destination = "destination/all-destinations/";

    this.editorial_pick = function(){
        return $$('.mt-0').get(0);
    };

    this.number_article_editorial_pick = function(){
        return element(by.id('editors_pick'))
                .$$(".col-4.col-12-sm")
                .then(function(elem){
                    return elem.length;
                });
    };

    this.image_first_article_editorial_pick = function(){
        return element(by.id('editors_pick'))
                .$(".row.first-row-1-3 > a > span > span.post-thumb-big")
                .getAttribute('style')
                .then(function(attr){
                    return attr;
                });
    };

    this.first_article_tag = function(){
        return dvr.findElement(by.id('editors_pick')).then(function(elem){
            return elem.findElement(by.css(".row.first-row-1-3 > div")).then(function(elem){
                return elem.findElements(by.tagName("div")).then(function(elem){
                    return elem[0].findElements(by.tagName("a")).then(function(elem){
                        return elem[0];
                    });
                });
            });
        });
    };

    this.tag_first_article_editorial_pick = function(){
        // return element(by.id('editors_pick'))
        //         .$(".row.first-row-1-3 > div")
        //         .$$(by.tagName('div')).get(0)
        //         .$$(by.tagName('a'))
        //         .then(function(elem){
        //             console.log(elem.length);
        //             return elem.length;
        //         });

        return dvr.findElement(by.id('editors_pick')).then(function(elem){
            return elem.findElement(by.css(".row.first-row-1-3 > div")).then(function(elem){
                return elem.findElements(by.tagName("div")).then(function(elem){
                    return elem[0].findElements(by.tagName("a")).then(function(elem){
                        return elem.length;
                    });
                });
            });
        });
    };

    this.title_first_article_editorial_pick = function(){
        return element(by.id('editors_pick'))
                .$(".row.first-row-1-3 > div > div.post-title > a > h1");
    };

    this.summary_first_article_editorial_pick = function(){
        return element(by.id('editors_pick'))
                .$(".row.first-row-1-3 > div > div.post-title > a > p");
    };

    this.summer_trend_banner = function(){
        return element(by.id('summer_trends_banner'))
                .getAttribute('href')
                .then(function(attr){
                    return attr;
                });
    };

    this.title_of_module = function(position){
        return $$('.mt-8.mb-8').get(position);
    };

    this.number_post_most_popular = function(){
        return element(by.id('most_popular'))
                .$$('.col-4.col-12-sm')
                .then(function(elem){
                return elem.length;
            });
    };

    this.tac_banner = function(){
        return element(by.id('tac_banner'))
                .getAttribute('href')
                .then(function(attr){
                    return attr;
                });
    };

    this.number_post_latest_popular = function(){
        return element(by.id('latest_articles'))
                .$$('.col-6.col-12-sm')
                .then(function(elem){
                    return elem.length;
                });
    };

    this.number_post_inspiration = function(){
        return element(by.id('inspiration'))
                .$$('.col-4.col-12-sm.post-line')
                .then(function(elem){
                    return elem.length;
                });
    };

    this.alle_theme_button = function(){
        return element(by.id('all_themes_btn'));
    };

    this.number_post_destination = function(){
        return element(by.id('destinations'))
                .$$('.col-4.col-12-sm.post-line')
                .then(function(elem){
                    return elem.length;
                });
    };

    this.alle_destination_button = function(){
        return element(by.id('all_destinations_btn'));
    };
};

module.exports = new homepage_obj();
