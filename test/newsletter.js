
describe('newsletter ->', function () {

    var newsletter_obj;

    beforeEach(function () {
        newsletter_obj = require('../page/newsletter_obj.js');
    });

    // afterEach(function () {
    //     browser.manage().logs().get('browser').then(function (browserLog) {
    //        // expect(browserLog.length).toEqual(0);
    //         if (browserLog.length) {
    //             console.error('log: ' + JSON.stringify(browserLog));
    //         }
    //     });
    // });

    it('checkbox = unchecked and Email = empty ', function () {
        browser.executeScript("arguments[0].click();",newsletter_obj.signup_newsletter());
        room5_util.wait_to_Visible(newsletter_obj.alert_for_checkbox());
        expect(newsletter_obj.alert_for_checkbox().getText()).toBe(uni_var.alert_without_checkbox_error);
    });

    it('checkbox = checked and email = empty ', function () {
        browser.executeScript("arguments[0].click();",newsletter_obj.signup_newsletter_checkbox());
        browser.executeScript("arguments[0].click();",newsletter_obj.signup_newsletter());
        room5_util.wait_to_Visible(newsletter_obj.alert_for_checkbox());
        expect(newsletter_obj.alert_for_checkbox().getText()).toBe(uni_var.alert_with_checkbox_error);
    });

    it('checkbox = checked and email = not empty but invalid email', function () {
        newsletter_obj.newsleter_email("samsul@aol");
        browser.executeScript("arguments[0].click();",newsletter_obj.signup_newsletter());
        room5_util.wait_for_text_to_change(newsletter_obj.alert_for_checkbox());
        room5_util.sleep_time_m();
        expect(newsletter_obj.alert_for_checkbox().getText()).toBe(uni_var.alert_with_invalid_email_error);
    });

    it('checkbox = checked and email = not empty ', function () {
        newsletter_obj.newsleter_email_clear();
        newsletter_obj.newsleter_email("samsul@aol.com");
        browser.executeScript("arguments[0].click();",newsletter_obj.signup_newsletter());
        room5_util.wait_for_text_to_change(newsletter_obj.signup_newsletter_success());
        room5_util.sleep_time_l();
        expect(newsletter_obj.signup_newsletter_success().getText()).toBe(uni_var.signup_newsletter_success_message);
    });


});
