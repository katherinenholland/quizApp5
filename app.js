$(document).ready(function() {
	var finalScore = [];//array that holds score for each question answer
	var totalScore = [];//array used to find sum of score

	$(".instructionButton").click(function() {
		$(".question1").show();
		$(".instructions").hide();	
		});

	$(".question1Button").click(function() {
		if ($(".correctAnswer").is(":checked")) {
			finalScore.push(1);
		}
		$(".question2").show();
		$(".question1").hide();		
	});

	$(".question2Button").click(function() {
		if ($(".correctAnswer").is(":checked")) {
			finalScore.push(1);
		}
		$(".question3").show();
		$(".question2").hide();	
	});

	$(".question3Button").click(function() {
		if ($(".correctAnswer").is(":checked")) {
			finalScore.push(1);
		}
		$(".question4").show();
		$(".question3").hide();	
	});

	$(".question4Button").click(function() {
		if ($(".correctAnswer").is(":checked")) {
			finalScore.push(1);
		}
		$(".question5").show();
		$(".question4").hide();	
	});
	

	$(".question5Button").click(function() {
		if ($(".correctAnswer").is(":checked")) {
			finalScore.push(1);
		} 
		$(".score").show();
		$(".question5").hide();	
	});	

	total();
	
	$(".score").text(totalScore + " out of 5 Correct!");
		
	$('.newGameButton').click(function() {
		location.reload();
	});

}); //end of document ready function



total = function() {
	var sum = 0;
	for (i = 0; i < 5; i++)
	{
	sum = sum + finalScore[i];	
	}
	totalScore.push(sum);
};//totals the finalScore[] and pushes the total to totalScore

