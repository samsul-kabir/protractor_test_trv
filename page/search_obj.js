var search_obj = function(){

    this.waiting_for_article_under_most_popular = function(){
        return $(".search-layer").$(".search-suggestions.loaded")
            .$$(".container-wide.plr-20").get(0)
            .element(By.tagName("h1"));
    };

    this.most_popular_article_section_title = function(){
        return $(".search-layer").$(".search-suggestions.loaded")
            .$$(".container-wide.plr-20").get(0)
            .element(By.tagName("h1"))
            .getText();
    };

    this.number_of_article_under_most_popular = function(){
        return element(By.id("search_most_popular")).$$(".col-4.col-12-sm.mb-32.mt-32").then(function(elem){
            return elem.length;
        });
    };

    this.latest_article_section_title = function(){
        return $(".search-layer").$(".search-suggestions.loaded").
                $$(".container-wide.plr-20").get(1)
                .element(By.tagName("h1")).getText();
    };

    this.number_of_article_under_latest_article = function(){
        return element.all(By.id("search_latest_articles")).get(0).$$(".col-4.col-12-sm.mb-32").then(function(elem){
            return elem.length;
        });
    };

    this.search_icon = function(){
        return $(".room5-icons-search");
    };

    this.cross_on_search = function(){
        return $(".search-icon-close.room5_icons_close");
    };

    this.input_on_search = function(text){
        element(By.id("ajax-search-input")).sendKeys(text,protractor.Key.ENTER);
    };

    this.clear_search = function(){
        $(".search-input").clear();
    };

    this.category_after_search = function(){
        return $(".search-layer").element(By.id("articleheader"));
    };

    this.category_has_featured_image = function(){
        return $(".search-layer").$(".search-results-wrapper.loaded").
                $$(".container-wide.plr-10").get(0)
                .$(".post-thumbs-search");
    };

    this.search_has_result = function(){
        return $(".search-layer").$(".search-results-wrapper.loaded").
            $$(".container-wide.plr-20").get(0)
            .element(By.tagName("h1")).getText();
    };

    this.search_has_result_element = function(){
        return $(".search-layer").$(".search-results-wrapper.loaded").
            $$(".container-wide.plr-20").get(0)
            .element(By.tagName("h1"));
    };

    this.search_has_no_result = function(){
        return $(".search-layer").$(".search-results-wrapper.loaded").
            $$(".container-wide.plr-20").get(0)
            .element(By.tagName("p"));
    };

    this.word_found_in_article_title = function(index){
        return $(".search-layer").$(".search-results-wrapper.loaded")
            .$$(".container-wide.plr-10").get(1)
            .$$(".mt-8.montserrat-regular").get(0).getText();
    };
};

module.exports = new search_obj();
