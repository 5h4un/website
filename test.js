//$(document).ready(main);
/*$(document).ready(function() {
    // $('body').hide().fadeIn(800);
    $(window).scroll(function() {
        var circle = $('#circle');
        var bottom_of_object = circle.offset().top + circle.outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if(bottom_of_window > bottom_of_object){
            circle.animate({opacity: '1'}, 500);
        }
    }); 
});*/


$(document).ready(function() {
    $('.jumbotron').hide().fadeIn(1000);
    $('#fadeOne').hide().fadeIn(1000);
    $('#headingOne').hide().fadeIn(1000);
    $('#picFade').hide().fadeIn(1000);
   $(window).scroll(function() {
      $('.scrollFade').each(function(i) {
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          if(bottom_of_window > bottom_of_object){
              $(this).animate({'opacity': '1'},1000);
          }
      }); 
   });
});


/*var main = function() {
    $(window).scroll(function() {
       $('.scrollFade').each(function(i) {
           var bottom_of_object = $(this).position().top + $(this).outerHeight();
           var bottom_of_window = $(window).scrollTop() + $(window).height();
           if(bottom_of_window > bottom_of_object){
               $(this).animate({'opacity': '1'}, 500);
               console.log(i)
           }
       }); 
    });
}*/




/*$(document).ready(function() {
    $(window).scroll(function() {
        var circle = $()
    })
})



$(document).ready(function() {
    // $('body').hide().fadeIn(800);
    $(window).scroll(function() {
        
        $('.scrollFade').each(function() {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height() + 400;
            if(bottom_of_window > bottom_of_object){
                $('this').animate({opacity: '1'}, 500);
        })
        

        }
    });
)};*/
