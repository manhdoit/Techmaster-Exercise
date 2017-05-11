/**
 * Created by nguyenmanhdo on 5/10/17.
 */
var card = ['1', '2', '3', '4', '5'];
var current = null;
var count = 0;
var time = 30;
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
function flip(card) {
  $(card).css('pointer-events', 'none');
      $(card).toggleClass('NewClass');
      if (!current) {
        current = $(card);
        $(card).css('pointer-events', 'auto');
      } else {
        if (current.attr('data-name') != $(card).attr('data-name')) {
         setTimeout(function() {
           current.toggleClass('NewClass');
           $(card).toggleClass('NewClass');
           current = null;
           $(card).css('pointer-events', 'auto');
         },500);
        }
        else {
          setTimeout(function(){
            current.css('opacity','0');
            $(card).css('opacity','0');
            current = null;
            //$(card).css('pointer-events', 'auto');
            count++;
            if(count==5)
              alert("youwin");
          },500);
        }
      }
  }
function start(){
  $('#start').hide();
  card = card.concat(card);
  card = shuffle(card);
  var html='';
  for(var i=0; i<card.length; i++){
    html += '<div class="card" data-name="'+ card[i] + '" onclick="flip(this)">' +
      '<img class="font" src="images/back.jpg"/>' +
      '<img class="back" src="images/'+card[i]+'.jpg"/>' + '</div>'
  }
  $('#content').html(html);
  // var run = setInterval (function(){
  //   time--;
  //   if(time==0){
  //     clearInterval(run);
  //     alert("You Lose");
  //   }
  // },1000);
}
$(function(){
  
  $('#start').fadeIn();
})
