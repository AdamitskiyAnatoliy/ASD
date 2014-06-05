var data = require("data");

var windowWidth = Ti.Platform.displayCaps.platformWidth;

var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#000",
	statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT
});

var navBar = Ti.UI.createView({
	backgroundColor: "#000",
	top: 0,
	width: windowWidth,
	height: 70
});

var titleLabel = Ti.UI.createLabel({
	text: "FLAGSHIP PHONES",
	color : "#fff",
		font : {
			fontSize : "22dp",
			fontFamily : "Helvetica"
		},
	top: 30
});

var table = Ti.UI.createTableView({
	backgroundColor: "#000",
	top: 70,
	height: 500
});

var info = require("info");

var tableSection = Ti.UI.createTableViewSection({
});

var sections = [];

for(i = 0, j = data.data.length; i < j; i++){
	var tableRow = Ti.UI.createTableViewRow({
		title: data.data[i].name,
		hasChild: true,
		color: "#fff",
		phoneName: data.data[i].name,
		image: data.data[i].image,
		data: data.data[i],
		pop: data.data[i]
	});	
	tableSection.add(tableRow);
}

sections.push(tableSection);
table.setData(sections);
navBar.add(titleLabel);
mainWindow.add(table);
mainWindow.add(navBar);
mainWindow.open();