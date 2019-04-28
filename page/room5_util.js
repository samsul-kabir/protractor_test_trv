var room5_util = function(){

    var that = this;

    /******************************** Get HTTP response code ******************/
    this.httpGet = function(siteUrl){
        var http = require('http');
        var defer = protractor.promise.defer();

        http.get(siteUrl, function(response) {

            var bodyString = '';

            response.setEncoding('utf8');

            response.on("data", function(chunk) {
                bodyString += chunk;
            });

            response.on('end', function() {
                defer.fulfill({
                    statusCode: response.statusCode,
                    bodyString: bodyString
                });
            });

        }).on('error', function(e) {
            defer.reject("Got http.get error: " + e.message);
        });

        return defer.promise;
    };

    /******************************** Get HTTPS response code ******************/
    this.httpSGet = function(siteUrl){
        var http = require('https');
        var defer = protractor.promise.defer();

        http.get(siteUrl, function(response) {

            var bodyString = '';

            response.setEncoding('utf8');

            response.on("data", function(chunk) {
                bodyString += chunk;
            });

            response.on('end', function() {
                defer.fulfill({
                    statusCode: response.statusCode,
                    bodyString: bodyString
                });
            });

        }).on('error', function(e) {
            defer.reject("Got https.get error: " + e.message);
        });

        return defer.promise;
    };


    /******************************** Scrolling to a position ******************/
    this.scrollto = function(){

    }

    /**
     * wrap this.timeout. (ms) in t-shirt sizes
     */
    this.timeout = {
        'xs': 100,
        's' : 1000,
        'm' : 2000,
        'l' : 5000,
        'xl': 9000,
        'xxl': 15000
    };

    this.sleep_time_xs = function(){
        browser.sleep(this.timeout.xs);
    }

    this.sleep_time_s = function(){
        browser.sleep(this.timeout.s);
    }

    this.sleep_time_m = function(){
        browser.sleep(this.timeout.m);
    }

    this.sleep_time_l = function(){
        browser.sleep(this.timeout.l);
    }

    this.sleep_time_xl = function(){
        browser.sleep(this.timeout.xl);
    }

    this.sleep_time_xxl = function(){
        browser.sleep(this.timeout.xxl);
    }

    this.wait_for_browser_to_load = function(){
        var currentUrl;
        browser.getCurrentUrl().then(function(url) {
                currentUrl = url;
                //console.log(currentUrl);
            }
        ).then(function() {
                browser.wait(function() {
                    return browser.getCurrentUrl().then(function (changed_url) {
                        //console.log(changed_url);
                        return changed_url !== "" && changed_url !== currentUrl;
                    });
                },10000);
            }
        ).then(function () {
            // continue testing
        });
    }

    this.wait_for_page_to_load = function(currentUrl){
                browser.wait(function() {
                    return browser.getCurrentUrl().then(function (changed_url) {
                        //console.log(changed_url);
                        return changed_url !== "" && changed_url !== currentUrl;
                    });
                },10000);
    }

    this.wait_for_text_to_change = function(locator){
        var currentText;
        locator.getText().then(function(text) {
                currentText = text;
                //console.log(currentText);
            }
        ).then(function() {
                browser.wait(function() {
                    that.wait_to_Visible(locator);
                    return locator.getText().then(function (changedText) {
                        //console.log(changedText);
                        return changedText !== "" && changedText !== currentText;
                    });
                },20000);
            }
        ).then(function () {
            // continue testing
        });
    }


    this.wait_for_css_to_change = function(locator,currentCSS){
                browser.wait(function() {
                    return locator.getText().then(function (changedCSS) {
                        //console.log(" ");
                        return changedCSS !== "" && changedCSS !==currentCSS;
                    });
                },10000);
    }

    /**
     * wait_to_visible function will wait for 20s to see if the element is visible.
     * if it is visible then, it will move forward with the next step
     * @returns {promise}
     */

    this.wait_to_Visible = function(web_element){
        browser.wait(this.isVisible(web_element), 20000);
    };

    this.wait_to_isNotFalse = function(val){
        browser.wait(this.isNotFalse(val), 20000);
    };

    /**
     * wait and verify that a page is loaded
     * @returns {promise}
     * @requires a page to include `pageLoaded` method
     */
    this.at = function() {
        return browser.wait(this.pageLoaded(), this.timeout.xl);
    };

    /**
     * navigate to a page via it's `url` var
     * and verify/wait via at()
     *
     * @requires page have both `url` and `pageLoaded` properties
     */
    this.to = function() {
        browser.get(this.url, this.timeout.xl);
        return this.at();
    };

    this.wait_has_text = function(web_element, text){
        browser.wait(this.hasText(web_element,text), 20000);
    }

    this.isVisible = function(locator) {
        return EC.visibilityOf(locator);
    };

    this.isNotVisible = function(locator) {
        return EC.invisibilityOf(locator);
    };

    this.inDom = function(locator) {
        return EC.presenceOf(locator);
    };

    this.notInDom = function(locator) {
        return EC.stalenessOf(locator);
    };

    this.isClickable = function(locator) {
        return EC.elementToBeClickable(locator);
    };

    this.hasText = function(locator, text) {
        return EC.textToBePresentInElement(locator, text);
    };

    this.and = function(arrayOfFunctions) {
        return EC.and(arrayOfFunctions);
    };

    this.titleIs = function(title) {
        return EC.titleIs(title);
    };


    /**
     * test if an element has a class
     *
     * @param  {elementFinder} locator - eg. $('div#myId')
     * @param  {string}  klass  - class name
     * @return {Boolean} - does the element have the class?
     */
    this.hasClass = function(locator, klass) {
        return locator.getAttribute('class').then(function(classes) {
            return classes.split(' ').indexOf(klass) !== -1;
        });
    };

    /**
     * Webdriver equivilant to hitting Enter/Return key.
     */
    this.hitEnter = function() {
        return browser.actions().sendKeys(protractor.Key.ENTER).perform();
    };

};

module.exports = new room5_util();
