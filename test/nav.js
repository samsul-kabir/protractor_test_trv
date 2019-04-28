

describe('Navigation menu ->', function () {

    var menu_item;
    var childPage;
    var nav_page_css;

    beforeEach(function () {
        menu_item = require('../page/nav_list.js');
        childPage = require('../page/childPage_obj.js');
        room5_util.sleep_time_s();
        nav_page_css = menu_item.nav_page_css();
        $(".nav-icon").click();
        room5_util.wait_for_css_to_change(menu_item.nav_page_css(),nav_page_css)
    });

    afterEach(function () {
        // browser.manage().logs().get('browser').then(function (browserLog) {
        //     //expect(browserLog.length).toEqual(0);
        //     if (browserLog.length) {
        //         console.error('log: ' + JSON.stringify(browserLog));
        //     }
        // });

        dvr.getCurrentUrl().then(function(url){
            room5_util.httpGet(url).then(function(result) {
                expect(result.statusCode).toBe(200);
            });
        });
    });

    it('Click on menu#1', function () {
        browser.executeScript("arguments[0].click();",menu_item.menuItem(0));
        room5_util.wait_for_browser_to_load();
        expect(dvr.getCurrentUrl()).toBe(uni_var.baseUrl + "destination/australia/");

    });

    it('Click on menu#2', function () {
        browser.executeScript("arguments[0].click();",menu_item.menuItem(1));
        room5_util.wait_for_browser_to_load();
        expect(dvr.getCurrentUrl()).toBe(uni_var.baseUrl + "destination/australia/country/new-south-wales/");
    });

    it('Click on menu#3', function () {
        browser.executeScript("arguments[0].click();",menu_item.menuItem(2));
        dvr.sleep(sleep);
        expect(dvr.getCurrentUrl()).toBe(uni_var.baseUrl + "destination/australia/country/victoria/");
    });

    it('Click on menu#4', function () {
        browser.executeScript("arguments[0].click();",menu_item.menuItem(3));
        room5_util.wait_for_browser_to_load();
        expect(dvr.getCurrentUrl()).toBe(uni_var.baseUrl + "destination/new-zealand/");
    });

    it('Click on menu#5', function () {
        browser.executeScript("arguments[0].click();",menu_item.menuItem(4));
        room5_util.wait_for_browser_to_load();
        expect(dvr.getCurrentUrl()).toBe(uni_var.baseUrl + "destination/asia-pacific/");
    });

    it('Click on menu#6', function () {
        browser.executeScript("arguments[0].click();",menu_item.menuItem(5));
        room5_util.wait_for_browser_to_load();
        expect(dvr.getCurrentUrl()).toBe(uni_var.baseUrl + "destination/worldwide/");
    });

    it('Click on menu#7', function () {
        browser.executeScript("arguments[0].click();",menu_item.menuItem(6));
        room5_util.wait_for_browser_to_load();
        expect(dvr.getCurrentUrl()).toBe(uni_var.baseUrl + "destination/all-destinations/");
    });

    it('Click on menu#8', function () {
        var url = dvr.getCurrentUrl();
            $$('.di-link').then(function(elem){
                    browser.executeScript("arguments[0].click();",elem[9]);
                });
        room5_util.wait_for_page_to_load(url);
        expect(dvr.getCurrentUrl()).toBe(uni_var.baseUrl + "type/beach/");
    });

    it('Click on menu#9', function () {
        browser.executeScript("arguments[0].click();",menu_item.menuItem(7));
        // dvr.sleep(sleep);
        room5_util.wait_for_browser_to_load();
        // expect(dvr.getCurrentUrl()).toBe(baseUrl + menu_item.url_Fuer_Paare);
        expect(dvr.getCurrentUrl()).toBe(uni_var.baseUrl + "theme/budget/");
    });

    it('Click on menu#10', function () {
        browser.executeScript("arguments[0].click();",menu_item.menuItem(8));
        room5_util.wait_for_browser_to_load();
        expect(dvr.getCurrentUrl()).toBe(uni_var.baseUrl + "theme/family/");
    });

    it('Click on menu#11', function () {
        browser.executeScript("arguments[0].click();",menu_item.menuItem(9));
        room5_util.wait_for_browser_to_load();
        expect(dvr.getCurrentUrl()).toBe(uni_var.baseUrl + "theme/luxury/");
    });


    it('Click on menu#12', function () {
        browser.executeScript("arguments[0].click();",menu_item.menuItem(10));
        room5_util.wait_for_browser_to_load();
        expect(dvr.getCurrentUrl()).toBe(uni_var.baseUrl + "theme/inspire-me/");
    });

    it('Click on menu#13', function () {
        browser.executeScript("arguments[0].click();",menu_item.menuItem(11));
        room5_util.wait_for_browser_to_load();
        expect(dvr.getCurrentUrl()).toBe(uni_var.baseUrl + "theme/all-themes/");
    });

});
