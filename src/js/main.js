

// sticky nav
jQuery(document).ready(function () {

  $(window).scroll(function () {
    console.log($(window).width());
    if (($(window).scrollTop() > 125)) {
      $('header').addClass('stix');
      $('.medias').addClass('stixActives');
      $('nav').addClass('stixActive')
    } else {
      $('header').removeClass('stix')
      $('.medias').removeClass('stixActives');
      $('nav').removeClass('stixActive')
    }

  });
});




// window.onscroll = function() {stickNav()};

// var navbar = document.getElementById("#navHead");
// var sticky = navbar.offsetTop;

// function stickNav() {
//   if (($(window).scrollTop() > 177)) {
//     navbar.addClass("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }


// Formulaire Main

$(".flBtn").click(function () {
  $(this).toggleClass('activeFormBtn')
  $('.holBtn').removeClass('activeFormBtn');
  $('.htlBtn').removeClass('activeFormBtn');
  $('.form1').addClass('activeForm');
  $('.form2').removeClass('activeForm');
  $('.form3').removeClass('activeForm');

});
$(".htlBtn").click(function () {
  $(this).toggleClass('activeFormBtn')
  $('.flBtn').removeClass('activeFormBtn');
  $('.holBtn').removeClass('activeFormBtn');
  $('.form2').addClass('activeForm');
  $('.form1').removeClass('activeForm');
  $('.form3').removeClass('activeForm');

});
$(".holBtn").click(function () {
  $(this).toggleClass('activeFormBtn')
  $('.flBtn').removeClass('activeFormBtn');
  $('.htlBtn').removeClass('activeFormBtn');
  $('.form3').addClass('activeForm');
  $('.form1').removeClass('activeForm');
  $('.form2').removeClass('activeForm');

});



// Swiper

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 2,
  spaceBetween: 30,
  centeredSlides: false,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiper = new Swiper('.swiper-contain', {
  slidesPerView: 3,
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});












