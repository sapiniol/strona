$(window).scroll(function(){

  let scroll = $(this).scrollTop();

  $('#menu').css({
    'transform' : 'translate(0px, '+scroll /2+'%)'
  });

})
