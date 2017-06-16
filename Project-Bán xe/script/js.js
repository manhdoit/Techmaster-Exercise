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
$('#login-btn').click(function(){
    $('.before-log').hide();
    $('.logged').css('display','flex');
});
$('#logout-btn').click(function(){
    $('.logged').hide();
    $('.before-log').show();
    event.preventDefault();
});
// -----------------------Banner Carousel------------------------------
var $item = $('.carousel .item');
var $wHeight = $(window).height();
$item.eq(0).addClass('active');
// $item.height($wHeight);
$item.addClass('full-screen');

$('.carousel img').each(function() {
    var $src = $(this).attr('src');
    var $color = $(this).attr('data-color');
    $(this).parent().css({
        'background-image' : 'url(' + $src + ')',
        'background-color' : $color
    });
    $(this).remove();
});

$(window).on('resize', function (){
    $wHeight = $(window).height();
    $item.height($wHeight);
});

$('.carousel').carousel({
    interval: 6000,
    pause: "false"
});
// ---------------------------Google Map API-------------------------
function initMap() {
    var techmaster = {lat: 21.0147874, lng: 105.8464177};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: techmaster
    });
    var marker = new google.maps.Marker({
        position: techmaster,
        map: map
    });
}
initMap()

// ------------------------------------------------

// Back to top button
(function() {
    $(document).ready(function() {
        return $(window).scroll(function() {
            return $(window).scrollTop() > 200 ? $("#back-to-top").addClass("show") : $("#back-to-top").removeClass("show")
        }), $("#back-to-top").click(function() {
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
$("ul.tabs li").click(function() {

    $(".tab_content").hide();
    var activeTab = $(this).attr("rel");
    $("#"+activeTab).fadeIn();

    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");

    $(".tab_drawer_heading").removeClass("d_active");
    $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");

});
/* if in drawer mode */
$(".tab_drawer_heading").click(function() {

    $(".tab_content").hide();
    var d_activeTab = $(this).attr("rel");
    $("#"+d_activeTab).fadeIn();

    $(".tab_drawer_heading").removeClass("d_active");
    $(this).addClass("d_active");

    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
});


/* Extra class "tab_last"
 to add border to right side
 of last tab */
$('ul.tabs li').last().addClass("tab_last");
