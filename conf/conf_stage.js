exports.config = {

    multiCapabilities: [

      /************************* browserstack internet explorer desktop *****************/
      {
          'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub',
          'browserstack.user': 'samsulkabir',
          'browserstack.key': 'SnN46CSG4',
          'os': 'Windows',
          'os_version': '10',
          'platformName': 'WINDOWS',
          'browserName': 'IE',
          'browser_version': '11.0',
          'resolution': '1024x768',
          'browserstack.local': true
      },

      /************************* browserstack chrome desktop *****************/
      {
          'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub',
          'browserstack.user': 'samsulkabir',
          'browserstack.key': 'SnN46CSG4',
          'os': 'OS X',
          'os_version': 'Sierra',
          'browserName': 'Chrome',
          'browser_version': '60.0',
          'resolution': '1024x768',
          'browserstack.local': true
      },

      /************************* browserstack safari desktop *****************/
      {
          'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub',
          'browserstack.user': 'samsulkabir',
          'browserstack.key': 'SnN46CSG4',
          'os': 'OS X',
          'os_version': 'Sierra',
          'browserName': 'Safari',
          'browser_version': '10.1',
          'resolution': '1024x768',
          'browserstack.local': true
      },

      /************************* browserstack chrome android *****************/
      {
          'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub',
          'browserstack.user': 'samsulkabir',
          'browserstack.key': 'SnN46CSG4',
          'browserName': 'chrome',
          'device': 'Samsung Galaxy S6',
          'realMobile': 'true',
          'os_version': '5.0',
          'browserstack.local': true
      },

      /************************* browserstack safari iPhone *****************/
      {
          'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub',
          'browserstack.user': 'samsulkabir',
          'browserstack.key': 'SnN46CSG4',
          'browserName': 'iPhone',
          'platform': 'MAC',
          'device': 'iPhone 6S',
          'browserstack.local': true
      },

      /************************* chrome desktop *****************/
      {
          browserName: 'chrome',
          platformName: 'MAC',
          seleniumAddress: 'http://localhost:4444/wd/hub'
      },

      /************************* firefox desktop *****************/
      {
          browserName: 'firefox',
          marionette: true,
          platformName: 'darwin',
          seleniumAddress: 'http://localhost:4444/wd/hub',
      },

      /************************* safari desktop *****************/
      {
          // Please "Allow remote automation" from safari develop menu
          browserName: 'safari',
          platformName: 'macOS',
          seleniumAddress: 'http://localhost:4444/wd/hub',
          //cleanSession: false
      },

      /************************* Android (Samsung S5 neo) *****************/
      {
          browserName: 'chrome',
          platformName: 'ANDROID',
          platformVersion: '6.0.1',
          udid: '330039b297aba20b',
          deviceName: 'Jean',
          seleniumAddress: 'http://localhost:4723/wd/hub',
      },

      /************************* iPhone 6s *****************/
      {
          browserName: 'safari',
          platformName: 'iOS',
          platformVersion: '10.3.2',
          deviceName: 'Emilio',
          udid: '01e0b805328aa5fccc6199ccc022bfd6c7f24ce1',
          //udid: '1830343E-409F-4BE0-A801-27C967022A7B',
          xcodeOrgId: '4VAJ36XYAR',
          xcodeSigningId: 'iPhone Developer',
          seleniumAddress: 'http://localhost:4723/wd/hub'
      },

      /************************* iPad *****************/
      {
          browserName: 'Safari',
          platformName: 'iOS',
          platformVersion: '10.2.1',
          deviceName: '-Ghazale',
          udid: '66b65b8fcc13cd1be0f2999d93a59f52ed98417f',
          xcodeOrgId: '4VAJ36XYAR',
          xcodeSigningId: 'iPhone Developer',
          seleniumAddress: 'http://localhost:4723/wd/hub',
          //fullReset: 'false',
          //noReset: 'true'
          //xcodeConfigFile: '/Users/skabir/Documents/myconfig.xcconfig'
          //xcodeConfigFile: '/usr/local/lib/node_modules/appium/node_modules/appium-xcuitest-driver/WebDriverAgent/ProjectSettings.xcconfig'
      },

      /************************* Android *****************/
      {
          browserName: 'Chrome',
          platformName: 'Android',
          platformVersion: '5.1.1',
          udid: '52006db268fa23d1',
          deviceName: 'batman'
          seleniumAddress: 'http://localhost:4723/wd/hub',
      },

      /************************* Android *****************/
      // {
      //     'browserName': 'chrome',
      //     'chromeOptions' : {
      //         args: [
      //             '--lang=en',
      //             '--window-size=640,960',
      //             '--window-position=2100,-650',
      //             '--user-agent ="Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_1_1 like Mac OS X; en) AppleWebKit/534.46.0 (KHTML, like Gecko) CriOS/19.0.1084.60 Mobile/9B206 Safari/7534.48.3"'
      //         ]
      //     },
      // }
    ],

    specs: [
        '../test/landing.js',
        '../test/tracking_suite.js',
        '../test/homepage.js',
        '../test/newsletter.js',
        '../test/footer.js',
        '../test/search.js',
        '../test/article.js',
        '../test/nav.js',
        '../test/parentPage.js',
        '../test/grandChildPage.js',
        '../test/authorPage.js',
        '../test/childPage.js',
        // '../test/test.js',
    ],

    framework: 'jasmine2',

    onPrepare: function(){
        browser.ignoreSynchronization = true;
        global.dvr = browser.driver;
        global.EC = protractor.ExpectedConditions;
        //browser.manage().deleteAllCookies();
        //browser.driver.manage().deleteAllCookies();


        var jasmineReporters = require('jasmine-reporters');

        // returning the promise makes protractor wait for the reporter config before executing tests
        return global.browser.getProcessedConfig().then(function(config) {
            // you could use other properties here if you want, such as platform and version
            var browserName = config.capabilities.browserName;
            var platformName = config.capabilities.platformName;

            var junitReporter = new jasmineReporters.JUnitXmlReporter({
                consolidateAll: true,
                savePath: 'testresults',
                // this will produce distinct xml files for each capability
                filePrefix: browserName + '_' + platformName +'-xmloutput',
                modifySuiteName: function(generatedSuiteName, suite) {
                    // this will produce distinct suite names for each capability,
                    // e.g. 'firefox.login tests' and 'chrome.login tests'
                    return browserName + '_' + platformName + '.' + generatedSuiteName;
                }
            });
            jasmine.getEnv().addReporter(junitReporter);
        });
    },



    onComplete: function() {
        var browserName, browserVersion, platformName, platform, device;
        var capsPromise = browser.getCapabilities();

        capsPromise.then(function (caps) {
            console.log(caps);
            browserName = caps.get('browserName');
            browserVersion = caps.get('version');
            platformName = caps.get('platformName');
            platform = caps.get('platform');
            device = caps.get('device');
            var HTMLReport = require('protractor-html-reporter');

            testConfig = {
                reportTitle: 'Test Execution Report',
                outputPath: './report/' + platformName,
                screenshotPath: './report/screenshots',
                testBrowser: browserName,
                browserVersion: browserVersion,
                platformName: platformName,
                modifiedSuiteName: false,
                screenshotsOnlyOnFailure: true
            };

            testConfig_windows = {
                reportTitle: 'Test Execution Report',
                outputPath: './report/' + platform,
                screenshotPath: './report/screenshots',
                testBrowser: browserName,
                browserVersion: browserVersion,
                platformName: platformName,
                modifiedSuiteName: false,
                screenshotsOnlyOnFailure: true
            };

            if(device == 'iPhone 6S'){
                new HTMLReport().from('./testresults/'+ 'iPhone_undefined' + '-xmloutput.xml', testConfig);
            }else if(platform == 'WINDOWS'){
                new HTMLReport().from('./testresults/'+ 'IE' + '_' + platform + '-xmloutput.xml', testConfig_windows);
            }else if(platformName == null){
                new HTMLReport().from('./testresults/'+ browserName + '_MAC'+ '-xmloutput.xml', testConfig);
            }else {
                new HTMLReport().from('./testresults/'+ browserName + '_' + platformName + '-xmloutput.xml', testConfig);
            }
        });
    },


    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
        //recreateChromeDriverSessions: true
        // How long to wait for a page to load.
        getPageTimeout: 30000,
        allScriptsTimeout: 30000,
        defaultTimeoutInterval: 30000
    }

};


uni_var = require('../page/variable_stage.js');
sleep = 3*1000;
room5_util = require('../page/room5_util.js');
