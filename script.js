
$(function() {
  $('.js-modalOpen').on('click',function(){
    $('.js-modal').fadeIn();
  });
  $('.js-modalClose').on('click',function(){
    $('.js-modal').fadeOut();
  });
});