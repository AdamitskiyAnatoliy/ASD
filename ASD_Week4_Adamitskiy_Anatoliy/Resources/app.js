/* Anatoliy Adamitskiy
* Advanced Scalable Data Infrastructures
* Week 4 Reddit Application
*/

// Width of the window on the device
var windowWidth = Ti.Platform.displayCaps.platformWidth;

// Requiring the other modules for this project
var data = require("data");
var database = require("database");

// Main window that will house the Reddit feed
var mainWindow = Ti.UI.createWindow({
	backgroundColor : "#faebda",
	statusBarStyle : Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT
});

var updateTable = function() {
	
	var data1 = data.getRows();
	table2.setData(data1);
};

// Navigation bar at the top of the main window
var navBar = Ti.UI.createView({
	backgroundColor : "#000",
	top : 0,
	height : 65,
	width : windowWidth
});

// Favorites button that will bring us to the favorites page
var favorites = Ti.UI.createView({
	backgroundImage : "favorite_03.png",
	width : 30,
	height : 30,
	right : 6,
	top : 27
});

// This is the label that shows us what subreddit we are in
var subReddit = Ti.UI.createLabel({
	text : "frontpage",
	color : "#fff",
	font : {
		fontSize : "18dp",
		fontFamily : "Helvetica"
	},
	top : 30
});

// Main table that will house the Reddit data
var table = Ti.UI.createTableView({
	backgroundColor : "#fff",
	top : 65,
	rowHeight : 70,
	bottom : 0
});


table.addEventListener("longpress", function(e) {
	
	alert("Saved to favorites.");
	database.update(e.source.title);
	
});


var table2 = Ti.UI.createTableView({
		backgroundColor : "#fff",
		top : 65,
		rowHeight : 70,
		bottom : 0
	});

// Adding an event listener to the favorites button
favorites.addEventListener("click", function() {
	var favoritesWin = Ti.UI.createWindow({
		backgroundColor : "#fff",
		statusBarStyle : Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT
	});

	var navBar = Ti.UI.createView({
		backgroundColor : "#000",
		top : 0,
		height : 65,
		width : windowWidth
	});

	var favoritesTitle = Ti.UI.createLabel({
		text : "Favorites",
		color : "#fff",
		font : {
			fontSize : "18dp",
			fontFamily : "Helvetica"
		},
		top : 30
	});

	favoritesWin.add(favoritesTitle);
	favoritesWin.add(table2);
	favoritesWin.add(navBar);
	favoritesWin.open();
});




// Adding all the elements to their respective parent
mainWindow.add(table);
navBar.add(favorites);
navBar.add(subReddit);
mainWindow.add(navBar);
mainWindow.open();
