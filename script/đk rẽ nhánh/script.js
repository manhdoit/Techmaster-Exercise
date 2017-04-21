//bai1
var now = new Date();
var date = now.getDate();
var month = now.getMonth() + 1;
var year = now.getFullYear();
var season = month;
switch (month){
	case (1):
	case (2):
	case (3):
		season = "mùa xuân";
		break;
	case (4):
	case (5):
	case (6):
		season = "mùa hạ";
		break;
	case (7):
	case (8):
	case (9):
		season = "mùa thu";
		break;
	case (10):
	case (11):
	case (12):
	season = "Mùa Đông";
}
//document.write("Hôm nay ngày: " +  date +"/"+ month +"/"+ year + " - " + season+ "<br>");

//bai 2
function sliceString(x) {
	x = x.toString();
	if (x.length <= 10) {
		document.write(x)
	}else{
		document.write(x.slice(0,10)+"...")
	}
}
//console.log(sliceString(19));

//bai3
function diem(x){
	if (x< 0 || x > 10) {
		document.write("Điểm không hợp lệ")
		}
		else if (x>=8.5) {
			document.write("Điểm là: "+ x +" - Xếp loại A")
		}
		else if (x >= 7) {
			document.write("Điểm là: "+ x +" - Xếp loại B")
		}
		else if (x >= 5.5) {
			document.write("Điểm là: "+ x +" - Xếp loại C")
		}
		else if (x >=4) {
			document.write("Điểm là: "+ x +" - Xếp loại D")
		}
		else {
			document.write("Điểm là: "+ x +" - Xếp loại F")
		}
	
}
//console.log(diem(8.6));

//bài 4 
function translate(x) {
	var trans = x;
	switch (trans) {
		default:
			document.write("Xin Chào!");
			break;
		case 'eng':
			document.write("hi!");
			break;
		case 'laos':
			document.write("ສະບາຍດີ");
			break;
		case 'china':
			document.write("你好");
			break;
		case 'portugal':
			document.write("Olá");
			break;
		case 'korean':
			document.write("안녕하세요");
			break;
	} 

}
//console.log(translate('korean'));


//bài 5
function count(){
var bool = [false, false, false, false, true, false, true, false, true];

var x = bool.indexOf(true);
document.write(" Vị trí xuất hiện đầu tiên của true là: " + x)
return x;
}
// console.log(count())


//bài 6
function print(){
	
	var i;
	for(i=1; i<=100; i++){
		
	if(i%2==0){
    	document.write( "<span style=\"color:blue\">"+ i +"<\/span>");
    }
    else{
		document.write("<span style=\"color:red\">"+i+"<\/span>");
	};
 
 }
}
//console.log(print());
