$(document).ready(function() {
  // sanity check
  console.log('Working...');

  // triggers side-nav in narrow view
  $(".button-collapse").sideNav();

  // triggers login modal
  $('.modal-trigger').leanModal();
});
