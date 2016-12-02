$(document).ready(function() {
    $('.jumbotron').hide().fadeIn(1000);
    $('#fadeOne').hide().fadeIn(1000);
    $('#headingOne').hide().fadeIn(1000);
    $('#picFade').hide().fadeIn(1000);
   $(window).scroll(function() {
      $('.scrollFade').each(function(i) {
        /*offSet() gets the element's position relative to the page
        outerHeight() gets the height of the elements actual height, including
        the element, padding, and border. Give a value of true to include margin*/
          var top_of_object = $(this).offset().top /*+ $(this).outerHeight()*/;
          /*scrollTop() gets the top of the window and height() gets the length of the window*/
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          if(bottom_of_window > top_of_object + 20){
              $(this).animate({'opacity': '1'},1000);
          }
      }); 
   });
});
