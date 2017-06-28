
// An array of colors that is 12 in length
var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
// An array of reindeer that is 8 in length
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

// a variable that contains the reindeet id name from the DOM
var hohohoElement = document.getElementById("reindeer");
//A for loop that iterates through the reindeer array
for (var i = 0; i < reindeer.length; i++) {
	//Using string literal we create p tags and put a color and reindeer in the DOM with innerHTML
	hohohoElement.innerHTML += `<p>${colors[i]}  ${reindeer[i]}</p>`;
}