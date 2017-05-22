/**
 * Created by nguyenmanhdo on 5/22/17.
 */

$('#form').on('submit', function(){
    var isValis = true;

    if($('#name').val().trim() == ""){
        $('#name').next('span').text('Tên không được để trống');
        isValis = false;
    }
    else{
        $('#name').next('span').text('');
    }
    if($('#email').val().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/) == null){
        $('#email').next('span').text('ex: abc@abc.com');
        isValis = false;
    }
    else {
        $('#email').next('span').text('');
    }
    if($('#birthday').val().match(/^\d{1,2}\/\d{1,2}\/\d{4}$/) == null){
        $('#birthday').next('span').text('ex: mm/dd/yyyy');
        isValis = false;
    }
    else{
        $('#birthday').next('span').text('');
    }
    if($('#address').val().trim() == ""){
        $('#address').next('span').text('Địa chỉ không được để trống');
        isValis = false;
    }
    else{
        $('#address').next('span').text('');
    }
    if($('#phonenumber').val().match(/^[0-9-+]+$/) == null) {
        $('#phonenumber').next('span').text('Số điện thoại không đúng');
        isValis =  false;
    }
    else {
        $('#phonenumber').next('span').text('');

    }
    if($('#facebook').val().match(/facebook.com/)==null){
        $('#facebook').next('span').text('ex: facebook.com/abc')
        isValis = false;
    }
    else {
        $('#facebook').next('span').text('');
    }
    if($('input:checked').length==0){
        $('label').next('span').text('hãy chọn giới tính')
        isValis = false;
    }
    else {
        $('label').next('span').text('')
    }
    return isValis;
});