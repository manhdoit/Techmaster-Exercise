/**
 * Created by nguyenmanhdo on 5/3/17.
 */
var questions = [ //tạo câu hỏi
  { question: "Từ các số 2, 3, 7, 8 có thể thành lập được bao nhiêu số chính phương có ba chữ số?",
    option: ["10", "20", "13", "0"],
    answer : "0"
  },
  { question: "Trong một tam giác có tổng hai góc bằng góc còn lại thì đó là tam giác gì?",
    option: ["Tam giác vuông", "Tam giác đều", "Tam giác cân", "Tam giác vàng"],
    answer : "Tam giác vuông"
  },
  { question: "Đại dương nào giáp các châu Á, Mỹ, Đại Dương?",
    option: ["Ấn độ dương","Đại tây dương","Bắc băng dương","Thái bình dương"],
    answer : "Thái bình dương"
  },
  { question: "Nhà văn Hemingway đoạt giải Nobel với tác phẩm nào?",
    option: ["Ông lão đánh cá và con cá vàng", "Con cá vàng", "Ông già và biển cả", "Vượt ngục"],
    answer : "Ông già và biển cả"
  },
  { question: "Cái gì đi lên đi xuống nhưng không chuyển động?",
    option: ["Con đường","Con ong","Xe đạp","Iphone"],
    answer : "Con đường"
  }
]

// function loadQuestion(questionIndex) {
  var q = question;
  var questionEl = document.getElementById('question');
 for (var i = 0; i < q.length; i++) {
    questionEl.innerHTML = q[0].question;
  }
// }
// loadQuestion();
//  var a =