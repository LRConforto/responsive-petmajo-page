$(document).ready(function()
{
    //menu hamburguer  
    $('#mobile-btn').on('click', function(){
    $('#nav-list').toggleClass('active');
    $('#mobile-btn').find('i').toggleClass('fa-x');
    })
    
    const sections = $('section');
    const navItems = $('.nav-item');

    //indice active
    $(window).on('scroll', function(){ 
        const header = $('header');
        const posicaoScroll = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0; 

        sections.each(function (i){
            
            const section = $(this);
            const sectionTop = section.offset().top - header.outerHeight() - header.outerHeight();
            const sectionBottom = sectionTop + section.outerHeight();

            if(posicaoScroll >= sectionTop && posicaoScroll < sectionBottom){
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');    
        $(navItems[activeSectionIndex]).addClass('active');
    })

})

//Carrossel
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

//Scroll animations
ScrollReveal().reveal('#logo-img',{
  origin: 'top', 
  distance: '0px',
  duration: 1000,
  easing: 'ease',
  scale: 0.50
});

ScrollReveal().reveal('.swiper, #contato-container',{
  origin: 'top', 
  distance: '20%',
  duration: 1500,
  easing: 'ease',
});

ScrollReveal().reveal('.cards, #shape, #avaliacao-img',{
  origin: 'left', 
  distance: '10%',
  duration: 1500,
  easing: 'ease',
});

ScrollReveal().reveal('#feedbacks, #feedback-btn',{
  origin: 'right', 
  distance: '10%',
  duration: 1500,
  easing: 'ease',
});