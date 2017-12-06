  $( document ).ready(function() {

//variables
var wins = 0;
var losses = 0;
var counter = 0;

//random number generator
var minNumber = 19;
var maxNumber = 120
var randomNumber = randomNumberFromRange(minNumber, maxNumber);

function randomNumberFromRange(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

//random # generator for each tribble. Breaking it up to 4 ranges to avoid overlap of same # chosen.
var randomTribble = randomNumberTribble(1, 3);
var randomTribble2 = randomNumberTribble2(4, 6);
var randomTribble3 = randomNumberTribble3(7, 9);
var randomTribble4 = randomNumberTribble4(10, 12);

function randomNumberTribble(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}
function randomNumberTribble2(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}
function randomNumberTribble3(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}
function randomNumberTribble4(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}


//appending random number generated by computer to the div
$("#numberToMatch").text(randomNumber);

//using jquery to append the images and css to the divs

var imageTribble = $("<img>");
var imageTribble2 = $("<img>");
var imageTribble3 = $("<img>");
var imageTribble4 = $("<img>");

imageTribble.attr("src", "assets/images/tribble1.png").appendTo("#tribble1").addClass("tribble-image");
imageTribble2.attr("src", "assets/images/tribble2.png").appendTo("#tribble2").addClass("tribble-image");
imageTribble3.attr("src", "assets/images/tribble3.png").appendTo("#tribble3").addClass("tribble-image");
imageTribble4.attr("src", "assets/images/tribble4.png").appendTo("#tribble4").addClass("tribble-image");


//audio variable
var tribbleCoo = document.createElement("audio");
    tribbleCoo.setAttribute("src", "assets/sounds/tos-tribble.mp3");

// Counter onClick functions
$("#tribble1").click(function() {
	tribbleCoo.play();
	$('#tribble1').addClass('animated pulse');
	randomTribble = parseInt(randomTribble);
       counter += randomTribble;      
$("#counterTotal").text(counter);
		WinLose();
});

$("#tribble2").click(function() {
	tribbleCoo.play();
	$('#tribble2').addClass('animated pulse');
	randomTribble2 = parseInt(randomTribble2);
       counter += randomTribble2;
$("#counterTotal").text(counter);
		WinLose();
});

$("#tribble3").click(function() {
	tribbleCoo.play();
	$('#tribble3').addClass('animated pulse');
	randomTribble3 = parseInt(randomTribble3);
       counter += randomTribble3;
$("#counterTotal").text(counter);
	WinLose();
});

$("#tribble4").click(function() {
	tribbleCoo.play();
	$('#tribble4').addClass('animated pulse');
	randomTribble4 = parseInt(randomTribble4);
       counter += randomTribble4;
$("#counterTotal").text(counter);
       WinLose();
});


//the win-lose function goes here

function WinLose() {
	if (counter === randomNumber){
		wins += 1;
		$(win).text(wins);
		$("#resultAlert").html("You Won!")
		reset();

	} else if(counter > randomNumber){
		losses += 1;
		$(loss).text(losses);
		$("#resultAlert").html("You Lost!")
		reset();
	}
	
}

//Need to reset the game here
	function reset(){
		counter = 0;
		randomNumber = randomNumberFromRange(19, 120);
		$("#numberToMatch").text(randomNumber);
		$("#counterTotal").text(counter);
		randomTribble = randomNumberTribble(1, 3);
		randomTribble2 = randomNumberTribble(4, 6);
		randomTribble3 = randomNumberTribble(7, 9);
		RandomTribble4 = randomNumberTribble(10, 12);
		$('#tribble1').removeClass('animated pulse');
		$('#tribble2').removeClass('animated pulse');
		$('#tribble3').removeClass('animated pulse');
		$('#tribble4').removeClass('animated pulse');


	}

});