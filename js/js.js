function fadeEducation(){
	function isElementInViewport(el) {//function fade in Education
		var rect = el.getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
			);
	}
	var items = document.querySelectorAll(".timeline li");

// code for the isElementInViewport function

function callbackFunc() {
	for (var i = 0; i < items.length; i++) {
    // if (isElementInViewport(items[i])) {
    	items[i].classList.add("in-view");
    // }
}
};
window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);
}

// **************************

function smoothlyScroll() {
	fadeEducation();

	$('.nav a[href^="#"').click(function(){
		var $this = $(this);
		$('.nav a[href^="#"').removeClass('active');
		$this.addClass('active');
		if (this.has !==""){
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 1000, function(){
			window.location.hash = hash;
			})
		}
	})
}
smoothlyScroll();

function htmlScrol(){
        $('.about-content .info').addClass('fade-right');
        $('.about-content .object').addClass('fade-left');
		$('.fade-left').attr("data-av-animation", "fadeInLeft");
        $('.fade-right').attr('data-av-animation', 'fadeInRight');
        $('.experience-content .info:nth-child(1)').addClass('fade-in-down')
		$('.experience-content .info:nth-child(2)').addClass('fade-in-up')
        $('.fade-in-down').attr('data-av-animation', 'slideInDown');
        $('.fade-in-up').attr('data-av-animation', 'slideInUp');
        var options = {
            animateThreshold: 200,
            scrollPollInterval: 100,
        };
        var timesDelay ={
        	animateThreshold: 200,
        	scrollPollInterval: 50
        	};

        $('.fade-left').AniView(options);
        
        $('.fade-right').AniView(options);
        $('.fade-in-down').AniView(timesDelay);
        $('.fade-in-up').AniView(timesDelay)
    }


// function move() {
//   var elem = document.getElementById('myBar');   
//   var width = 1;
//   var id = setInterval(frame, 1);
//   function frame() {
//     if (width >= 70) {
//       clearInterval(id);
//     } else {
//       width++; 
//       elem.style.width = width + '%'; 
//     }
//   }
// };

// function offSet(){
// 	// var x = $('#skill').offset().top;
// 	$(window).scroll(function(){
// 		if($(document).scrollTop() > 10 ){
// 			console.log()
// 			move();
// 		}
// 	})
// }
// function onScroll(event){
//    var scrollPos = $(document).scrollTop();
//    $('.navbar-nav a').each(function () {
//        var currLink = $(this);
//        var refElement = $(currLink.attr("href"));
//        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//            $('ul.navbar-nav li a').removeClass("active");
//            currLink.addClass("active");
//        }
//        else{
//            currLink.removeClass("active");
//        }
//    });
// }

 function initMap() { //google map function
        var techmaster = {lat: 20.9057732, lng: 105.6441171};
        var map = new google.maps.Map(document.getElementById('addressMap'), {
            zoom: 10,
            center: techmaster
        });
        var marker = new google.maps.Marker({
            position: techmaster,
            map: map
        });
    }
    initMap();



$(document).ready(function (){
htmlScrol();
smoothlyScroll();
    initMap();
    // onScroll(event);
});
