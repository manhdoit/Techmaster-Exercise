	var screen,//biến lấy div hiển thị kết quả
		output,//biến hiển thị kết quả
		isResult = false,
		operator;

		screen =document.getElementById("result");
		var btn = document.querySelectorAll(".btn_number");
		var len = btn.length;
		for(var i = 0; i<len; i++) {
			btn[i].addEventListener("click", function(){
				num = this.innerHTML;

				if(isResult){ // check nếu vừa ấn dấu bằng thì reset output
					output = screen.innerHTML =num;
					isResult=false;
				}else{
					output= screen.innerHTML +=num;
				}
				

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

	var y = [{key: "&divide;", value: "/"}, {key:"x" , value: "*"}, {key: "&ndash;", value: "-"}];
				
    document.querySelector(".btn_equals").addEventListener("click", function() {

      var xTrim = output.trim();
      var aaa = y.length;
      console.log('xTrimold', xTrim);
      for (var i = 0; i < aaa; i++) {

        xTrim = xTrim.replace(y[i].key, y[i].value);
      }

      console.log('xTrim', xTrim);
      var x = eval(xTrim);
      console.log('resfdgdgdgdgdg', x);
      screen.innerHTML = x;
      isResult = true; // gán biến để check khi mà ấn dấu bằng.
    })  //nhấn nút =
      document.querySelector(".btn_equals").addEventListener("click", function () {
        var x = eval(output);

      });
      //nút xóa màn hình
      document.querySelector(".btn_clear").addEventListener("click", function () {
        screen.innerHTML = "";
      })



