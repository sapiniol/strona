$(window).scroll(function(){

  let scroll = $(this).scrollTop();

  $('.Dane').css({
    'transform' : 'translate(0px, -'+scroll *0.5+'%)'
  });

  $('.CV').css({
    'transform' : 'translate(0px, -'+scroll /2+'%)'
  });

  $('.Kontakt').css({
    'transform' : 'translate(0px, -'+scroll /2+'%)'
  });

})
