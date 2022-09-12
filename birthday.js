// =================================Help Richard Recognize You=======================================
var yourName = window.prompt("Enter your name: ");



//  ==============================birthdayWish===============================================================
var birthdayWish = document.querySelector(".birthday_wishing")
var registration = function () {
    birthdayWish.style.display = "flex";
}


setTimeout(registration, 2000);

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
	}, randDelay(50, 90));
}  

// function to init animation
function placeholder() {
	$(searchBar).attr("placeholder", "");
	printLetter(ph, searchBar);
}

placeholder();




















var introToBirthdayPresent = document.querySelector(".intro_to_birthdayPresent")
var submitUserDetails2 = document.querySelector(".submit")

submitUserDetails2.onclick = function () {
    introToBirthdayPresent.style.display = "flex";
    birthdayWish.style.display = "none";
}

var submitIntro = document.querySelector(".submit3")
var gifts = document.querySelector(".gift_to_select")
submitIntro.onclick = function () {
    introToBirthdayPresent.style.display = "none";
    gifts.style.display = "flex";
}

var gift1 = document.querySelector(".gift1")
var gift2 = document.querySelector(".gift2")

gift1.onclick = function () {
    gift1.style.transform = "rotateY(180deg)";
    gift2.style.display = "none";
    gift1.style.width = "50%";
} 

gift2.onclick = function () {
    gift2.style.transform = "rotateY(180deg)";
    gift1.style.display = "none";
    gift2.style.width = "50%";
}


var id = null;
function myMove() {
  var elem = document.getElementById("imgAnimae");   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 400) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
    //   elem.style.bottom = pos + 'px';
    }
  }
}
