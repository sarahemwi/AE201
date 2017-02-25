$("img").click(function(){
	$(this).css({"background-colour":"gainsboro", "border-radius":"50%"})
})

// $("img").click(function(){
// 	$("div").toggle();
// })

$("img").dblclick(function() {
	if($("div").is(":visible")){
		$("div").fadeOut("slow")
	} else {
		$("div").fadeIn("slow");
	}
})
