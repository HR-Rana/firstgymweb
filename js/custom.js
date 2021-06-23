
  $('.menu ul li').on("click",function(){
    $(this).addClass('active').siblings().removeClass('active');
  });

  $('.short-icons').on('click', function(){
    $('.menu, .social-icons').toggle(1500);
      $('.short-icons').children('span').fadeToggle();
  });
  $('.menu ul li').on('click',function(){
    $('.short-icons').children('span').toggle();
    $('.menu, .social-icons').toggle();
    
  });





  $(function () {

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    // AOS ANIMATION
    AOS.init({
      disable: 'mobile',
      duration: 800,
      anchorPlacement: 'center-bottom'
    });
















    // SMOOTHSCROLL NAVBAR
    $(function() {
      $('.navbar a, .hero-text a').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });    
  });


    

