$(function() {
    $('.menu').hide();
    $('.hamburger').on('click', function() {
	if ($('.hamburger').hasClass('is-active')){
	    $('.menu').hide('slow');
	    $('.hamburger').removeClass('is-active');
	} else if(!$('.hamburger').hasClass('is-active')) {
	    $('.hamburger').addClass('is-active');
	    $('.menu').show('slow');
	}
    });
});
