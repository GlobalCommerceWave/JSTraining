$('.bottom-order').on('click', function () {
    var obj = $(this).closest('.js-conteiner').find('.opening');
    if (obj.hasClass('hidden')) {
        obj.show();
        obj.removeClass('hidden');
    } else {
        obj.hide();
        obj.addClass('hidden');
    }
})