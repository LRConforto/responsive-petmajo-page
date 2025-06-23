$(document).ready(function()
{
    $('#mobile-btn').on('click', function(){
    $('#nav-list').toggleClass('active');
    $('#mobile-btn').find('i').toggleClass('fa-x');
    }) 
})

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  speed: 1000,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});