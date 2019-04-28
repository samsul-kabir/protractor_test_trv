/**
 * Created by skabir on 17.05.17.
 */

var authorPage_obj = function(){

    this.author_name = function(){
        return $(".mb-32.mt-32");
    }

    this.author_image = function(){
        return $(".avatar.avatar-96.photo");
    }


    this.author_description = function(){
        return element(By.xpath(".//*[@id='content']/div/div/div[3]"))
            .getText();
    }

    this.author_title_header = function(){
        return $$(".center.uppercase > h3").get(0);
    }

    this.author_social_network = function(social_link_position){
        return $(".author-social-icons.mt-32.center")
                .$$("a.share_link").get(social_link_position)
                .getAttribute("href");

    }

    this.number_of_article = function(){
        return $(".author-posts-list")
            .$$(".col-4.col-12-sm")
            .then(function(elem){
            return elem.length;
        });
    }

    this.seventh_article = function(){
        return $(".author-posts-list")
            .$$(".col-4.col-12-sm").get(6);
    }

    this.load_more_button = function() {
        return $(".see_all_btn.load-more-articles-for-author-button.montserrat-regular");
    }
}

module.exports = new authorPage_obj();
