window.onload = function() {
	var current, 
		screen,//biến lấy div hiển thị kết quả
		output,//biến hiển thị kết quả
		zero, //biến lấy số 0
		period,
		operator;

		screen =document.getElementById("result");
		var btn = document.querySelectorAll(".btn_number");
		var len = btn.length;
		for(var i = 0; i<len; i++) {
			btn[i].addEventListener("click", function(){
				num = this.innerHTML;
				output=screen.innerHTML +=num;
			})
		}
		
	var elem1 = document.querySelectorAll(".operator");
        var len1 = elem1.length;
        for(var i = 0; i < len1; i++ ) {
            elem1[i].addEventListener("click",function() {
       	       operator = this.innerHTML;
        	if(screen.innerHTML === "") {
            	screen.innerHTML = screen.innerHTML.concat("");
       		}
            else if(output) {
                screen.innerHTML = output.concat(operator);
            }
           	});
        } 
      //nhấn nút = 
    document.querySelector(".btn_equals").addEventListener("click", function(){
			var x = eval(output);
		

    });
		//nút xóa màn hình
		document.querySelector(".btn_clear").addEventListener("click", function(){
			screen.innerHTML = "";
		})
console.log(output);	
}

