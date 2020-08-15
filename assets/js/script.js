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


// Handling events 
$(document).ready(function(){
  $('#name').click(function() {
      $('#name').animate({
        left: 800,
        right: -800
      }, 200);
      $('#name').animate({
        left: -500,
        top: 300
      }, 200);
      $('#name').animate({
        left: 0,
        top: 0
      }, 200);
    });
});

$(document).ready(function(){
  $('#iam').click(function() {
      $('#iam').animate({
        top: -500
      }, 200);
      $('#iam').animate({
        left: 0,
        top: 300
      }, 200);
      $('#iam').animate({
        left: 0,
        top: 0
      }, 200);
    });
});



       