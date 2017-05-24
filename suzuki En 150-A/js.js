var slideIndex = 1
showDivs(slideIndex)
function plusDivs (n) {
  showDivs(slideIndex += n)
}

function showDivs (n) {
  var i
  var x = $('.mySlides')
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none'
  }

  x[slideIndex - 1].style.display = 'block'

}
function showimage () {
  'use strict'
  $('.popup img').click(function () {
    var $src = $(this).attr('src')
    $('.show').fadeIn()
    $('.img-show img').attr('src', $src)
  })
  $('span, .overlay').click(function () {
    $('.show').fadeOut()
  })
}
showimage()
