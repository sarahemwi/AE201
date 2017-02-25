$("#darksalmon").click(function(){
	$("#progress").css("background-color", "darksalmon")
})

$("#darkseagreen").click(function(){
	$("#progress").css("background-color", "darkseagreen")
})

$("#goldenrod").click(function(){
	$("#progress").css("background-color", "goldenrod")
})

$("#start").click(function(){
	$("#progress").css("width","12%")
	.delay(1200)
	.animate({width: "25%"}, 500)
	.delay(1200)
	.animate({width: "50%"}, 500)
	.delay(1200)
	.animate({width: "75%"}, 500)
	.delay(1200)
	.animate({width: "100%"}, 500);

	$("#percentage").html("0%")
	.delay(1700)
	.queue(function(next){
		$(this).html("25%");
		next();
	})
	.delay(1700)
	.queue(function(next){
		$(this).html("50%");
		next();
	})
	.delay(1700)
	.queue(function(next){
		$(this).html("75%");
		next();
	})
	.delay(1700)
	.queue(function(next){
		$(this).html("100%");
		next();
	})
})

