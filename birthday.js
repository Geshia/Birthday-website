// =================================Help Richard Recognize You=======================================
var yourName = window.prompt("Enter your name: ");



//  ==============================birthdayWish===============================================================
var birthdayWish = document.querySelector(".birthday_wishing")
var registration = function () {
    birthdayWish.style.display = "flex";
}


setTimeout(registration, 1000);

// your custome placeholder goes here!
var ph = 'Hey '+ yourName +'!'+ " wish Richard Happy Birthday ",
	searchBar = $('#search'),
	// placeholder loop counter
	phCount = 0;

// function to return random number between
// with min/max range
function randDelay(min, max) {
	return Math.floor(Math.random() * (max-min+1)+min);
}

// function to print placeholder text in a 
// 'typing' effect 
function printLetter(string, el) {
	// split string into character seperated array
	var arr = string.split(''),
		input = el,
		// store full placeholder
		origString = string,
		// get current placeholder value
		curPlace = $(input).attr("placeholder"),
		// append next letter to current placeholder
		placeholder = curPlace + arr[phCount];
		
	setTimeout(function(){
		// print placeholder text
		$(input).attr("placeholder", placeholder);
		// increase loop count
		phCount++;
		// run loop until placeholder is fully printed
		if (phCount < arr.length) {
			printLetter(origString, input);
		}
	// use random speed to simulate
	// 'human' typing
	}, randDelay(70, 100));
}  

// function to init animation
function placeholder() {
	$(searchBar).attr("placeholder", "");
	printLetter(ph, searchBar);
}
placeholder();

// ============================================intro_to_Richard's__GAME+==========================================================
var submitUserDetails2 = document.querySelector(".submit")
var would_u_like_to_play = document.querySelector(".would_u_bgcontainer")

submitUserDetails2.onclick = function () {
	would_u_like_to_play.style.display = "flex";
    birthdayWish.style.display = "none";
}

// ============================================Richard's__GAME+==========================================================
var Yes_play = document.querySelector(".would_u_like_to_play-Yes")
var game_bgcontainer = document.querySelector(".game_bgcontainer")
var game_bgcontainer2 = document.querySelector(".game_bgcontainer2")

Yes_play.onclick = function () {
	would_u_like_to_play.style.display = "none";
    game_bgcontainer.style.display = "flex";
}

var correctAns1 = document.querySelector(".correctAns1")
var wrongAns1 = document.querySelector(".wrongAns1")

correctAns1.onclick = function () {
	alert(yourName + ' Your answer is correct')
	game_bgcontainer.style.display = "none";
	game_bgcontainer2.style.display = "flex";
}
wrongAns1.onclick = function () {
	alert(yourName + ' Your answer is wrong')
	game_bgcontainer.style.display = "none";
	game_bgcontainer2.style.display = "flex";
}

var correctAns1_2 = document.querySelector(".correctAns1_2")
var wrongAns1_2 = document.querySelector(".wrongAns1_2")
var game_bgcontainer3 = document.querySelector(".game_bgcontainer3")

correctAns1_2.onclick = function () {
	alert(yourName + ' Your answer is correct')
	game_bgcontainer2.style.display = "none";
	game_bgcontainer3.style.display = "flex";
}
wrongAns1_2.onclick = function () {
	alert(yourName + ' Your answer is wrong')
	game_bgcontainer2.style.display = "none";
	game_bgcontainer3.style.display = "flex";
}
