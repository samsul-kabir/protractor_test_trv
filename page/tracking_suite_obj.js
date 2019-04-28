/**
 * Created by skabir on 06.09.17.
 */

var tracking_suite_obj = function(){
    this.first_cip = '61110000000002';
    this.href_link = [  'http://room5.trivago.com/',
                        'http://room5.trivago.co.uk/',
                        'http://room5.trivago.fr/',
                        'http://room5.trivago.es/',
                        'http://room5.trivago.gr/',
                        'http://room5.trivago.de/',
                        'http://room5.trivago.pt/',
                        'http://room5.trivago.com.br/',
                        'http://room5.trivago.sg/',
                        'http://room5.trivago.com.au/',
                        'http://room5.trivago.it/',
                        'http://room5.trivago.com.mx/',
                        'http://room5.trivago.fi/',
                        'http://room5.trivago.com.tr/',
                        'http://room5.trivago.hk/',
                        'http://room5.trivago.dk/',
                        'http://room5.trivago.ca/',
                        'http://room5.trivago.no/',
                        'http://room5.trivago.se/',
                        'http://room5.trivago.cz/'
                    ];


    this.homepage_pixel_wrapper = function (){
        return element(by.id('homepixelwrapper')).element(by.tagName('img')).getAttribute('src');
    }

    this.homepage_cip = function(){
        return element(by.id('homepixelwrapper'))
            .element(by.tagName('img'))
            .getAttribute('src')
            .then(function(src){
                return src.substring( src.indexOf('cip=')+4,
                       src.indexOf( '&' , src.indexOf('cip=')+4) );
            });
    };

    this.homepage_initial_cip = function(){
        return element(by.id('homepixelwrapper'))
                .element(by.tagName('img'))
                .getAttribute('src')
                .then(function(src){
                    return src.substring( src.indexOf('initial_cip=')+12,
                                          src.indexOf( '&' , src.indexOf('initial_cip=')+12) );
                });
    };

    this.homepage_content_type = function(){
        return element(by.id('homepixelwrapper'))
                .element(by.tagName('img'))
                .getAttribute('src')
                .then(function(src){
                    return src.substr( src.indexOf('contentType=')+12 , 1 );
                });
    };

    this.homepage_pixel_type = function(){
        return element(by.id('homepixelwrapper'))
                .element(by.tagName('img'))
                .getAttribute('src')
                .then(function(src){
                    return src.substr( src.indexOf('pixelType=')+10 , 1 );
                });
    };

    this.href = function(index){
        return $$('link[rel="alternate"]').get(index)
                .getAttribute('href');
    };

    this.rel_canonical = function(){
        return $('link[rel="canonical"]').getAttribute('href');
    };

    this.total_no_of_title_tag = function(){
        return element.all(by.tagName('title')).then(function(elem){
            return elem.length;
        });
    };

    this.title_tag = function(){
        return element.all(by.tagName('title')).getText();
    };

    this.taxonomy_cip = function(){
        return $('#content > div.container-wide.plr-10.filter-wrapper.term-wrapper > img')
            .getAttribute('src')
            .then(function(src){
                return src.substring( src.indexOf('cip=')+4,
                    src.indexOf( '&' , src.indexOf('cip=')+4) );
            });
    };

    this.taxonomy_content_type = function(){
        return $('#content > div.container-wide.plr-10.filter-wrapper.term-wrapper > img')
            .getAttribute('src')
            .then(function(src){
                return src.substr( src.indexOf('contentType=')+12 , 1 );
            });
    };

    this.taxonomy_pixel_type = function(){
        return $('#content > div.container-wide.plr-10.filter-wrapper.term-wrapper > img')
            .getAttribute('src')
            .then(function(src){
                return src.substr( src.indexOf('pixelType=')+10 , 1 );
            });
    };

    this.article_cip = function(index, img_tag_position){
        return $$('.single-post-wrapper').get(index)
            .$$('section.article-content > img').get(img_tag_position)
            .getAttribute('src')
            .then(function(src){
                return src.substring( src.indexOf('cip=')+4,
                    src.indexOf( '&' , src.indexOf('cip=')+4) );

            });
    };

    this.article_scroll = function(index, img_tag_position){
        return $$('.single-post-wrapper').get(index)
            .$$('section.article-content > img').get(img_tag_position)
            //.element.all(by.tagName('img')).get(img_tag_position)
            .getAttribute('src')
            .then(function(src){
                return src.substr( src.indexOf('scroll=')+7 , 3 );
            });
    };

    this.article_scroll_element = function(index, img_tag_position){
        return $$('.single-post-wrapper').get(index)
            .$$('section.article-content > img').get(img_tag_position);
    };

};

module.exports = new tracking_suite_obj();
