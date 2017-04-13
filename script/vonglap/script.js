function bai1(n)
{
    var j=1;
    for (var i = 2; i <= n; i++){
        j = j * i;
    }
    return j;
}
// console.log(bai1(12));

function bai2(x) {
    var chuoi = '';
    for (var i = x.length - 1; i >= 0; i--){
        chuoi += x[i];
    }
    return chuoi;
}
// console.log(bai2("xin chao"));
 
function bai3(x) {
	var y ='-'
	var chuoi ='';
	for( i = 0; i < 10; i++){
		 chuoi += x + y;
	}
	return chuoi.slice(0,-1) ;
}
// console.log(bai3("123"));

//bai 4
function bai4(ten){
 ten=['do', 'hong', 'nam', 'kien', 'an', 'dat', 'hai', 'hoang'];
	
	x=ten.sort();
	
	for( i = 1; i < x.length; i++){
		i+= x;
	}
	return i + x;
}

document.write("<p>"+ i +". "+ x[i]+"</p>");