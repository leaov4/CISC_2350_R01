
//All functions change the opacity of images so they appropriately appear on the studio screen

//Change function makes the opacity 1, to make them appear
function changeAcrylicOpacity() {
	//makes elements visible
	document.getElementById("first").style.opacity = 1;
	document.getElementById("second").style.opacity = 1;
	document.getElementById("third").style.opacity = 1;
	console.log("is running");
	//changes text from to medium to acrylic
	document.getElementById("text").innerHTML = "acrylic";
	document.getElementById("description").style.opacity = 0;
}

//Get function makes the opactiy 0 to make them hidden
function getAcrylicOpacity() {
	//makes elements hidden
	document.getElementById("first").style.opacity = 0;
	document.getElementById("second").style.opacity = 0;
	document.getElementById("third").style.opacity = 0;
	//make inner html say Medium
	document.getElementById("text").innerHTML = "Medium";
	document.getElementById("description").style.opacity = 1;
}

function changeInkOpacity() {
	//makes elements visible
	document.getElementById("four").style.opacity = 1;
	document.getElementById("five").style.opacity = 1;
	document.getElementById("six").style.opacity = 1;
	//changes text from medium to sumi ink
	document.getElementById("text").innerHTML = "Sumi Ink";
	document.getElementById("description").style.opacity = 0;
}

function getInkOpacity() {
	//makes elements hidden
	document.getElementById("four").style.opacity = 0;
	document.getElementById("five").style.opacity = 0;
	document.getElementById("six").style.opacity = 0;
	//changes text from sumi ink to medium
	document.getElementById("text").innerHTML = "Medium";
	document.getElementById("description").style.opacity = 1;
}

function changePencilOpacity() {
	//makes elements visible
	document.getElementById("skeleton").style.opacity = 1;
	document.getElementById("studio1").style.opacity = 1;
	document.getElementById("text").innerHTML = "Pencil";
	document.getElementById("description").style.opacity = 0;
}

function getPencilOpacity() {
	//makes elements hidden
	document.getElementById("skeleton").style.opacity = 0;
	document.getElementById("studio1").style.opacity = 0;
	document.getElementById("text").innerHTML = "Medium";
	document.getElementById("description").style.opacity = 1;
}

function changeMixedOpacity() {
	//makes elements visible
	document.getElementById("womancollage").style.opacity = 1;
	document.getElementById("shoes").style.opacity = 1;
	document.getElementById("fashion").style.opacity = 1;
	//changes from medium to mixed
	document.getElementById("text").innerHTML = "Mixed";
	document.getElementById("description").style.opacity = 0;
}

function getMixedOpacity() {
	//makes elements visible
	document.getElementById("womancollage").style.opacity = 0;
	document.getElementById("shoes").style.opacity = 0;
	document.getElementById("fashion").style.opacity = 0;
	//changes from medium to mixed
	document.getElementById("text").innerHTML = "Medium";
	document.getElementById("description").style.opacity = 1;
}

function changeCharcoalOpacity() {
	//makes elements visible
	document.getElementById("ramen").style.opacity = 1;
	//changes text from medium to sumi ink
	document.getElementById("text").innerHTML = "Charcoal";
	document.getElementById("description").style.opacity = 0;
}

function getCharcoalOpacity() {
	//makes elements hidden
	document.getElementById("ramen").style.opacity = 0;
	//make inner html say Medium
	document.getElementById("text").innerHTML = "Medium";
	document.getElementById("description").style.opacity = 1;
}



