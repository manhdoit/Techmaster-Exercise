var output,
luu_kq,
operator,
lastChar,
isResult = false,
screen;

window.onload = function(){
	screen = document.getElementById("result");
	//Click số hiển thị lên màn hình
	var btn = document.querySelectorAll(".btn_number");
	var len_btn = btn.length;
	for(var i = 0; i < len_btn; i++) {
		btn[i].addEventListener("click", function() {
			num = this.innerHTML;
			output = screen.innerHTML;
			if(isResult) {
				output = screen.innerHTML = num;
				isResult = false;
			}	
			else {
				output = screen.innerHTML += num;
			}
		})
	}
//Click các button toán tử
operator = document.querySelectorAll(".operator");
var len_operator = operator.length;
for (var i = 0; i < len_operator; i++) {
	operator[i].addEventListener("click", function(){
		operator = this.innerHTML;
		if (screen.innerHTML == "") {
			screen.innerHTML = screen.innerHTML;
		}
		else if(luu_kq = screen.innerHTML) {//Nếu thực hiện phép tính xong mà ấn tiếp toán tử
			screen.innerHTML = luu_kq + operator;
			isResult = false;
		}
		else {
				screen.innerHTML = output + operator;
		}
		})
}

Can_b2 = document.querySelector(".btn_sqrt");
Can_b2.addEventListener("click", function(){
	if (screen.innerHTML == output) {
		screen.innerHTML = Math.sqrt(output);
		isResult = true;
	}
})
	//phần trăm
	PhanTram = document.querySelector(".btn_percent");
	PhanTram.addEventListener("click", function(){
		if(screen.innerHTML == output) {
			screen.innerHTML = eval(output/100);
			isResult = true;
		}
	})
	//bình phương
	BinhPhuong = document.querySelector(".btn_square");
	BinhPhuong.addEventListener("click", function(){
		if (screen.innerHTML == output) {
			screen.innerHTML = Math.pow(output,2);
		}
	})
	//tính giai thừa
	GiaiThua = document.querySelector(".btn_factorial");
	GiaiThua.addEventListener("click", function() {
		if (screen.innerHTML == output) {
			screen.innerHTML = giaithua(output);
			isResult = true;
		}
	})
	//hàm tính giai thừa
	function giaithua(n) {
		var j=1;
		for (var i = 2; i <= n; i++) {
			j = j*i;
		}
		return j;
	}
	//Ân nút =
	document.querySelector(".btn_equals").addEventListener("click", function() {
		var KetQua = eval(output);
		screen.innerHTML = KetQua;
		isResult = true;
	})
		//ấn nút AC
		var xoa = document.querySelector(".btn_clear");
		xoa.addEventListener("click", function(){
			screen.innerHTML = "";
			output = "";
		})
	//ấn nút mũi tên xóa ký tự
	var del = document.querySelector(".btn_del");
	del.addEventListener("click", function() {
		screen.innerHTML = screen.innerHTML.slice(0,-1);
	})
}