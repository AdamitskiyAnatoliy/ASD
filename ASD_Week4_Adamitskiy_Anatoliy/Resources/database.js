//	Opening my SQLite Database
var db = Titanium.Database.open("database");
db.execute("CREATE TABLE IF NOT EXISTS database (id INTEGER PRIMARY KEY, posts TEXT)");


//	This is the big function that creates and gets the
//	data to populate the table in the mainWindow
exports.getRows = function() {
	
	var tableRows = [];

	var rows = db.execute("SELECT * FROM database");

	//	Looping throught the data to create the tableRows
	while (rows.isValidRow()) {
		var id, posts;
		
		id = rows.fieldByName("id");
		posts = rows.fieldByName("posts");

		console.log("these are the rows" + tableRows);
		//	This is where the rows are being pushed into the array
		tableRows.push({
			title : posts,
			id : id
		});
		//	loops to next row
		rows.next();
	}

	return tableRows;
};


exports.update = function(post) {
	db.execute("INSERT INTO database (posts) VALUES(?)", post);
};


//	This function deletes a selected row from the
//	database
exports.destroy = function(id) {
	db.execute("DELETE FROM database WHERE id = ?", id);	
};
