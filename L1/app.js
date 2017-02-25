console.log "WORKING";

var para1 = document.getElementId('p1');
var para2 = document.getElementId('p2');
var yleo = para1.nextElementSibling;
var oleo = para2.previousElementSibling;

para1.onclick = function() {
	if (para1.style.backgroundColor != "gainsboro")
	para1.style.backgroundColor = "gainsboro";
} else {
	para1.style.backgroundColor = "misty rose";
}

para2.onclick = function() {
	if (para2.innerHTML != "oleo")
	para2.innerHTML = "oleo";
} else {
	para2.innerHTML = "yleo";
}

var yleoToggle = 1;
yleo.onclick = function() {
	if (yleoToggle == 1){
		yleo.style.backgroundImage = "url('https://2.bp.blogspot.com/-daw_dKNL1xg/VrvEDKdYuoI/AAAAAAAAADY/DSDYwboz9HM/s1600/Titanic1.jpg')";
		yleoToggle = 0;
	} else if (yleoToggle == 0) {
		yleo.style.backgroundImage = "url('http://theredlist.com/media/database/settings/cinema/1990-2000/titanic-/028-titanic-theredlist.jpg')";
		yleoToggle = 1;
	}
}