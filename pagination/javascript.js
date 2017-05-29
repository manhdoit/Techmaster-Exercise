/**
 * Created by nguyenmanhdo on 5/29/17.
 */

// console.log('abc')
var img = ["1","2","3","4","5","6","7","8","9","10"]
var show_per_page = $("#show_page");
var number_of_item = $("#content").children().length;
var number_of_page = Math.ceil(number_of_item/show_per_page);
var html ="";
$('#current_page').val(0);

// $("#button").click(function() {
//     for(var i=0; i<$("#show_page").val(); i++){
//       html+='<img src="images/' + img[i]+ '.jpg"/>'
//     }
//     $("#content").html(html);
//   });



