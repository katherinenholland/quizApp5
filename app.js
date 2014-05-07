$(document).ready(function() {
	question1();
	question2();
	question3();
	question4();
	question5();
	score();
	newGame();
}); //end of document ready function

var finalScore = 0;

question1 = function() {
	$(".button1").click(function() {
		$(".question1").show();
		$(".instructions").hide();
	if (value == "beethoven") 
	{
		finalScore++;
	}

	})

};

question2 = function() {
	$(".button2").click(function() {
		$(".question2").show();
		$(".question1").hide();
	})
};

question3 = function() {
	$(".button3").click(function() {
		$(".question3").show();
		$(".question2").hide();
	})
};

question4 = function() {
	$(".button4").click(function() {
		$(".question4").show();
		$(".question3").hide();
	})
};

question5 = function() {
	$(".button5").click(function() {
		$(".question5").show();
		$(".question4").hide();
	})
};

score = function() {
	$(".button6").click(function() {
		$(".score").show();
		$(".question5").hide();
	})
};


newGame = function() {
	$('.button7').click(function() {
		location.reload();
	})
}; //reloads page to start a new game