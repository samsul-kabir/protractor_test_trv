/**
 * Created by skabir on 15.08.17.
 */

var ci_variable = function(){
    this.baseUrl = "http://room5.ci.trivago.pse/";
    this.baseLocal = '.com.au/';
    this.baseCountry = 'Australia';
    this.article_to_test = 'http://room5.ci.trivago.pse/barossa-valley-accommodation/';

    //************** search *********************//
    this.word_to_search = "VICTORIA";
    this.word_in_article_title = 'romantic';

    //************** newsletter *********************//
    this.alert_without_checkbox_error = 'Please accept terms and conditions';
    this.alert_with_checkbox_error = "Oops! Please enter a valid e-mail address :)";
    this.alert_with_invalid_email_error = "Invalid e-mail address";
    this.signup_newsletter_success_message = "You're now checked-in!";

    //************** parent page *********************//
    this.parentPage_to_load = 'http://room5.ci.trivago.pse/destination/australia/';

    //************** grand child page *********************//
    this.grandChildPage_to_load = 'http://room5.ci.trivago.pse/destination/australia/country/new-south-wales/';

    //************** author page *********************//
    this.authordPage_to_load = 'http://room5.ci.trivago.pse/author/lprobyn/';
};

module.exports = new ci_variable();