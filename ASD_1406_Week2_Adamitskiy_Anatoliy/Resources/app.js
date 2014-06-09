/*
 * Anatoliy Adamitskiy
 * Advanced Scalable Data Infrastructures 
 * Week 2 Application 
 */

var data = require("data");

/*  This code opens up the main page 
 *  and is creating all the UI elements 
 *  that will contain the API data
*/

var windowWidth = Ti.Platform.displayCaps.platformWidth;

var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#faebda",
	statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT
});

/*  This here is the creation of the Navigation bar
 *  on the top of the application.
 */ 

var navBar = Ti.UI.createView({
	backgroundColor: "#eb4a33",
	top: 0,
	height: 65,
	width: windowWidth
});

var subReddit = Ti.UI.createLabel({
	text: "frontpage",
	color: "#fff",
	font : {
			fontSize : "18dp",
			fontFamily : "Helvetica"
		},
	top: 30
});

var alien = Ti.UI.createView({
	backgroundImage: "alien.png",
	width: 35,
	height: 35,
	right: 6,
	top: 23
});

var navMenu = Ti.UI.createView({
	backgroundImage: "navMenu.png",
	width: 30,
	height: 30,
	left: 10,
	top: 25
});

var table = Ti.UI.createTableView({
	backgroundColor: "#f9f1e7",
	top: 65,
	rowHeight: 70,
	bottom: 0
});

mainWindow.add(table);
navBar.add(navMenu);
navBar.add(alien);
navBar.add(subReddit);
mainWindow.add(navBar);
mainWindow.open();