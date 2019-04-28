var test_obj = function(){

    this.enter_text = browser.driver.findElement(by.xpath(".//*[@id='table1']/tbody/tr[2]/td/div/p/input"));

    this.button = browser.driver.findElement(by.xpath(".//*[@id='continue_button']"));


    this.enter_text = function(text){
        this.enter_text.sendKeys(text);
    };

    this.button = function(){
        this.button.click();
    };
};

module.exports = new test_obj();