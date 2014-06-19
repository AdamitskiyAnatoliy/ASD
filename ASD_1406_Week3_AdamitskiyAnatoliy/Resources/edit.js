//	The code in this module runs the add/edit page
var curWindow = Titanium.UI.currentWindow;

//	requiring data.js
var data = require("data");

//	This function checks the inputs
//	and alerts the user if they are empty
var checkInput = function() {
	if (!dateInput.value) {
		alert("Date field is required");
		return false;
	} else if (!secondInput.value) {
		if (curWindow.type === "calorie") {
			alert("Calories field is required");
		}
		return false;
	}
	return true;
};

var mainView = Ti.UI.createView({
	layout : "vertical"
});

//	Creating the 2 text fields and labels
//	for the add/edit page
var dateLabel = Ti.UI.createLabel({
	text : "* Date",
	color : "#fff",
	font : {
		fontSize : 16
	},
	top : 20,
	left : 10
});

var dateInput = Ti.UI.createTextField({
	top : 40,
	left : 10,
	right : 10,
	height : 40,
	hintText : " Date",
	clickable : true,
	id : 1,
	backgroundColor : "#fff",
	borderRadius : 10
});

var secondLabel = Ti.UI.createLabel({
	text : "* Calories",
	color : "#fff",
	font : {
		fontSize : 16
	},
	top : 110,
	left : 10
});

var secondInput = Ti.UI.createTextField({
	top : 130,
	left : 10,
	right : 10,
	height : 40,
	hintText : " Calories",
	clickable : true,
	id : 2,
	backgroundColor : "#fff",
	borderRadius : 10
});

//	Creating the 2 buttons you see on the bottom
//	of the add/edit page
var saveButton = Ti.UI.createButton({
	bottom : 120,
	height : 40,
	width : "100%",
	tintColor : "#fff",
	title : "Save",
	font : {
		fontSize : 18
	},
	zIndex : 20
});

var deleteButton = Ti.UI.createButton({
	bottom : 60,
	height : 40,
	width : "100%",
	tintColor : "red",
	font : {
		fontSize : 18
	},
	title : "Delete",
	zIndex : 20
});

//	Setting the current date for the picker
var today = new Date();
var picker = Ti.UI.createPicker({
	type : Ti.UI.PICKER_TYPE_DATE,
	minDate : new Date(2000, 0, 1),
	maxDate : new Date(today.getFullYear(), today.getMonth(), today.getDate()),
	value : new Date(today.getFullYear(), today.getMonth(), today.getDate()),
	bottom : 0,
	zIndex : 21
});

//	adding the event to the picker
picker.addEventListener("change", function(e) {
	var date = e.value.toLocaleString();
	var search = date.search("at");
	date = date.substr(0, search);

	dateInput.value = date;
});

//	Linking the picker and the date text field
dateInput.addEventListener("click", function(e) {
	dateInput.blur();
	curWindow.add(picker);
	var date = picker.value.toLocaleString();
	var search = date.search("at");
	date = date.substr(0, search);

	dateInput.value = date;
});

//	adding event listeners to the add/edit window
//	to close the picker
curWindow.addEventListener("click", function(e) {

	if (!e.source.clickable) {
		dateInput.blur();
		secondInput.blur();
		curWindow.remove(picker);
	}

});

curWindow.backgroundColor = "#b2b2b2";

//	Changing the title for the Window based on whether a
//	user is adding a new row or editing it
if (curWindow.openType === "edit") {
	curWindow.title = "Edit";

	dateInput.value = curWindow.date;

	if (curWindow.type === "calorie") {

		secondLabel.text = "* Calories: ";
		secondInput.value = curWindow.calories;
	}
} else {
	curWindow.title = "New";
	deleteButton.title = "Cancel";
	if (curWindow.type === "calorie") {
		secondLabel.text = "* Calories";
	}
}

//	adding the event listener to the save button
saveButton.addEventListener("click", function(e) {
	var validate = checkInput();
	if (validate) {
		if (curWindow.openType === "edit") {
			if (curWindow.type === "calorie") {
				data.saveCalorie(curWindow.id, curWindow.type, dateInput.value, secondInput.value);
			}
			alert("Your data has been saved!");
			curWindow.close();
		} else {
			if (curWindow.type === "calorie") {
				data.addNewCalorie(secondInput.value, dateInput.value);

				// var userInput = {};
				// userInput.calories = secondInput.value;
				// userInput.date = dateInput.value;

				var data = data.getRows();
				calorieTable.setData(data);

				alert("New item saved!");
				curWindow.close();
			}
		}
	}
});

//	adding the event listener to the cancel button
deleteButton.addEventListener("click", function(e) {
	if (curWindow.openType === "new") {
		curWindow.close();
	} else {
		var confirm = Ti.UI.createAlertDialog({
			title : "Are you sure you want to delete?",
			message : "",
			buttonNames : ["Yes", "Cancel"],
			cancel : 1
		});

		confirm.addEventListener("click", function(e) {
			if (e.index === 0) {
				if (curWindow.type === "calorie") {
					data.deleteCalorie(curWindow.id);
				}
				alert("Item has been deleted");
				curWindow.close();
			}
		});
		confirm.show();
	}
});

curWindow.add(dateLabel);
curWindow.add(dateInput);
curWindow.add(secondLabel);
curWindow.add(secondInput);
curWindow.add(saveButton);
curWindow.add(deleteButton);
