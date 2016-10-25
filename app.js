$(document).ready(function() {
  // sanity check
  console.log('Working...');

  // triggers side-nav in narrow view
  $(".button-collapse").sideNav();

  // triggers login modal
  $('.modal-trigger').leanModal();

  $('.modal-action').on('click', function(){
    $('#login').addClass('hidden');
    $('#logout').removeClass('hidden');
  });

  $('#logout').on('click', function(){
    $('#login').removeClass('hidden');
    $('#logout').addClass('hidden');
  });
});
