$(document).ready(function() {
	var finalScore = [];
	var totalScore = [];

	$(".instructionButton").click(function() {
		$(".question1").fadeIn();
		$(".instructions").hide();	
		});

	$(".question1Button").click(function() {
		if ($(".correctAnswer").is(":checked")) {
			finalScore.push(1);
		} 
		else {
			finalScore.push(0);
		}

		$(".question2").fadeIn();
		$(".question1").hide();		
	});

	$(".question2Button").click(function() {
		if ($(".correctAnswer").is(":checked")) {
			finalScore.push(1);
		} 
		else {
			finalScore.push(0);
		}

		$(".question3").fadeIn();
		$(".question2").hide();	
	});

	$(".question3Button").click(function() {
		if ($(".correctAnswer").is(":checked")) {
			finalScore.push(1);
		} 
		else {
			finalScore.push(0);
		}

		$(".question4").fadeIn();
		$(".question3").hide();	
	});

	$(".question4Button").click(function() {
		if ($(".correctAnswer").is(":checked")) {
			finalScore.push(1);
		} 
		else {
			finalScore.push(0);
		}

		$(".question5").fadeIn();
		$(".question4").hide();	
	});
	

	$(".question5Button").click(function() {
		if ($(".correctAnswer").is(":checked")) {
			finalScore.push(1);
		} 
		else {
			finalScore.push(0); 
		}

		total();

		$(".score").fadeIn();
		$(".score").text( totalScore + " out of 5 Correct!");
		$(".question5").hide();	
		$(".newGameButton").fadeIn(1000);
	});	
		
	$('.newGameButton').click(function() {
		location.reload();
	});

	total = function() {
		var sum = 0;
			for (i = 0; i < 5; i++)
			{
			sum = sum + finalScore[i];	
			}
			totalScore.push(sum);
	};//totals the finalScore[] and pushes the total to totalScore

}); //end of document ready function