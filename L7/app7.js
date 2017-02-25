$('#top-text').keyup(function(){
	var toptext = $('#top-text').val();
	$('#top').text(toptext);
})

$('#bottom-text').keyup(function(){
	var bottomtext = $('#bottom-text').val();
	$('#bottom').text(bottomtext);
})

$('#image-url').keyup(function(){
	console.log('lalalala')
	var imageurl = $('#image-url').val();
	$('#memepic').attr('src', imageurl);
})