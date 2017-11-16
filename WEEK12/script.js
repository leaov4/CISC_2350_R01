
console.log("hello"); 

function isClicked() {

		//Sets user inputs to variables
		var carType = document.getElementById("carType");
		var name = document.getElementById("name");
		var address = document.getElementById("address");
		var questions = document.getElementById("questions");

		//sets variables to show
		var carTypeToShow = carType.value;
		var nameToShow = name.value;
		var addressToShow = address.value;
		var questionsToShow = questions.value;
		
		//First line of text to show shows car type and name
		var textToShow = document.getElementById("allToShow");
		textToShow.innerHTML = carTypeToShow + ", " + nameToShow;
		
		//Second line of text shows email address and questions.
		var textToShow2 = document.getElementById("allToShow2");
		textToShow2.innerHTML = addressToShow + ", " + questionsToShow;
}