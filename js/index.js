$(document).ready(function(){
    $('.modal-container').fadeIn(1000);
    $('.modal-animate').animate({opacity: 1, delay: 800, marginTop: '0px'}, 1200);

    $('#btn').click(function(){
        $('.modal-container').fadeOut(1000)
    })
})