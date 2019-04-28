/**
 * Created by skabir on 15.05.17.
 */
var grandChildPage_obj = function(){

    this.page_header_text = function(){
        return element(by.id('articleheader')).getText();
    };

    this.feature_article_image = function(){
        return element(by.id('country_parent'))
            .$('div.row.first-row-1-3 > a > div > div.post-thumb-big')
            .getAttribute('style');
    };

    this.feature_article_title = function(){
        return element(by.id('country_parent'))
            .$('div.row.first-row-1-3 > div > div.post-title > a > h1')
            .getText();
    };

    this.feature_article_tag = function(){
        return element(by.id('country_parent'))
            .$$('div.row.first-row-1-3 > div > div > a').get(0)
            // .element.all(by.tagName('div')).get(0)
            // .element.all(by.tagName('a')).get(0)
            .getText();
    };

    this.feature_article_description = function(){
        return element(by.id('country_parent'))
            .$('div.row.first-row-1-3 > div > div.post-title > a > p')
            .getText();
    };

    this.total_number_article_under_feature = function(){
        return element(by.id('country_parent'))
            .$$('.col-4.col-12-sm')
            .then(function(elem){
                return elem.length;
            });
    };

    this.other_article_title = function(){

        return element(by.id('more_about'))
            .element(by.tagName('h1'))
            .getText();
    };

    this.total_number_of_article_under_other = function(){

        return element(by.id('more_about'))
            .$$('.col-4.col-12-sm')
            .then(function(elem){
                return elem.length;
            });
    };

    this.load_more_button = function(){
        return element(by.id('load_more_btn'));
    };
}

module.exports = new grandChildPage_obj();