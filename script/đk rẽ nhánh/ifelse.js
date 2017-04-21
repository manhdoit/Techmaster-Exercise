//bai 1
function sosanh(a,b) {
	var a, b;
	if (typeof a != "number" || typeof b != "number") {
		document.write( "nhap vao khong phai so" );
	}
	if (typeof a =="number" && typeof b =="number"){
		if(a==b){
			document.write("Hai số bằng nhau");
			return a;
		}

		if( a > b) {
			document.write("Số lớn nhất là: " + a);
			return a;
		}	
		if(a < b) {
				document.write("Số lớn nhất là: " + b)
			return b;
			}
		}
		
	}

//console.log(sosanh(21,22));

//bai 2

function giaithua(a) {
	
if(Number.isInteger(a) == false) {//Kiểm tra a là số nguyên
	document.write(a + " Không phải số nguyên ");
	}
if(a<0) {
	document.write(a + " Không phải số nguyên dương ");

}
if(Number.isInteger(a)){

	var gt = 1;
		for (i=2; i<=a; i++){
				gt=gt*i;
			}
	return gt;

		}

}		
console.log(giaithua(6));


//bai3
function timsochan(a) {
	a.sort(function(x,y){return y-x});
	var arr =[];
	for(i = 0; i<a.length; i++ ){
	if(a[i]%2==0){
		arr.push(a[i]);
	}
}
return arr;
}
//console.log(timsochan([3,4,5,7,9,12,23,24,54,67,88,66,44]));

//bai 4
 var user = {
			userName: "2",
			password: "madnhdo42123",
			confirm: "madnhdo42123"	
			}
		
function checkUser(x){
	if(x.userName!='' && x.userName <= 20 && x.password.length >=6 && x.password.length <= 32 && x.password == x.confirm){
		document.write("Đăng nhập thành công");
	}
	if(x.userName.length <= 0 || x.userName.length >20 ){
		document.write("Tên đăng nhập không đúng "+"<br>");
	}
	if(x.password.length < 6 || x.password.legnth >32){
		document.write("mật khẩu không đúng"+"<br>");
	}
	if (x.confirm != x.password) {
		document.write("mật khẩu nhập lại không khớp"+"<br>");
	}
}

//console.log(checkUser(user))

	

