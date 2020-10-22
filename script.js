
$(function() {
  $('.js-modalOpen').on('click',function(){
    $('.js-modal').addClass('show_modal');
  });
  $('.js-modalClose').on('click',function(){
    $('.js-modal').removeClass('show_modal');
  });
});



