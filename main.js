$(document).on('scroll', function () {
    console.log($(document).scrollTop());
    if ($(document).scrollTop() > 300) {
        $('.back-to-top').addClass('show');
    } else {
        $('.back-to-top').removeClass('show');
    }
});

$('.img-back').on('click', function () {
    $('html,body').animate({ scrollTop: 0 }, 'fast');
});
$('#hide').on('click', function () {
    $('#element').attr('style', 'display:none !important');
});
$('#show').on('click', function () {
    $('#element').slideDown(1000);
});
