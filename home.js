$(function() {

  $('#cuptrigger').click(function(){
    $('#cup').fadeIn();
  });

  // ここからメニュー
  $('#bar').click(function(){
    $('#menu').slideDown();
  });

  $('#bar').click(function(){
    $(this).fadeOut();
  });

  $('#batsu').click(function(){
    $('#menu').slideUp();
  });



  $('#batsu').click(function(){
    $('#bar').fadeIn();
  });

// ここまでメニュー

$('h1').hide().fadeIn('slow');


});






