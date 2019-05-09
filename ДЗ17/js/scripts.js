$(document).ready(function() {
    let chooseTourBtn = $('a[href="#tour"] div'),
        getConsultationBtn = $('.main_btn:first'),
        sheldureBtn = $('a[href="#sheldure"]:last'),
        closeBtn = $('.close:first'),
        overlay = $('.overlay'),
        modal = $('.modal');
    
    $(getConsultationBtn).on('click', showModal);
    $(chooseTourBtn).on('click', showModal);
    $(sheldureBtn).on('click', showModal);
    $(closeBtn).on('click', hideModal);

    function hideModal() {
        overlay.fadeOut(1000);
        modal.slideUp(1000);
    }

    function showModal() {
        overlay.fadeIn(1000);
        modal.slideDown(1000);
    }
});