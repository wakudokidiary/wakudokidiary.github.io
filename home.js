$(function() {

  $('h2').hover(
    function(){
     $(this).css('color','#800000');
  },
    function(){
     $(this).css('color','black');  
    });

  $('li').hover(
      function(){
       $(this).css('color','pink');
    },
      function(){
       $(this).css('color','white');  
      });



});
