
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

		//Changes color of text in columns
		document.getElementById("PayPal").style.backgroundColor = 'green';

}


function isClicked2() {
		//Sets user inputs to variables, setting width and height values'
		var width = document.getElementById("width").value 
		var height = document.getElementById("height").value;
		
		//calculates square feet and estimated price
		var squareFeet = width * height;
		var price = squareFeet * 2;

		//Displays data entered in context and displays estimated price
		var textToShow1 = document.getElementById("showDetails");
		var textToShow2 = document.getElementById("showDetails2");
		textToShow1.innerHTML = "Your car window dimensions are " + width + " x " + height + ", or " + squareFeet + " total square feet.";
		textToShow2.innerHTML = "A CarAds window this size would cost about $" + price + " to install.";

}


//Changes height and width of image to 200px
function enlargedImage(x) {
    x.style.height = "200px";
    x.style.width = "200px";
    console.log(q);

}

//Sets the image back to original size 150px
function normalImage(x) {
    x.style.height = "150px";
    x.style.width = "150px";
}

//switches text color to green
function switchToGreen(x) {
    x.style.color = "green";
}

//switches text color to white
function backToWhite(x) {
    x.style.color = "white";
}

//lessens opacity of element
function hover(x) {
	x.style.opacity = 0.3;
}

//brings element back to 100% opacity
function unhover(x) {
	x.style.opacity = 1;
}



