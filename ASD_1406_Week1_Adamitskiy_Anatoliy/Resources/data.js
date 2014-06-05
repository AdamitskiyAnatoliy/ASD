var data = [];


//  These are the objects in literal notation

var i5s = {
	name: "Apple iPhone 5S",
	image: "5s.jpg",
	price: "$649",
	url: "http://www.apple.com/iphone-5s/",
	open_url: function(){
		Titanium.Platform.openURL(this.url);
	},
	alert_1: function(){
		alert("This is an iPhone 5s");
	}
};

var s5 = {
	name: "Samsung Galaxy S5",
	image: "s5.jpg",
	price: "$699",
	url: "http://www.samsung.com/global/microsite/galaxys5/design.html",
	open_url: function(){
		Titanium.Platform.openURL(this.url);
	},
	alert_1: function(){
		alert("This is a Samsung Galaxy S5");
	}
};

var g3 = {
	name: "LG G3",
	image: "g3.jpg",
	price: "$649",
	url: "http://www.lg.com/global/g3/index.html",
	open_url: function(){
		Titanium.Platform.openURL(this.url);
	},
	alert_1: function(){
		alert("This is an LG G3");
	}
};

var onePlus = {
	name: "OnePlus One",
	image: "onePlus.jpg",
	price: "$299",
	url: "http://oneplus.net",
	open_url: function(){
		Titanium.Platform.openURL(this.url);
	},
	alert_1: function(){
		alert("This is a OnePlus One");
	}
};

var nexus5 = {
	name: "Google Nexus 5",
	image: "nexus5.jpg",
	price: "$349",
	url: "http://www.google.com/nexus/5/",
	open_url: function(){
		Titanium.Platform.openURL(this.url);
	},
	alert_1: function(){
		alert("This is a Google Nexus 5");
	}
};

var motoG = {
	name: "Motorola Moto G",
	image: "motoG.jpg",
	price: "$179",
	url: "http://www.motorola.com/us/moto-g-pdp-1/Moto-G/moto-g-pdp.html",
	open_url: function(){
		Titanium.Platform.openURL(this.url);
	},
	alert_1: function(){
		alert("This is a Motorola Moto G");
	}
};

//	These are the objects in dot notation

var m8 = {};
	m8.name = "HTC One (M8)";
	m8.image = "m8.jpg";
	m8.price = "$699";
	m8.url = "http://www.htc.com/us/smartphones/htc-one-m8/";
	m8.open_url = function(){
		Titanium.Platform.openURL(this.url);
	};
	m8.alert_1 = function(){
		alert("This is an HTC M8");
	};
	
var z2 = {};
	z2.name = "Sony Xperia Z2";
	z2.image = "z2.jpg";
	z2.price = "$749";
	z2.url = "http://www.sonymobile.com/global-en/products/phones/xperia-z2/";
	z2.open_url = function(){
		Titanium.Platform.openURL(this.url);
	};
	z2.alert_1 = function(){
		alert("This is a Sony Xperia Z2");
	};
	
var motoX = {};
	motoX.name = "Motorola Moto X";
	motoX.image = "motoX.jpg";
	motoX.price = "$499";
	motoX.url = "http://www.motorola.com/us/FLEXR1-1/Moto-X/FLEXR1.html";
	motoX.open_url = function(){
		Titanium.Platform.openURL(this.url);
	};
	motoX.alert_1 = function(){
		alert("This is a Motorola Moto X");
	};
	
var note3 = {};
	note3.name = "Samsung Galaxy Note 3";
	note3.image = "note3.jpg";
	note3.price = "$649";
	note3.url = "http://www.samsung.com/global/microsite/galaxynote3-gear/";
	note3.open_url = function(){
		Titanium.Platform.openURL(this.url);
	};
	note3.alert_1 = function(){
		alert("This is a Samsung Galaxy Note 3");
	};
	
var nokia1020 = {};
	nokia1020.name = "Nokia Lumia 1020";
	nokia1020.image = "nokia1020.jpg";
	nokia1020.price = "$699";
	nokia1020.url = "http://www.nokia.com/us-en/phones/phone/lumia1020/";
	nokia1020.open_url = function(){
		Titanium.Platform.openURL(this.url);
	};	
	nokia1020.alert_1 = function(){
		alert("This is a Nokia Lumia 1020");
	};
	
var gFlex = {};
	gFlex.name = "LG G Flex";
	gFlex.image = "gFlex.jpg";
	gFlex.price = "$599";
	gFlex.url = "http://www.lg.com/us/mobile-phones/gflex";
	gFlex.open_url = function(){
		Titanium.Platform.openURL(this.url);
	};
	gFlex.alert_1 = function(){
		alert("This is an LG G Flex");
	};

data.push(i5s);
data.push(s5);
data.push(g3);
data.push(onePlus);
data.push(nexus5);
data.push(m8);
data.push(z2);
data.push(motoX);
data.push(note3);
data.push(nokia1020);
data.push(motoG);
data.push(gFlex);

exports.data = data;