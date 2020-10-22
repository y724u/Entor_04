
$(function() {
  $('.js-modalOpen').on('click',function(){
    $('.modal').fadeIn();
  });
  $('.js-modalClose').on('click',function(){
    $('.modal').fadeOut();
  });
});