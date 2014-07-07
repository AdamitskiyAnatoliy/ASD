// this is the functon that gets and sets the data to the table
var remoteResponse = function() {
	Ti.API.debug(this.responseText);
var json = JSON.parse(this.responseText);

	var tableSection = Ti.UI.createTableViewSection({
	});

	// This array houses all the rows to set to the table
	var sections = [];

	// This loops through the data from the API
	for ( i = 0, j = json.data.children.length; i < j; i++) {
		var tableRow = Ti.UI.createTableViewRow({
			borderRadius : 50
		});

		// This creates the image view in the rows
		var rowImage = Ti.UI.createImageView({
			height : 50,
			width : 50,
			left : 10,
			top : 10,
			backgroundColor : "#fff",
			image : json.data.children[i].data.thumbnail,
			borderRadius : 10,
			borderWidth: 1,
			borderColor: "#000"
		});

		if (json.data.children[i].data.thumbnail == "") {
			rowImage.image = "alien.jpg";
		}

		// This creates all the labels for the titles
		var title = Ti.UI.createLabel({
			text : json.data.children[i].data.title,
			top : 8,
			left : 80,
			right : 10,
			color : "#000",
			font : {
				fontSize : "14dp",
				fontFamily : "Helvetica"
			}
		});

		// Adding all the elements to the rows
		tableRow.add(title);
		tableRow.add(rowImage);
		tableSection.add(tableRow);
	}

	sections.push(tableSection);
	table.setData(sections);

};

// This debugs the data if there are any errors
var remoteError = function(e) {
	Ti.API.debug("Status: " + this.status);
	Ti.API.debug("Text: " + this.responseText);
	Ti.API.debug("Error: " + e.error);
};

// This controls the whole API pull
var xhr = Ti.Network.createHTTPClient({
	onload : remoteResponse,
	onerror : remoteError,
	timeout : 3000
});

// This calls the API to send the data
xhr.open("GET", "http://api.reddit.com");
xhr.send(); 