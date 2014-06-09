/*  This module is where I will be
 *  creating my API pull to get my
 *  data and parsing it as well.
 */

var remoteResponse = function() {
	Ti.API.debug(this.responseText);
	var json = JSON.parse(this.responseText);

	var sections = [];

	var tableSection = Ti.UI.createTableViewSection({
	});

/*  The code inside this loop creates
 *  the graphical elements to store the
 * API data in.
 */

	for ( i = 0, j = json.data.children.length; i < j; i++) {
		var tableRow = Ti.UI.createTableViewRow({
		});

		var rowImage = Ti.UI.createImageView({
			height : 50,
			width : 50,
			left : 10,
			top: 10,
			backgroundColor : "#fff",
			image : json.data.children[i].data.thumbnail,
			borderRadius : 10
		});

		if (json.data.children[i].data.thumbnail == "") {
			rowImage.image = "reddit.png";
		}

		var title = Ti.UI.createLabel({
			text : json.data.children[i].data.title,
			top : 8,
			left : 80,
			right: 10,
			color : "#000",
			font : {
				fontSize : "14dp",
				fontFamily : "Helvetica"
			}
		});
	
		tableRow.add(title);
		tableRow.add(rowImage);
		tableSection.add(tableRow);
	}

	sections.push(tableSection);
	table.setData(sections);

};

var remoteError = function(e) {
	Ti.API.debug("Status: " + this.status);
	Ti.API.debug("Text: " + this.responseText);
	Ti.API.debug("Error: " + e.error);
};

/* This function is where Titanium reaches
 * out to the Reddit API to be able to 
 * retrieve the data.
 */

var xhr = Ti.Network.createHTTPClient({
	onload : remoteResponse,
	onerror : remoteError,
	timeout : 3000
});

xhr.open("GET", "http://api.reddit.com");
xhr.send();

