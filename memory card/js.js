/**
 * Created by nguyenmanhdo on 5/10/17.
 */
var card = ['1', '2', '3', '4', '5'];
var current = null;

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

      $(card).toggleClass('NewClass');
      // if(current){
      //   current.removeClass('NewClass');
      // }
      // current = $(this);
console.log($(this))
  }


$(function(){
  card = card.concat(card);
  card = shuffle(card);
  var html='';
  for(var i=0; i<card.length; i++){
    html += '<div class="card" data-name="'+ card[i] + '" onclick="flip(this)">' +
      '<img class="font" src="images/back.jpg"/>' +
      '<img class="back" src="images/'+card[i]+'.jpg"/>' + '</div>'
  }
  $('#content').html(html);
})

