//INDEX slideToggle
$(document).ready(function() {
	$("#logoStuff").hide();
	$(".pgifr").hide();
	//onclick
	$("#b0").click(function () {
		$(".pgifr").slideUp('fast');
		$("#logoStuff").slideUp('fast', function() {
			$("#allStuff").slideDown('slow', function() {
				//slideDown iframe
				$(".pgifr").hide();
				//return
			});
		});
	});

	$("#b1").click(function () {
		$("#allStuff").slideUp('slow', function() {
			$("#logoStuff").slideDown('fast', function() {
				$(".pgifr").hide;
				$(".pgifr").slideUp('fast');
				//change iframe url
				$(".pgifr").attr("src", "pages/1.html");
				//then

				//slideDown iframe
				$(".pgifr").slideDown('slow');
				//return
			});
		});
	});

	$("#b2").click(function () {
		$("#allStuff").slideUp('slow', function() {
			$("#logoStuff").slideDown('fast', function() {
				$(".pgifr").hide;
				$(".pgifr").slideUp('fast');
				//change iframe url
				$(".pgifr").attr("src", "pages/2.html");
				//then

				//slideDown iframe
				$(".pgifr").slideDown('fast');
				//return
			});
		});
	});

	$("#b3").click(function (){
		$("#allStuff").slideUp('slow', function() {
			$("#logoStuff").slideDown('fast', function() {
				$(".pgifr").hide;
				$(".pgifr").slideUp('fast');
				//change iframe url
				$(".pgifr").attr("src", "pages/3.html");
				//then

				//slideDown iframe
				$(".pgifr").slideDown('fast');
				//return
			});
		});
	});
});
