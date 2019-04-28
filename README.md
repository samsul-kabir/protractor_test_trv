<h2>Install Protractor</h2>
<ul>
<li>Install node.js from https://nodejs.org/en/. download and install then.</li><br />
<li>Next step to install protractor. To do try this:<br />
<code class="inlinecode">npm install -g protractor</code>
</li><br />
<li>Protractor is a framework will be used to run end-to-end test on web browser. to run protractor, you need to install selenium server. to run selenium server, you need to install java jdk.
http://www.oracle.com/technetwork/java/javase/downloads/index.html
</li><br />
<li>Now that we installed java, we need to run selenium server in order to run our protractor test. When we install protractor manager, it also installed webdriver manager which we have showed earlier. Before running webdriver manager, we need to update webdriver manager to update. Run the following command:<br />
<code class="inlinecode">webdriver-manager update</code><br />
what this will do is to update webdriver manager to latest version and get all the necessary libraries.</li><br />
<li>In order to generate report, run the following command:<br />
<code class="inlinecode">npm i -g protractor-html-reporter --save<br />
npm install protractor-jasmine2-screenshot-reporter --save</code><br />
<p>It will generate report like this</p>
<br />
<a href="http://tinypic.com?ref=6ht8i1" target="_blank"><img src="http://i66.tinypic.com/6ht8i1.png" border="0" alt="Image and video hosting by TinyPic"></a>
</li><br />
<li>Start the webdriver<br />
<code class="inlinecode">webdriver-manager start</code>
</li><br />
<li>Now we are ready to run our protractor test. Go to the location of protractor configuration file and run the following the command<br />
   <code class="inlinecode">protractor conf.js</code> 
</li>
</ul>
