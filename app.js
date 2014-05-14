$(document).ready(function() {
	question1();
	question2();
	question3();
	question4();
	question5();
	score();
	newGame();
}); //end of document ready function
var finalScore = [];//array that holds score for each question answer

answer1 = function() {
	$("input:radio[name=b]").click(function() {
		$(this).val();
		var a = parseInt( $(this).val() );
		finalScore.push(a);
	})
};//pushes score of Question 1 to finalScore []

answer2 = function() {
	$("input:radio[name=g]").click(function() {
		$(this).val();
		var a = parseInt( $(this).val() );
		finalScore.push(a);
	})
};//pushes score of Question 2 to finalScore []

answer3 = function() {
	$("input:radio[name=b]").click(function() {
		$(this).val();
		var a = parseInt( $(this).val() );
		finalScore.push(a);
	})
};//pushes score of Question 3 to finalScore[]

answer4 = function() {
	$("input:radio[name=s]").click(function() {
		$(this).val();
		var a = parseInt( $(this).val() );
		finalScore.push(a);
	})
};//pushes score of Question 4 to finalScore[]

answer5 = function() {
	$("input:radio[name=c]").click(function() {
		$(this).val();
		var a = parseInt( $(this).val() );
		finalScore.push(a);
	})
};//pushes score of Question 5 to finalScore[]

question1 = function() {
	$(".button1").click(function() {
		answer1();
		$(".question1").show();
		$(".instructions").hide();
	})

};//records user selection for Question 1

question2 = function() {
	$(".button2").click(function() {
		answer2();
		$(".question2").show();
		$(".question1").hide();
	})
};//records user selection for Question 2

question3 = function() {
	$(".button3").click(function() {
		answer3();
		$(".question3").show();
		$(".question2").hide();
	})
};//records user selection for Question 3

question4 = function() {
	$(".button4").click(function() {
		answer4();
		$(".question4").show();
		$(".question3").hide();
	})
};//records user selection for Question 4

question5 = function() {
	$(".button5").click(function() {
		answer5();
		$(".question5").show();
		$(".question4").hide();
	})
};//records user selection for Question 5
var totalScore = [];

total = function() {
	var sum = 0;
	for (i = 0; i< finalScore.length; i++)
	{
	sum = sum + finalScore[i];	
	}
	totalScore.push(sum);
};//totals the finalScore[] and pushes the total to totalScore

score = function() {
	$(".button6").click(function() {
		total();
		$(totalScore).append(".score");
		$(".score").show();
		$(".question5").hide();
	})
}; //changes finalScore[] strings to variables; finds total score of quiz; displays final score 

newGame = function() {
	$('.button7').click(function() {
		location.reload();
	})
}; //reloads page to start a new game

