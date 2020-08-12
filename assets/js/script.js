//enable tooltips everywhere function

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });


// smooth scrolling function 

  $(document).ready(function(){
    $("a").on('click', function(event) {
  
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 100, function(){
  
          window.location.hash = hash;
        });
      } 
    });
  });

  // Carousel

  $('.carousel').carousel({
    interval: 3000,
    pause: false,
    wrap: true
})
