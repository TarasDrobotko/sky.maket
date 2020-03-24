// main menu toggle
$('.menu-btn').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('menu-btn_active');
  $('ul#menu').toggleClass('active');
});