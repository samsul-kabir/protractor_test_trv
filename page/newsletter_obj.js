var newsletter_obj = function(){



    this.signup_newsletter = function(){
        return $(".etn__submit");
    };

    this.alert_for_checkbox = function(){
        return $$(".alert__message").get(0);
    };

    this.signup_newsletter_checkbox = function(){
        return element(By.id("etn_conf_checkbox_de"));
    };

    this.newsleter_email = function(email){
        element(By.id("etn_email")).sendKeys(email);
    };

    this.newsleter_email_clear = function(){
        element(By.id("etn_email")).clear();
    };

    this.signup_newsletter_success = function(){
        return $(".etn__text.montserrat-regular").element(By.tagName('p'));
    };

};

module.exports = new newsletter_obj();
