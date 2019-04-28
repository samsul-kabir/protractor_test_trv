var nav_menu = function(){

    this.menu_icon = function(){
        return $(".nav-icon");
    };

    this.menu = function(){
        return $$(".di-link.term-link");
    };

    this.menuItem = function(index){
        return $$(".di-link.term-link").get(index);
    };

    this.total_item_in_menu = function(index){
        return $$(".di-link.term-link").then(function(elem){
            return elem.length;
        });
    };

    this.all_destinations = function(){
      return $('a[href="/destination/all-destinations"]');
    };

    this.all_themes = function(){
        return $('a[href="/theme/all-themes"]');
    };

    this.nav_page_css = function(){
        return $('.single-menu.montserrat-regular').getAttribute('class');
    };

};

module.exports = new nav_menu();
