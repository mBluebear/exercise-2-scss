$(document).ready(function(){
    $('#button').click(function(){
        $('#balloon').fadeIn(function(){
            $(this).animate({top: -200}, 5000);
        });
        $(this).children('.icon-gift_unopen').attr('class', 'icon-gift_open');
    });
});