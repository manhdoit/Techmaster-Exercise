/**
 * Created by DO-HONG on 5/15/2017.
 */
/**
 * Created by nguyenmanhdo on 5/10/17.
 */
var card = ['11', '22', '33', '44', '55', '6', '7', '8', '9']
var current = null
var count = 0
var time = 50;
var sound_bg = document.getElementById('background');
var sound_start = document.getElementById('soundstart');
var sound_win = document.getElementById('winner');
var sound_correct = document.getElementById('correct');
var sound_flip = document.getElementById('flipcard');
function shuffle (array) {
    var currentIndex = array.length, temporaryValue, randomIndex
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
    }
    return array
}
function flip (card) {
    $(card).css('pointer-events', 'none')
    $(card).toggleClass('NewClass')
    if (!current) {
        current = $(card)
        sound_flip.play();
        sound_flip.volume = 2;
    } else {

        $('.card').css('pointer-events', 'none')
        if (current.attr('data-name') != $(card).attr('data-name')) {
            setTimeout(function () {
                current.toggleClass('NewClass')
                $(card).toggleClass('NewClass')
                current = null
                $('.card').css('pointer-events', 'auto')
                document.getElementById('incorrect').play();
            }, 500)
        }
        else {
            setTimeout(function () {
                sound_correct.play();

                current.css('opacity', '0')
                $(card).css('opacity', '0')
                current = null
                $('.card').css('pointer-events', 'auto')
                count++
                if (count == card.length/2)
                    clearInterval(run);
                },400)
        }
    }
};
function start() {
    card = card.concat(card);
    card = shuffle(card);
    $('#start').fadeOut();
    $('#progress').show();
    $('#notification').hide();
    // document.getElementById('background').play();
    sound_bg.play();
    sound_bg.volume = 0.4;
    sound_start.pause();
    var html = '';
    for (var i = 0; i < card.length; i++) {
        html += '<div class="card" data-name="' + card[i] + '" onclick="flip(this)">' +
            '<img class="font" src="images/back.jpg"/>' +
            '<img class="back" src="images/' + card[i] + '.jpg"/>' + '</div>'
    }
    $('#content').html(html);
    $('#progress').val(time);
    var run = setInterval(function () {
        time--;
        $('#progress').val(time);
        if(time == 0){
            clearInterval(run);
            lose();
            $('#start').fadeIn();
        }
        else if(count == card.length/2) {
            clearInterval(run);
            winner();
            $('#start').fadeIn();
        }
    },1000)
}
function lose() {
    $('#notification').show();
    document.getElementById('gameover').play();
    $('.messenger').css('background-image', 'url("images/bg_lose1.png")');
    $('.title').css('display', 'none');
    // $('.messenger').find('h1').text('You Lose!');
    $('.messenger').find('button').text('Replay');
    $('.messenger').find('button').click(function() {
        location.reload();
    });
    sound_bg.pause();
}
function winner() {
    $('#notification').show();
    $('.messenger').css('background-image', 'url("images/vic_bg.jpg")');
    $('.messenger').find('h1').text('');
    $('.messenger').find('button').text('Replay');
    $('.messenger').find('button').click(function() {
       location.reload();
    });
    sound_bg.pause();
    sound_win.play();
}
$(function (){
    $('#progress').hide();
    $('#start').fadeIn();
    sound_start.play();

})
