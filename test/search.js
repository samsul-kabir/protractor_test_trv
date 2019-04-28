describe('Search ->', function () {

    var search_obj;

    beforeEach(function () {
        search_obj = require('../page/search_obj.js');
    });

    // afterEach(function () {
    //     browser.manage().logs().get('browser').then(function (browserLog) {
    //        // expect(browserLog.length).toEqual(0);
    //         if (browserLog.length) {
    //             console.error('log: ' + JSON.stringify(browserLog));
    //         }
    //     });
    // });


    it('click on search icon', function () {
        browser.executeScript("arguments[0].click();",search_obj.search_icon());
        expect(search_obj.cross_on_search().isDisplayed()).toBe(true);
    });

    it('most popular article displayed', function () {
        browser.executeScript("arguments[0].click();",search_obj.search_icon());
        room5_util.wait_to_Visible(search_obj.waiting_for_article_under_most_popular());
        search_obj.most_popular_article_section_title().then(function(text){
            expect(text.length).not.toEqual(0);
        });
    });

    it('total number of article under most popular is 3', function () {
        search_obj.number_of_article_under_most_popular().then(function(total_number_of_article){
            expect(total_number_of_article).toEqual(3);
        });
    });

    it('latest article displayed', function () {
        search_obj.latest_article_section_title().then(function(text){
            expect(text.length).not.toEqual(0);
        });
    });

    it('total number of article under latest is 3', function () {
        search_obj.number_of_article_under_latest_article().then(function(total_number_of_article){
            expect(total_number_of_article).toEqual(3);
        });
    });

    it('found category by search',function () {
        search_obj.input_on_search(uni_var.word_to_search);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        room5_util.wait_to_Visible(search_obj.category_after_search());
        expect(search_obj.category_after_search().isDisplayed()).toBe(true);
    });

    it('category has feature image',function () {
        expect(search_obj.category_has_featured_image().isDisplayed()).toBe(true);
    });

    it('type word to look in title',function () {
        search_obj.clear_search();
        search_obj.input_on_search(uni_var.word_in_article_title);
        room5_util.wait_to_Visible(search_obj.search_has_result_element());
        room5_util.sleep_time_m();
        search_obj.search_has_result().then(function(text){
            expect(Number(text.charAt(0))).not.toEqual(0);
        });
    });

    it('found word in the title',function () {
        room5_util.sleep_time_m();
        search_obj.word_found_in_article_title(0).then(function(word_in_article_title){
            expect(word_in_article_title).toContain(uni_var.word_in_article_title);
        });
    });


    it('no result found',function () {
        search_obj.clear_search();
        search_obj.input_on_search("I have no fucking clue what you are looking for");
        room5_util.wait_to_Visible(search_obj.search_has_no_result());
        expect(search_obj.search_has_no_result().isDisplayed()).toBe(true);
    });

    it('click on cross',function () {
        //search_obj.cross_on_search().click();
        browser.executeScript("arguments[0].click();",search_obj.cross_on_search());
        room5_util.sleep_time_s();
        expect(search_obj.search_icon().isDisplayed()).toBe(true);
    });
});
