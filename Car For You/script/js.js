/**
 * Created by nguyenmanhdo on 6/7/17.
 */
// -------------------------Login tab-----------------------------
$('.user-modal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var tabId = button.data('tabs'); // Extract info from data-* attributes
    $(this).find('.nav-tabs>li').removeClass('active');
    $(this).find('#' + tabId + '-indicator').addClass('active');
    $(this).find('.tab-pane').removeClass('active in');
    $(this).find('.tab-pane#' + tabId).addClass('active in');
});
$('.logged').hide()
$('#login-btn').click(function () {
    $('.before-log').hide();
    $('.logged').css('display', 'inline-block');
});
$('#logout-btn').click(function () {
    $('.logged').hide();
    $('.before-log').show();
    event.preventDefault();
});


//delete Item ported in User Account
$('.remove').on('click', function () {
    $(this).closest('.list-car-posted').remove();
})

$('.multi-item-carousel').carousel({
    interval: false
});
// ----------------End Delete item car ported------------


// ---------------------------Google Map API-------------------------


// ------------------------------------------------

// Back to top button
(function () {
    $(document).ready(function () {
        return $(window).scroll(function () {
            return $(window).scrollTop() > 200 ? $("#back-to-top").addClass("show") : $("#back-to-top").removeClass("show")
        }), $("#back-to-top").click(function () {
            return $("html,body").animate({
                scrollTop: "0"
            })
        })
    })
}).call(this);


// ------------

$(".tab_content").hide();
$(".tab_content:first").show();

/* if in tab mode */
$("ul.tabs li").click(function () {

    $(".tab_content").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();

    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");

    $(".tab_drawer_heading").removeClass("d_active");
    $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

});
/* if in drawer mode */
$(".tab_drawer_heading").click(function () {

    $(".tab_content").hide();
    var d_activeTab = $(this).attr("rel");
    $("#" + d_activeTab).fadeIn();

    $(".tab_drawer_heading").removeClass("d_active");
    $(this).addClass("d_active");

    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
});


/* Extra class "tab_last"
 to add border to right side
 of last tab */
$('ul.tabs li').last().addClass("tab_last");
// --------------------
// -----------------Edit user information---------
function EditUser() {
    $('.edit').on("click", function () {
        $('.input-focus').removeClass('input-focus');
        $('input').prop('disabled', true);
        $(this).parent().children('input').prop('disabled', false);
        $(this).parent().children('input').addClass('input-focus');

        $('input').focus();
        // $(this).closest('input').removeAttr('disabled');
    })
};


// ******************Accordion FAQs Homepage********************

$('.panel-control .collap').hide();

$('.panel-heading').click(function () {
    $('.panel-heading .active').removeClass('active');
    $('.collap:visible').slideUp('normal');
    if ($(this).next().is(':hidden') === true) {
        // $(this).children('span').removeClass('dot');
        $(this).children('span').addClass('active');

        $(this).next().slideDown('normal')
    }
});

// **************Slider in Cardetail page************
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
// -----------------------End Slider in Cardetail page-------------

$(document).ready(function () {




})
