/**
 * Created by nguyenmanhdo on 5/5/17.
 */
var screen,
  output = '',
  operator,
  //operator = ['+', '-', '*', '/'],
  dot = false,
  isResult = false,
  lastchar ='';
screen = document.getElementById('result');
var btn = document.querySelectorAll('.btn_number');
var len = btn.length;
for (var i = 0; i < len; i++) {
  btn[i].addEventListener('click', function () {
    lastchar = this.innerHTML
    output = screen.innerHTML += lastchar;
    dot = false;
  })
}

operator = document.querySelectorAll(".operator");
var len_oper = operator.length;
for (var  i = 0; i< len_oper; i++) {
  operator[i].addEventListener('click', function () {
    lastchar = this.innerHTML;
    if(screen.innerHTML==""){
      screen.innerHTML = screen.innerHTML;
    }
    else {
      screen.innerHTML = output + lastchar;
    }
    dot = false;
  })
}

document.querySelector('.dot').addEventListener('click', function() {
  if(!dot){
    screen.innerHTML = output + '.';
  }
  lastchar = '.';
  dot = true;
})


//nut bang =
document.querySelector(".btn_equals").addEventListener("click", function() {
  var KetQua = eval(output);
  screen.innerHTML = KetQua;
  isResult = true;
})



//nut xoa man hinh AC
function del () {
  screen.innerHTML = ''
  output = ''
 // oper= ''
}