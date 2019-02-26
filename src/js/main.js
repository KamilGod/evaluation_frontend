jQuery(document).ready(function(){
         
  $(window).scroll(function() {
console.log($(window).width());
      if(($(window).scrollTop() > 125) ) {
      $('header').addClass('stix');
      $('.medias').addClass('stixActives');
      $('nav').addClass('stixActive')
      }else{
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



  $.getJSON("https://wt-4abc83e5c2056740a9e00a6e0975a49a-0.sandbox.auth0-extend.com/city-trip")

  .done(function(data){
      data.forEach(function(country){
          $("<div class='btnsDest'><a href='#'><h3>"+ country.countryName +"</h3></a><div class='clickDest'><p>You ve chosen :" +country.countryName + "</p><p>here are" + country.trips.length + "  city-trips available there !</p></div>"

          ).appendTo('#container');


         
      });

    //   $("<div class='box' data-gender='" + country.gender + "'><p>" + country.countryName + "<strong> " + country.trips + "</strong></p><div class='card " + country.gender + "'> <div class='type'><strong>Type: </strong>" + country.type + "</div><img src='" + country.portrait + "' alt='portrait'></img><div class='language'><strong>Langue parlée: </strong>" + country.language + "</div></div><div class='description'>" + country.description + "</div></div>").appendTo('#container');
    // });
  
  //     //50 hommes et 50 femmes dans le text du millieu
      let hommes = $('[data-gender="Male"]').length;
      let femmes = $('[data-gender="Female"]').length;
      $(".male").prepend(hommes + " ");
      $(".female").prepend(femmes + " ");
  
  })
  .fail(function(){
      alert("Loading error. Please click 'OK'")
  })
  
  
  
  
  
  
  //bouton de selection
  $(".middle-block__buttons .but").click(function(){
      let genre = $(this).data("filter");
      $('.box').hide();
      $('[data-gender='+genre+']').show();
      if (genre == "All") {
       $('.box').show();
      }
  
  
  })
  
  
  //50 hommes et 50 femmes dans le text du millieu (ne marche plus ici)
  
  let hommes = $('[data-gender="Male"]').length;
  let femmes = $('[data-gender="Female"]').length;
  
  $(".male").prepend(hommes + " ")
  $(".female").prepend(femmes + " ")