var output,
	luu_kq,
	operator,
	screen;
window.onload = function(){

	//function hienthi() {//Click số hiển thị lên màn hình
		screen = document.getElementById("result");
		var btn = document.querySelectorAll(".btn_number");
		var len_btn = btn.length;
		for(var i = 0; i < len_btn; i++) {
			btn[i].addEventListener("click", function() {
				num = this.innerHTML;
				screen.innerHTML += num;
				output = screen.innerHTML;
			})
		}
	// }
	// hienthi();

	function operator() {//Click các button toán tử
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
				}
				else {
					screen.innerHTML = output + operator;
			}
		})
			
		}
	}
	operator();

	function giaithua() {
		
	}
	function ketqua() {
		document.querySelector(".btn_equals").addEventListener("click", function() {
			screen.innerHTML = eval(output);
		})
	}
	ketqua();

	function AC() {//Xóa màn hình hiển thị
		var xoa = document.querySelector(".btn_clear");
		xoa.addEventListener("click", function(){
			screen.innerHTML = "";
		})
	}
	AC();
	
	function Del() {//ấn nút mũi tên xóa ký tự
		var del = document.querySelector(".btn_del");
		del.addEventListener("click", function() {
			screen.innerHTML = screen.innerHTML.slice(0,-1);
		})
	}
	Del();
	
	
	

}