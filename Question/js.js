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

var i = 0
var progress = document.getElementById('progress')
progress.innerHMTL = 'Question ' + i + 'of 5'
var element = document.getElementById('question')
element.innerHTML = questions[i].Question
var choices = document.querySelectorAll('.choice0')
var choi_length = choices.length
for (var j = 0; j < choi_length; j++) {
  choices[j].innerText = questions[i].dap_an[j]

}

var checked = document.querySelector('#check_next')
checked.addEventListener('click', function () {
  i++
})
