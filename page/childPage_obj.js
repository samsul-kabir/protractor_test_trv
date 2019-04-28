/**
 * Created by skabir on 15.05.17.
 */
var childPage_obj = function(){
    this.childPage_to_load = 'http://stage.room5.trivago.com/destination/australia/';
    this.feature_article_title_text = 'Raus aus der Stadt: Kleine Auszeit für Münchener';
    this.bayern_title_text = 'BAYERN';
    this.bayern_title_text_safari = 'Bayern';
    this.Berlin_title_text = 'BERLIN';
    this.Berlin_title_text_safari = 'Berlin';
    this.dusseldorf_title_text = 'DÜSSELDORF';
    this.dusseldorf_title_text_safari = 'Düsseldorf';
    this.Hamburg_title_text = 'HAMBURG';
    this.Hamburg_title_text_safari = 'Hamburg';
    this.koln_title_text = 'KÖLN';
    this.koln_title_text_safari = 'Köln';
    this.Leipzig_title_text = 'LEIPZIG';
    this.Leipzig_title_text_safari = 'Leipzig';
    this.nordsee_title_text = 'NORD- UND OSTSEE';
    this.nordsee_title_text_safari = 'Nord- und Ostsee';
    this.other_article_text = 'WEITERE ARTIKEL ZU DEUTSCHLAND';
    this.other_article_text_safari = 'Weitere Artikel zu Deutschland';

    this.bayern_button_url = 'destination/europa/country/deutschland/city/bayern/';
    this.Berlin_button_url = 'destination/europa/country/deutschland/city/berlin/';
    this.dusseldorf_button_url = 'destination/europa/country/deutschland/city/duesseldorf/';
    this.Hamburg_button_url = 'destination/europa/country/deutschland/city/hamburg/';
    this.koln_button_url = 'destination/europa/country/deutschland/city/koeln/';
    this.Leipzig_button_url = 'destination/europa/country/deutschland/city/leipzig/';
    this.nordsee_button_url = 'destination/europa/country/deutschland/city/nordsee/';

    function parent_div(){
        return $('.container-wide.plr-10.filter-wrapper.term-wrapper').$$('.row');
    };

    this.page_header_text = function(){
        return element(by.id('articleheader'));
    };

    this.feature_article_image = function(){
        return element(by.id("country_parent"))
                .$('a > div > div.post-thumb-big')
                    .getAttribute('style');
    };

    this.feature_article_title = function(){
        return element(by.id("country_parent"))
                .$('.col-4.col-12-sm > div.post-title > a > h1');
    };

    this.total_number_article_under_feature = function(){
        return element(by.id("country_parent"))
                .$$('.col-4.col-12-sm > a').then(function(elem){
                    return elem.length;
            });
    };

    this.child_country_title = function(index){
        return $('.container-wide.plr-10.filter-wrapper.term-wrapper')
                .$$('.row').get(index)
                    .$('div.col-12.center.uppercase >h1');
    };

    this.child_country_total_article = function(index){
        return $('.container-wide.plr-10.filter-wrapper.term-wrapper')
                .$$('.row').get(index)
                    .$$('.col-4.col-12-sm')
                        .then(function(elem){
                            return elem.length;
                        });
    };

    this.child_country_article_image = function(index,position){
        return $('.container-wide.plr-10.filter-wrapper.term-wrapper')
                .$$('.row').get(index)
                    .$$('.col-4.col-12-sm').get(position)
                        .$('a > div > div').getAttribute('style');
    };

    this.child_country_article_destination_tag = function(index,position){
        return $('.container-wide.plr-10.filter-wrapper.term-wrapper')
                .$$('.row').get(index)
                    .$$('.col-4.col-12-sm').get(position)
                        .$$('div > div.montserrat-regular > a').get(0);
    };

    this.child_country_article_title = function(index,position){
        return $('.container-wide.plr-10.filter-wrapper.term-wrapper')
                .$$('.row').get(index)
                    .$$('.col-4.col-12-sm').get(position)
                        .$('div > div.post-title > a > h3');
    };

    this.destination_button = function(index){
        // return $('.container-wide.plr-10.filter-wrapper.term-wrapper')
        //         .$$('.row').get(index)
        //             .$('div.col-12 > div > a');

        return element(by.id("country_child_btn_1"));
    };

    this.link_to_the_button = function(){
        return element(by.id("country_child_btn_1")).getAttribute('href');
    };

    this.other_article_title = function(){
        // return parent_div().then(function(elem){
        //     return elem[index].findElement(by.tagName('h1')).getText().then(function(text){
        //         return text;
        //     });
        // });

        return element(by.id('more_about')).element(by.tagName('h1'));
    };

    this.total_number_under_other_article = function(){
        return element(by.id('more_about')).$$('.col-4.col-12-sm').then(function(elem){
                return elem.length;
            });
    };

    this.load_more_button = function(){
        // return dvr.findElement(by.css('.center.mb-32.mt-8 > a')).then(function(elem){
        //     return elem;
        // });
        return element(by.id('load_more_btn'));
    };

    this.loaded_article= function(index){
        return element(by.id('more_about')).$$('.col-4.col-12-sm').get(index);
    }
}

module.exports = new childPage_obj();