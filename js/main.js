// mobile menu
$(document).ready(function() {
  var menuToggle = $('.js-mobileMenuBtn').unbind();
  $('.js-menu').removeClass("is-shown");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('.js-menu').slideToggle(function(){
      if($('.js-menu').is(':hidden')) {
        $('.js-menu').removeAttr('style');
      }
    });
  });
});

