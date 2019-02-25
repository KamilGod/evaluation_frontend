window.onscroll = function() {stickNav()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


$( ".flBtn" ).click(function() {
    $(this).toggleClass('activeFormBtn')
    $('.holBtn').removeClass('activeFormBtn');
    $('.htlBtn').removeClass('activeFormBtn');
   $('.form1').addClass('activeForm');
   $('.form2').removeClass('activeForm');
   $('.form3').removeClass('activeForm');

  });
  $( ".htlBtn" ).click(function() {
    $(this).toggleClass('activeFormBtn')
    $('.flBtn').removeClass('activeFormBtn');
    $('.holBtn').removeClass('activeFormBtn');
   $('.form2').addClass('activeForm');
   $('.form1').removeClass('activeForm');
   $('.form3').removeClass('activeForm');

  });
  $( ".holBtn" ).click(function() {
    $(this).toggleClass('activeFormBtn')
    $('.flBtn').removeClass('activeFormBtn');
    $('.htlBtn').removeClass('activeFormBtn');
   $('.form3').addClass('activeForm');
   $('.form1').removeClass('activeForm');
   $('.form2').removeClass('activeForm');

  });

  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    
   
  })