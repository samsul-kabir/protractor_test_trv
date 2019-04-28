/**
 * Created by skabir on 03.05.17.
 */
var parentPage_obj = function(){

    this.page_header_text = function(){
        return element(by.id('articleheader')).getText();
    };

    this.feature_article_image = function(){
        return element(by.id('country_parent'))
            .$('a > div > div.post-thumb-big')
            .getAttribute('style');
    };

    this.feature_article_title = function(){
        return element(by.id('country_parent'))
            .$('.col-4.col-12-sm > div.post-title > a > h1')
            .getText();
    };

    this.total_number_article_under_feature = function(){
        return element(by.id('country_parent'))
            .$$('div.col-4.col-12-sm')
            .then(function(elem){
                return elem.length;
            });
    };

    this.child_country_title = function(index){
        return $$('.row.country-child').get(index)
            .$('div.col-12.center.uppercase >h1');
    };

    this.child_country_total_article = function(index){
        return $$('.row.country-child').get(index)
            .$$('.col-4.col-12-sm')
            .then(function(elem){
                return elem.length;
            });
    };

    this.child_country_article_image = function(index,position){
        return $$('.row.country-child').get(index)
            .$$('.col-4.col-12-sm').get(position)
            .$$('a > div > div').get(0)
            .getAttribute('style');
    };

    this.child_country_article_destination_tag = function(index,position){
        return $$('.row.country-child').get(index)
            .$$('.col-4.col-12-sm').get(position)
            .$$('div > div.montserrat-regular > a').get(0)
            .getText();
    };

    this.child_country_article_title = function(index,position){
        return $$('.row.country-child').get(index)
            .$$('.col-4.col-12-sm').get(position)
            .$('div > div.post-title > a > h3')
            .getText();
    };

    this.destination_button = function(index){
        return $$('.row.country-child').get(index)
            .$('div.row > div.col-12 > div > a');

    };

    this.other_article_europe_title = function(){
        return element(by.id('more_about')).element(by.tagName('h1'))
            .getText();
    };

    this.total_number_other_article_europe = function(){
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

module.exports = new parentPage_obj();