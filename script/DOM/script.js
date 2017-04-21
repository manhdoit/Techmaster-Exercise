//bài 1
function changeFontSize(x) {
  	
	var Change_font = document.getElementsByClassName("text");
 	for(var i=0; i < Change_font.length; i++){
 		Change_font[i].style.fontSize = x +'px';
 	}
}
changeFontSize(44);

//bài 2

function increaseFontSize(para) {
	var inc_font = 	document.getElementById(para);
	var b = parseInt(inc_font.style.fontSize);
	if (b<30) {
		inc_font.style.fontSize = b + 1 +'px';
	}
	else {
		inc_font.style.fontSize = 30 + 'px';		
	}
	
}
increaseFontSize("p3");
//bài 3
function decreaseFontSize(par) {
	var dec_font = document.getElementById(par);
	var a = parseInt(dec_font.style.fontSize);
	if (a>10) {
		dec_font.style.fontSize = a - 1 +'px';
	}
	else if(a<=10){
		dec_font.style.fontSize = 10+'px';
	}
}
//decreaseFontSize("p3");

//bài 4
function changeColor() {
	var ch_color = document.getElementsByClassName("text");
		ch_color[0].style.color="orange";
		ch_color[1].style.color="red";
		ch_color[2].style.color="blue";
}
//changeColor()

//Bài 5
function changeBGcolor(color) {
	document.body.style.backgroundColor = color;
}
//changeBGcolor("#f1f1f1");

//Bài 6
function copyContent(p1, p2) {
	var a = document.getElementById(p1)
	var b = document.getElementById(p2)
	a.innerHTML = b.innerHTML;
	
}
//copyContent("p1","p2");




























