/**
 * Created by nguyenmanhdo on 5/2/17.
 */
var questions = [ //tạo câu hỏi
  { "question": "Từ các số 2, 3, 7, 8 có thể thành lập được bao nhiêu số chính phương có ba chữ số?",
    "option1": "10",
    "option2": "20",
    "option3": "13",
    "option4": "0",
    "answer" : "4"
  },
  { "question": "Trong một tam giác có tổng hai góc bằng góc còn lại thì đó là tam giác gì?",
    "option1": "Tam giác vuông",
    "option2": "Tam giác đều",
    "option3": "Tam giác cân",
    "option4": "Tam giác vàng",
    "answer" : "1"
  },
  { "question": "Đại dương nào giáp các châu Á, Mỹ, Đại Dương?",
    "option1": "Ấn độ dương",
    "option2": "Đại tây dương",
    "option3": "Bắc băng dương",
    "option4": "Thái bình dương",
    "answer" : "4"
  },
  { "question": "Nhà văn Hemingway đoạt giải Nobel với tác phẩm nào?",
    "option1": "Ông lão đánh cá và con cá vàng",
    "option2": "Con cá vàng",
    "option3": "Ông già và biển cả",
    "option4": "Vượt ngục",
    "answer" : "3"
  },
  { "question": "Cái gì đi lên đi xuống nhưng không chuyển động?",
    "option1": "Con đường",
    "option2": "Con ong",
    "option3": "Xe đạp",
    "option4": "Iphone",
    "answer" : "1"
  }
]

// ---------------------------------------------
var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');
var scoreCont = document.getElementById('score');
var replay = document.getElementById('replay');
    replay.style.display = 'none';
var congrulation = document.getElementById("congrulation");

function loadQuestion(questionIndex) {
  var q = questions[questionIndex];
  questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
  opt1.textContent = q.option1
  opt2.textContent = q.option2
  opt3.textContent = q.option3
  opt4.textContent = q.option4
};

function loadNextQuestion() {
  var selectedOption = document.querySelector('input[type=radio]:checked');
  if(!selectedOption) {
    alert('Hãy chọn câu trả lời!');
    return;
  }
  var answer = selectedOption.value;
  if(questions[currentQuestion].answer == answer) {
    score += 1;
  }
  selectedOption.checked = false;
  currentQuestion++;

  if(currentQuestion == totQuestions - 1) {
    nextButton.textContent = 'Finish';
  }
  if(currentQuestion == totQuestions) {
    container.style.display = 'none';
    resultCont.style.display ='';
    scoreCont.style.display = '';
    replay.style.display = 'block';
    if(score < 3) {
    resultCont.innerHTML = 'You Lose ';
    scoreCont.innerHTML = 'Điểm của bạn là: ' + score;
    return;
    }
    else {
      replay.style.display = 'none';
      resultCont.innerHTML = 'You Win! ';
      scoreCont.innerHTML = 'Điểm của bạn là: ' + score;
      setTimeout(function(){
        window.location.href="youwin.html";
      }, 2000)


    }
  }
  showprogress();
  loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);
function rePlay(){
  window.location.reload('index.html');
}
function showprogress() {
  var numberQuestion = currentQuestion + 1;
  var show_pro_gress = document.getElementById('show');
  show_pro_gress.innerText = 'Câu hỏi số ' + numberQuestion + ' trên ' + totQuestions;
}
showprogress();










