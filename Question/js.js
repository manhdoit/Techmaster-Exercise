/**
 * Created by nguyenmanhdo on 5/4/17.
 */
var questions = [
  {
    Question: 'Trong các ngôn ngữ lập trình sau. Đâu là ngôn ngữ lập trình hướng đối tượng?',
    dap_an: ['Java', 'C#', 'C++', 'C'],
    Answer: 'C'
  },
  {
    Question: 'Ngôn ngữ nào được dùng để tạo kiểu cho trang web?',
    dap_an: ['HTML', 'JQuery', 'CSS', 'XML'],
    Answer: 'CSS'
  },
  {
    Question: 'There are _____ main components of object oriented programming.',
    dap_an: ['1', '2', '3', '4'],
    Answer: '4'
  },
  {
    Question: 'Ngôn ngữ nào được sử dụng cho các ứng dụng web?',
    dap_an: ['PHP', 'Python', 'JavaScript', 'All'],
    Answer: 'All'
  },
  {
    Question: 'MVC là: _____',
    dap_an: ['Language', 'Library', 'Framework', 'All'],
    Answer: 'Framework'
  }
]

var i = 0;
var chose = false;
var ans = questions[i].Answer;
var totQuestion = questions.length;
var score=0;
var kq='';
var btn = document.querySelectorAll('.btn');
var ques = document.querySelector('#question');
var choice = document.querySelectorAll('.choice0');
var next = document.querySelector("#check_next");

function press(button) {
  kq=button.innerText;
  for(var i = 0;i<btn.length;i++){
    btn[i].style.backgroundColor='#778897';

  }
  button.style.backgroundColor = "red";
  // chose=false;
}
function loadquestion() {
  ques.innerText = questions[i].Question;
  for (var j=0; j< choice.length; j++) {
    choice[j].innerText = questions[i].dap_an[j]
  }
}


function nextbtn() {
  
  if(i==5){
    result();
  }

  else{
  loadquestion();}
  i++;
}
nextbtn();
