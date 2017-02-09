# Addedodemo
Video Lab
Project Overview
	Application need nodejs and npm installed.
	This code is only written for chrome latest version.
	Application may not support on other browsers. Implementation for other browser could be done latter.
	For Desktop video could be pay by hitting enter button after selection of a video
	Video could be scrolled on desktop using mousewheel or by navigating through left and write arrow.
	On mobile and other touch device video list could be moved using touchmove and could be played using touch.
	Video stored in history could be accessed by clicking on history link.
	Database is created on amazon server using https://mlab.com/.
	Document for UI side code could be accessed from docs folder.
	Reports related to jslint errors and sass lint error could be accessed from log folder.

Step to setup  
	Clone the code from git. https://github.com/testPiyush/Addedodemo.git
	Navigate to root folder of application and open command prompt.
	Run npm install command.
	After successful installation of node modules run                       grunt setup-video-lab --force
	Run npm start command 
	Open another command prompt on same path write                 node server/app.js 
	Open chrome browser and type http://localhost:8000/
	You are done Enjoy your website. Thanks!

Please Note:
If you have anything else running on port 8000 please change the port in server.js on line number 36 and hit http://localhost:<new port> in browser.
If you have anything else running on port 3000 please change port in server/app.js on line number 35 and in app.js line number 282. And run node server/app.js command again.

