var data = require("data");

table.addEventListener("click", function(e) {
	var infoWindow = Ti.UI.createWindow({
		backgroundColor : "#000",
		statusBarStyle : Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT
	});

	var navBar = Ti.UI.createView({
		backgroundColor : "#000",
		top : 0,
		width : windowWidth,
		height : 70
	});

	var titleLabel = Ti.UI.createLabel({
		text : e.source.phoneName,
		color : "#fff",
		font : {
			fontSize : "18dp",
			fontFamily : "Helvetica"
		},
		top : 33
	});

	var backButton = Ti.UI.createView({
		width : 25,
		height : 28,
		backgroundImage : "backArrow@2x.png",
		left : 10,
		top : 30
	});

	backButton.addEventListener("click", function() {
		infoWindow.close();
	});

	var phoneImage = Ti.UI.createImageView({
		image : e.source.image,
		width : 300,
		height : 300,
		borderRadius : 10,
		top : 100
	});

	var buyNow = Ti.UI.createView({
		height : 40,
		width : windowWidth,
		bottom : 0,
		backgroundColor : "#fff"
	});

	var buyNowText = Ti.UI.createLabel({
		text : "Buy Now",
		font : {
			fontSize : "18dp",
			fontFamily : "Helvetica"
		},
		color : "#000"
	});

	var openMyURL = function() {
		e.source.data.open_url();
		buyNow.removeEventListener("click",openMyURL);
	};
	buyNow.addEventListener("click", openMyURL);

	buyNow.add(buyNowText);
	infoWindow.add(buyNow);
	infoWindow.add(phoneImage);
	navBar.add(backButton);
	navBar.add(titleLabel);
	infoWindow.add(navBar);
	infoWindow.open();
});

var doThis = function(e) {
	e.source.pop.alert_1();
};

table.addEventListener("longpress", doThis);
