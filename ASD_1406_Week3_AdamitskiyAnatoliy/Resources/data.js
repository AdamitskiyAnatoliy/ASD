//	Opening my SQLite Database
db = Titanium.Database.open("database");
db.execute("CREATE TABLE IF NOT EXISTS database (id INTEGER PRIMARY KEY, calories INTEGER, date TEXT)");


//	Function that will be called to Update data
exports.saveCalorie = function(id, type, date, calories) {
	var save = db.execute("UPDATE database SET date = ?, calories = ? WHERE id = ?", date, calories, id);
};

//	Function that will be called to Delete data
exports.deleteCalorie = function(id) {
	db.execute("DELETE FROM database WHERE id = ?", id);
	var data = data.getRows();
	calorieTable.setData(data);
};



//	This is the big function that creates and gets the
//	data to populate the table in the mainWindow
exports.getRows = function(type) {
	
	var tableRows = [];

	var rows = db.execute("SELECT * FROM database");

	//	Looping throught the data to create the tableRows
	while (rows.isValidRow()) {
		
		var id = rows.fieldByName("id");
		var calories = rows.fieldByName("calories");
		var date = rows.fieldByName("date");

		
		//	This is where the rows are being pushed into the array
		tableRows.push({
			title : date + "" + calories,
			id : id
		});
		rows.next();
	};

	
	return tableRows;
};

//	This function is for adding new rows into the SQLite Table
exports.addNewCalorie = function(calories, date) {
	db.execute("INSERT INTO database (calories, date) VALUES (?,?)", calories, date);
};