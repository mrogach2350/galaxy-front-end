$(document).ready(function() {
  // sanity check
  console.log('Working...');

  // triggers side-nav in narrow view
  $(".button-collapse").sideNav();

  // triggers login modal
  $('.modal-trigger').leanModal();

  $(".dropdown-button").dropdown();

  // hides login and unhides logout button on login
  $('.modal-action').on('click', function(){
    $('#login').addClass('hidden');
    $('.out-banner').addClass('hidden');
    $('#logout').removeClass('hidden');
    $('.in-banner').removeClass('hidden');
  });

  // hides logout and reveals login on logout
  $('#logout').on('click', function(){
    $('#login').removeClass('hidden');
    $('.out-banner').removeClass('hidden');
    $('#logout').addClass('hidden');
    $('.in-banner').addClass('hidden');
  });
});
