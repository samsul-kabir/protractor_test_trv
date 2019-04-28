from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

desired_cap = {
    'os': 'Windows',
    'os_version': 'xp',
    'browser': 'IE',
    'browser_version': '7.0',
    'browserstack.local': True
}

driver = webdriver.Remote(
    command_executor='http://xxx24:M5XmGSu65xNCy1t6uRC8@hub.browserstack.com:80/wd/hub',
    desired_capabilities=desired_cap)

driver.get("http://room5.ci.trivago.pse/")
if not "Room5: hotel inspiration from trivago.com.au" in driver.title:
    raise Exception("Unable to load google page!")

driver.quit()
