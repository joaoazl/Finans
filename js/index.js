$(document).ready(function(){
    $('.modal-container').css({display: 'none'}).appendTo(('.modal-container')).fadeIn(1000);
    $('.modal-animate').css({display: 'none'}).appendTo(('.modal-animate')).show(1000);

    $('#btn').click(function(){
        $('.modal-container').fadeOut(1000)
    })
})