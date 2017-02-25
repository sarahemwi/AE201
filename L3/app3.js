console.log("DOPE")

for (var i=0; i<16; i++) {
	var willi = document.createElement("img");
	willi.setAttribute("src", "file:///Users/SarahEmily%20Williams/Desktop/586b8134b6fc1117b60b27a7.png");
	willi.className = "willi " + i;
	var box = document.createElement("div");
	box.className = "box " + i;
	box.appendChild(willi);
	document.getElementById("map").appendChild(box);
}
var guesses = 0;
var position = Math.floor(Math.random() * 16)

$(".box").click(function(){
	guesses++;
	$("#score").text("Guesses: " + guesses);
	if ($(this).hasClass(position)){
		$(this).children().show()
	}
})

$("button").click(function(){
	$("img").fadeOut();
	position = Math.floor(Math.random() * 16);
	guesses = 0;
	$("#score").text("Guesses: " + guesses);
})