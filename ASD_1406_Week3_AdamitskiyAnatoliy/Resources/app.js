/*	Anatoliy Adamitskiy
 * 	Advanced Scalable Data Infrastructures
 * 	Week 3 Assignment
 */

//	Measures the width of the window
var windowWidth = Ti.Platform.displayCaps.platformWidth;

//	requiring the data module
var data = require("data");
//var edit = require("edit");

//	This function gets called when SQLite 
//	
var updateTable = function() {
	
	var calorieData = data.getRows("calorie");
	calorieTable.setData(calorieData);
	//console.log();
	
};

//	Main Window that will hold the table
var calorieWindow = Ti.UI.createWindow({
	title: "Calorie Tracker",
	navTintColor: "#fff",
	translucent: false,
	statusBarStyle: Titanium.UI.iPhone.StatusBar.DARK_CONTENT
});

//	Window that allows the adding and edit of Rows
var addEditCalorie = Ti.UI.createWindow({
	title: "New Entry",
	tintColor: "#b2b2b2",
	url: "edit.js",
	translucent: false,
	statusBarStyle: Titanium.UI.iPhone.StatusBar.DARK_CONTENT
});

//	Creation of the tableView
var calorieTable = Ti.UI.createTableView({
	backgroundColor: "#b2b2b2"
});

calorieWindow.add(calorieTable);

var tabGroup = Ti.UI.createTabGroup({
	barColor: "#9efd99",
	tabsBackgroundColor: "#9efd99"
});

var calorieTab = Titanium.UI.createTab({
	icon: "KS_nav_ui.png",
	title: "Calories",
	window: calorieWindow
});

//	updates the table
calorieWindow.addEventListener("focus", function(e) {
	updateTable();
});

//	button that will open window to add new row
var addButtonCalorie = Ti.UI.createView({
	height: 20,
	width: 20,
	backgroundImage:"plus@2x.png"
});

//	EventListener for the addButton
addButtonCalorie.addEventListener("click", function(e) {
	addEditCalorie.type = "calorie";
	addEditCalorie.openType = "new";
	addEditCalorie.id = "";
	addEditCalorie.date = "";
	addEditCalorie.calories = "";
	tabGroup.activeTab.open(addEditCalorie);
});

calorieWindow.rightNavButton = addButtonCalorie;

updateTable();



//	Opening of the mainWindow
tabGroup.addTab(calorieTab);
tabGroup.open();

