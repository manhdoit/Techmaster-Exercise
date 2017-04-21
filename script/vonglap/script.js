//bai 1
function giaithua(n)
{
    var j=1;
    for (var i = 2; i <= n; i++){
        j = j * i;
    }
    return j;
}
// document.write(giaithua(5));

// bai2
function daonguoc(x) {
    var chuoi = '';
    for (var i = x.length - 1; i >= 0; i--){
       document.write(chuoi = x[i]);
    }

}
// console.log(daonguoc("xin chao"));
 
// bai3
function duplicate(x) {
	var y ='-'
	var chuoi ='';
	
	for( i = 0; i < 10; i++){
		chuoi += x + y;
	}
	return chuoi.slice(0, -1);
}
// document.write(duplicate("123"));

//bai 4

function sapxep(x){	
	x.sort();
for ( var i = 0; i < x.length; i++) {
 document.write("<p>" + i +". " + x[i] + "</p>");
}}
// console.log(sapxep(['hong','a', 'b','d','n','y']));

//bai5
function double(x){
	var arr=[];
	var j;
for (var i = 0; i < x.length; i++){
	j= x[i]*2 ;
	arr.push(j);
	}
	return arr;
}
// console.log(double([5,4,2]));

//bai6 
function chialaydu(x){
	var arr=[];
	var dem;
	for ( var i=0; i<x.length; i++){
		dem= x[i]%2;
		arr.push(dem)
	}
	return arr;
}
console.log(chialaydu([4,22,8]));